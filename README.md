# Penalty Register · سجل الجزاءات

Static web app for issuing staff warnings/penalties per the Saudi Labor Law violations schedule, tracking repeat offences per employee ID, and exporting the filled Form 7 (Word / PDF).

## Host on GitHub Pages
1. Create a repo and upload **everything in this folder** (keep the folder structure).
2. Repo → Settings → Pages → Source: *Deploy from a branch* → `main` / root → Save.
3. Open `https://<user>.github.io/<repo>/`.

## Files
- `index.html` — entry, redirects to the app
- `Penalty App.dc.html` — the app
- `support.js` — runtime (loads React from CDN)
- `penalty-data.js` — violations & penalty ladder (edit here to change the schedule)
- `github-sync.js` — reads/writes the records file through the GitHub API
- `form-export.js` — fills `assets/penalty-form.docx` and builds the PDF print view
- `assets/` — Word template and logo
- `_ds/` — stylesheet

## Storing records on GitHub (shared across devices)
Records are saved as one JSON file in a GitHub repository; every issued/deleted penalty becomes a commit (full audit history).

1. Create a **separate private repository** for the data, e.g. `penalty-records` (employee data must not be public). Add any file (e.g. a README) so the repo has a `main` branch.
2. Create a fine-grained token: GitHub → Settings → Developer settings → Personal access tokens → Fine-grained → *Generate new token*.
   - Repository access: **Only select repositories** → `penalty-records`
   - Permissions → Repository → **Contents: Read and write**
   - Set an expiry and note the date.
3. In the app: **Records → Storage on GitHub** → enter owner, repo, branch (`main`), file path (default `data/penalty-records.json`) and the token → **Connect**.
   - If the file doesn't exist it is created from this device's data; if it exists, this device loads it.
4. Repeat step 3 on each device/user (each can have their own token).

The app re-reads the file before every save and retries on conflicts, so two devices issuing at once won't overwrite each other or duplicate penalty numbers. It refreshes every minute and when the tab regains focus. A local copy is kept on each device for offline viewing; saving requires a connection when GitHub is on.

The token is stored only in that browser's localStorage. Anyone with the token can edit the records repo — revoke it in GitHub if a device is lost.

## Other data tools
**Download backup / Restore backup** (JSON) and **Export Excel (CSV)** are under Records.
Requires internet (fonts, React, JSZip load from CDNs).
