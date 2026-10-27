// Stores the register as a JSON file in a GitHub repo via the Contents API.
const API = 'https://api.github.com';
const enc = (s) => { const b = new TextEncoder().encode(s); let bin = ''; for (let i = 0; i < b.length; i += 0x8000) bin += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000)); return btoa(bin); };
const dec = (b64) => new TextDecoder().decode(Uint8Array.from(atob(b64.replace(/\s/g, '')), (c) => c.charCodeAt(0)));
const fileUrl = (c) => `${API}/repos/${encodeURIComponent(c.owner)}/${encodeURIComponent(c.repo)}/contents/${c.path.split('/').filter(Boolean).map(encodeURIComponent).join('/')}`;
const hdr = (c, extra) => ({ Authorization: `Bearer ${c.token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', ...extra });

export class GhError extends Error { constructor(status, msg) { super(msg); this.status = status; } }
const fail = async (r) => { const j = await r.json().catch(() => ({})); return new GhError(r.status, j.message || r.statusText); };

export async function ghTest(c) {
  const r = await fetch(`${API}/repos/${encodeURIComponent(c.owner)}/${encodeURIComponent(c.repo)}`, { headers: hdr(c), cache: 'no-store' });
  if (!r.ok) throw await fail(r);
  const j = await r.json();
  if (j.permissions && !j.permissions.push) throw new GhError(403, 'read-only');
  return { private: j.private, defaultBranch: j.default_branch };
}

export async function ghLoad(c) {
  const q = `?ref=${encodeURIComponent(c.branch)}&_=${Date.now()}`;
  const r = await fetch(fileUrl(c) + q, { headers: hdr(c), cache: 'no-store' });
  if (r.status === 404) return null;
  if (!r.ok) throw await fail(r);
  const j = await r.json();
  let text;
  if (j.encoding === 'base64' && j.content) text = dec(j.content);
  else { const r2 = await fetch(fileUrl(c) + q, { headers: hdr(c, { Accept: 'application/vnd.github.raw+json' }), cache: 'no-store' }); if (!r2.ok) throw await fail(r2); text = await r2.text(); }
  return { db: text.trim() ? JSON.parse(text) : null, sha: j.sha };
}

async function put(c, db, sha, message) {
  const body = { message, content: enc(JSON.stringify(db, null, 1)), branch: c.branch };
  if (sha) body.sha = sha;
  const r = await fetch(fileUrl(c), { method: 'PUT', headers: hdr(c, { 'Content-Type': 'application/json' }), body: JSON.stringify(body) });
  if (!r.ok) throw await fail(r);
  return (await r.json()).content.sha;
}

// Re-reads the latest file, applies fn, writes back; retries if another device wrote in between.
export async function ghCommit(c, fn, message, empty) {
  let last;
  for (let i = 0; i < 4; i++) {
    const cur = await ghLoad(c);
    const base = JSON.parse(JSON.stringify((cur && cur.db) || empty));
    const out = fn(base);
    try { const sha = await put(c, out.db, cur && cur.sha, message); return { ...out, sha }; }
    catch (e) { last = e; if (e.status !== 409 && e.status !== 422) throw e; await new Promise((r) => setTimeout(r, 400 + Math.random() * 600)); }
  }
  throw last;
}
