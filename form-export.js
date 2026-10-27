import { SECTIONS, EXTRA, penaltyFull } from './penalty-data.js';

export const fmtDate = (iso) => { if (!iso) return ''; const [y, m, d] = iso.split('-'); return `${d}/${m}/${y}`; };
export const padNo = (n) => String(n).padStart(4, '0');

export function decisionText(rec, lang) {
  const v = SECTIONS[rec.sec].items.find((i) => i[0] === rec.clause);
  let s = penaltyFull(rec.code, lang);
  if (v[4] && !/^T/.test(rec.code)) s += lang === 'ar' ? ' ' + EXTRA[v[4]][0] : ', ' + EXTRA[v[4]][1];
  return s;
}
const ORD_AR = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة'];
const ORD_EN = ['first', 'second', 'third', 'fourth'];
function decisionLine(rec, lang) {
  const o = Math.min(rec.occ, 4) - 1;
  return lang === 'ar'
    ? `${decisionText(rec, 'ar')} — المرة ${ORD_AR[o]} — اعتباراً من ${fmtDate(rec.date)}م`
    : `${decisionText(rec, 'en')} — ${ORD_EN[o]} occurrence — effective ${fmtDate(rec.date)} G`;
}

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function buildFormHTML(rec, emp, logoUrl) {
  const sec = SECTIONS[rec.sec];
  const v = sec.items.find((i) => i[0] === rec.clause);
  const d = fmtDate(rec.date), no = padNo(rec.no);
  const val = (x) => `<b style="font-family:'Noto Naskh Arabic','Times New Roman',serif;font-size:15px;padding:0 6px;border-bottom:1px dotted #000">${esc(x) || '&nbsp;'}</b>`;
  const ar = "font-family:'Noto Naskh Arabic','Traditional Arabic','Times New Roman',serif";
  const tnr = "font-family:'Times New Roman',Times,serif";
  return `<!doctype html><html dir="rtl"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&family=Noto+Kufi+Arabic:wght@600&display=swap" rel="stylesheet">
<style>@page{size:A4;margin:0}html,body{margin:0;background:#fff;color:#000}*{box-sizing:border-box}p{margin:0}</style></head>
<body><div style="width:794px;height:1123px;position:relative;padding:57px 57px 57px 53px;${tnr};font-size:15px;line-height:1.45;overflow:hidden">
<div style="position:relative;height:230px">
  <img src="${logoUrl}" style="position:absolute;right:0;top:0;width:218px;height:83px;object-fit:contain">
  <div style="position:absolute;left:-12px;top:-27px;width:120px;height:51px;border:1px solid #000;background:#fff;box-shadow:11px 11px 0 #000"></div>
  <div style="position:absolute;left:-24px;top:-29px;width:127px;padding:4px 10px;font-weight:700;font-size:14px;${ar};direction:rtl;text-align:right"><p>نموذج رقم ( 7 )</p><p style="${tnr};direction:ltr;text-align:right">Form no. (7)</p></div>
  <div style="position:absolute;left:208px;top:6px;width:255px;height:83px;border:1px solid #000;background:#fff;box-shadow:11px 11px 0 rgba(128,128,128,.5);text-align:center;padding-top:6px">
    <p style="${tnr};font-weight:700;font-size:21px;direction:ltr">Warning &amp; Penalty</p>
    <p style="font-family:'Noto Kufi Arabic',sans-serif;font-weight:600;font-size:24px;line-height:1.3">إنذار ــ جزاء</p></div>
  <div style="position:absolute;left:-38px;top:118px;width:206px;padding:4px 10px;font-weight:700;font-size:14px">
    <p style="${ar}">التاريخ : ${d} م</p><p style="direction:ltr;text-align:right">Date : ${d} G</p></div>
  <div style="position:absolute;right:-12px;top:120px;width:229px;padding:4px 10px;text-align:center;font-weight:700;font-size:18px">
    <p style="${ar}">إدارة شئون الموظفين</p><p style="${tnr};direction:ltr">Personnel Affairs Dept.</p></div>
</div>
<div style="display:flex;justify-content:space-between;font-size:18px;${ar}"><span>جزاء رقم (${val(no)})</span><span>الرقم الوظيفي (${val(emp.id)})</span><span>تاريخ الجزاء: ${val(d)}</span></div>
<div style="display:flex;justify-content:space-between;font-size:18px;direction:ltr;margin-top:2px"><span>Penalty no. (${val(no)})</span><span>Job no. (${val(emp.id)})</span><span>Date : ${val(d)} G</span></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:22px;font-weight:700;font-size:16px">
  <div style="display:flex;justify-content:space-between;align-items:baseline"><span style="${ar}">الاســــــم :</span>${val(emp.name)}<span>: Name</span></div>
  <div style="display:flex;justify-content:space-between;align-items:baseline"><span style="${ar}">الجنسية:</span>${val(emp.nationality)}<span>Nationality:</span></div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:16px;font-weight:700;font-size:16px">
  <div style="display:flex;justify-content:space-between;align-items:baseline"><span style="${ar}">المشروع:</span>${val(emp.dept)}<span>Project:</span></div>
  <div style="display:flex;justify-content:space-between;align-items:baseline"><span style="${ar}">المهنـــة:</span>${val(emp.job)}<span>: Profession</span></div>
</div>
<div style="margin-top:20px;font-size:16px">
<p style="${ar}">بالإشارة للتحقيق (المكتوب ـ الشفهي) والذي أجري معك فقد ثبت عليك وقوع المخالفة المتمثلة في الآتي :ـ</p>
<p style="direction:ltr;text-align:left">Referring to the (oral - written) interrogation with you, it is proved that you have committed the following violation:</p>
<div style="text-align:center;font-weight:700;margin:6px 0 8px"><p style="${ar}">${esc(v[1])}</p><p style="direction:ltr;font-size:14px">${esc(v[2])}</p></div>
<p style="${ar};text-align:justify">وبناءاً عليه ووفقاً لجدول المخالفات والجزاءات باللائحة التنفيذية لقانون العمل والعمال السعودي (${sec.ar}) وحسب البند (<b>${rec.clause}</b>) قد تقرر:</p>
<p style="direction:ltr;text-align:left">Accordingly, and according to the schedule of violations and penalties in the executive regulations of the Saudi Labor and Workers Law (${sec.en}) and according to Clause (${rec.clause}), it was decided:</p>
<div style="text-align:center;font-weight:700;margin:6px 0 8px"><p style="${ar}">${esc(decisionLine(rec, 'ar'))}</p><p style="direction:ltr;font-size:14px">${esc(decisionLine(rec, 'en'))}</p></div>
<p style="${ar}">وفي حالة تكرارك للمخالفة أو أي مخالفة أخرى ستكون العقوبة أشد وقد تشمل الغرامة أو الإيقاف أو إنهاء خدماتك طبقاً للنظام والقانون</p>
<p style="direction:ltr;text-align:left">If such violation is repeated, a severe penalty will be applicable and may lead to service termination as per statute and law.</p>
<p style="${ar}">آملين عدم تكرار المخالفة أو المخالفات والالتزام بنظم القانون ولوائح العمل الداخلية مؤدياً عملك على أكمل وجه .</p>
<p style="direction:ltr;text-align:left">We hope that such violation will not be repeated and statuary internal bylaws will be strictly followed.</p>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;text-align:center;margin-top:34px;row-gap:46px;font-size:15px">
  <div><p style="${ar}">توقيع العامل بالعلم</p><p style="font-weight:700">Employee Signature for Knowledge</p></div>
  <div><p style="${ar}">مدير الإدارة / المشروع / القسم</p><p style="font-weight:700">Dept./Section/Project Manager</p></div>
  <div><p style="${ar}">الشئون القـانـونيـة</p><p style="font-weight:700;font-size:17px">Legal Affairs</p></div>
  <div><p style="${ar}">مدير إدارة شئون الموظفين</p><p style="font-weight:700;font-size:17px">Personnel Manager</p></div>
</div>
<div style="text-align:center;margin-top:40px"><p style="${ar}">اعتماد الإدارة</p><p style="font-weight:700">Management Approval</p></div>
</div></body></html>`;
}

const W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';
const XML = 'http://www.w3.org/XML/1998/namespace';

export async function fillDocx(templateUrl, rec, emp) {
  const JSZip = window.JSZip;
  const zip = await JSZip.loadAsync(await (await fetch(templateUrl)).arrayBuffer());
  const xml = await zip.file('word/document.xml').async('string');
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  const sec = SECTIONS[rec.sec];
  const v = sec.items.find((i) => i[0] === rec.clause);
  const d = fmtDate(rec.date), no = padNo(rec.no);
  const set = (ts, i, s) => { if (ts[i]) { ts[i].textContent = s; ts[i].setAttributeNS(XML, 'xml:space', 'preserve'); } };
  const addLine = (t, text) => {
    const run = t.parentNode, clone = run.cloneNode(true);
    const rpr = clone.getElementsByTagNameNS(W, 'rPr')[0];
    if (rpr) [...rpr.getElementsByTagNameNS(W, 'rtl')].forEach((n) => n.remove());
    const ct = clone.getElementsByTagNameNS(W, 't')[0];
    ct.textContent = text; ct.setAttributeNS(XML, 'xml:space', 'preserve');
    clone.insertBefore(doc.createElementNS(W, 'w:br'), ct);
    run.parentNode.insertBefore(clone, run.nextSibling);
  };
  for (const p of [...doc.getElementsByTagNameNS(W, 'p')]) {
    const ts = [...p.getElementsByTagNameNS(W, 't')];
    const txt = ts.map((t) => t.textContent).join('');
    if (txt.trim().startsWith('التاريخ :') && ts.length <= 2) set(ts, ts.length - 1, `التاريخ : ${d} م`);
    else if (txt.startsWith('Date :') && ts.length === 5) { set(ts, 0, 'Date : '); set(ts, 1, ''); set(ts, 2, d); set(ts, 3, ''); set(ts, 4, ' G'); }
    else if (txt.startsWith('جزاء رقم') && ts.length >= 30) {
      set(ts, 2, ` ${no} `); set(ts, 3, ''); set(ts, 4, ''); set(ts, 12, ` ${emp.id} `);
      set(ts, 25, d); [26, 27, 28, 29].forEach((i) => set(ts, i, ''));
    } else if (txt.startsWith('Penalty no.') && ts.length >= 10) {
      set(ts, 0, `Penalty no. ( ${no} `); set(ts, 1, `)   Job no. ( ${emp.id} `); set(ts, 2, ''); set(ts, 3, ''); set(ts, 4, '');
      set(ts, 5, ' )  '); set(ts, 7, ` Date : ${d}`); set(ts, 8, ''); set(ts, 9, ' G ');
    } else if (txt.includes('Nationality') && ts.length >= 33) { set(ts, 8, `  ${emp.name}  `); set(ts, 32, `  ${emp.nationality}  `); }
    else if (txt.includes('Profession') && ts.length >= 19) { set(ts, 1, `:  ${emp.dept}  `); set(ts, 18, `  ${emp.job}  `); }
    else if (txt === '(كتابة نوع المخالفة)') { set(ts, 0, v[1]); addLine(ts[0], v[2]); }
    else if (txt.startsWith('وبناءاً عليه') && ts.length >= 8) { set(ts, 2, sec.ar); set(ts, 3, ''); set(ts, 7, String(rec.clause)); }
    else if (txt.startsWith('Accordingly') && ts.length >= 6) { set(ts, 1, sec.en); set(ts, 2, ''); set(ts, 5, String(rec.clause)); }
    else if (txt.startsWith('(ايام الخصم')) { set(ts, 0, decisionLine(rec, 'ar')); addLine(ts[0], decisionLine(rec, 'en')); }
  }
  zip.file('word/document.xml', new XMLSerializer().serializeToString(doc));
  return zip.generateAsync({ type: 'blob', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
}
