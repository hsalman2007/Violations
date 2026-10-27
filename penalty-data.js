// Transcribed from جدول المخالفات والجزاءات (pages 33–36). p = penalty per occurrence [1st,2nd,3rd,4th]; x = additional deduction.
export const SECTIONS = [
  { id: 0, ar: 'مخالفات تتعلق بمواعيد العمل', en: 'Violations related to working hours', shortAr: 'مواعيد العمل', shortEn: 'Working hours', items: [
    [1, 'التأخر عن مواعيد الحضور للعمل لغاية (15) دقيقة دون إذن، أو عذر مقبول، إذا لم يترتب على ذلك تعطيل عمال آخرين.', 'Late arrival up to 15 minutes without permission or acceptable excuse, without delaying other workers.', ['W','5','10','20']],
    [2, 'التأخر عن مواعيد الحضور للعمل لغاية (15) دقيقة دون إذن، أو عذر مقبول، إذا ترتب على ذلك تعطيل عمال آخرين.', 'Late arrival up to 15 minutes without permission or acceptable excuse, delaying other workers.', ['W','15','25','50']],
    [3, 'التأخر عن مواعيد الحضور للعمل أكثر من (15) دقيقة لغاية (30) دقيقة دون إذن، أو عذر مقبول، إذا لم يترتب على ذلك تعطيل عمال آخرين.', 'Late arrival of 15–30 minutes without permission or acceptable excuse, without delaying other workers.', ['10','15','25','50']],
    [4, 'التأخر عن مواعيد الحضور للعمل أكثر من (15) دقيقة لغاية (30) دقيقة دون إذن، أو عذر مقبول، إذا ترتب على ذلك تعطيل عمال آخرين.', 'Late arrival of 15–30 minutes without permission or acceptable excuse, delaying other workers.', ['25','50','75','1d']],
    [5, 'التأخر عن مواعيد الحضور للعمل أكثر من (30) دقيقة لغاية (60) دقيقة دون إذن، أو عذر مقبول، إذا لم يترتب على ذلك تعطيل عمال آخرين.', 'Late arrival of 30–60 minutes without permission or acceptable excuse, without delaying other workers.', ['25','50','75','1d']],
    [6, 'التأخر عن مواعيد الحضور للعمل أكثر من (30) دقيقة لغاية (60) دقيقة دون إذن، أو عذر مقبول، إذا ترتب على ذلك تعطيل عمال آخرين.', 'Late arrival of 30–60 minutes without permission or acceptable excuse, delaying other workers.', ['30','50','1d','2d'], 'late'],
    [7, 'التأخر عن مواعيد الحضور للعمل لمدة تزيد على ساعة دون إذن، أو عذر مقبول، سواء ترتب أو لم يترتب على ذلك تعطيل عمال آخرين.', 'Late arrival of more than one hour without permission or acceptable excuse, whether or not other workers were delayed.', ['W','1d','2d','3d'], 'hours'],
    [8, 'ترك العمل، أو الانصراف قبل الميعاد دون إذن، أو عذر مقبول بما لا يتجاوز (15) دقيقة.', 'Leaving work or leaving early, without permission or acceptable excuse, by up to 15 minutes.', ['W','10','25','1d'], 'leave'],
    [9, 'ترك العمل، أو الانصراف قبل الميعاد دون إذن، أو عذر مقبول بما يتجاوز (15) دقيقة.', 'Leaving work or leaving early, without permission or acceptable excuse, by more than 15 minutes.', ['10','25','50','1d'], 'leave'],
    [10, 'البقاء في أماكن العمل، أو العودة إليها بعد انتهاء مواعيد العمل دون إذن مسبق.', 'Staying at, or returning to, the workplace after working hours without prior permission.', ['W','10','25','1d']],
    [11, 'الغياب دون إذن كتابي، أو عذر مقبول لمدة يوم، خلال السنة العقدية الواحدة.', 'Absence for one day without written permission or acceptable excuse, within one contract year.', ['50','1d','2d','3d']],
    [12, 'الغياب المتصل دون إذن كتابي، أو عذر مقبول من يومين إلى ستة أيام، خلال السنة العقدية الواحدة.', 'Continuous absence of 2–6 days without written permission or acceptable excuse, within one contract year.', ['2d','3d','4d','PR'], 'absence'],
    [13, 'الغياب المتصل دون إذن كتابي، أو عذر مقبول من سبعة أيام إلى عشرة أيام، خلال السنة العقدية الواحدة.', 'Continuous absence of 7–10 days without written permission or acceptable excuse, within one contract year.', ['4d','5d','PR','TR30'], 'absence'],
    [14, 'الغياب المتصل دون إذن كتابي، أو عذر مقبول من أحد عشر يوماً إلى أربعة عشر يوماً، خلال السنة العقدية الواحدة.', 'Continuous absence of 11–14 days without written permission or acceptable excuse, within one contract year.', ['5d','PRW','T80','-'], 'absence'],
    [15, 'الانقطاع عن العمل دون سبب مشروع مدة تزيد على خمسة عشر يوماً متصلة، خلال السنة العقدية الواحدة.', 'Absence without legitimate reason for more than 15 consecutive days within one contract year.', ['TN10','TN10','TN10','TN10']],
    [16, 'الغياب المتقطع دون سبب مشروع مدداً تزيد في مجموعها على ثلاثين يوماً خلال السنة العقدية الواحدة.', 'Intermittent absence without legitimate reason totalling more than 30 days within one contract year.', ['TN20','TN20','TN20','TN20']],
  ]},
  { id: 1, ar: 'مخالفات تتعلق بتنظيم العمل', en: 'Violations related to work organization', shortAr: 'تنظيم العمل', shortEn: 'Work organization', items: [
    [1, 'التواجد دون مبرر في غير مكان العمل المخصص للعامل أثناء وقت الدوام.', 'Being outside one’s assigned workplace without justification during working hours.', ['10','25','50','1d']],
    [2, 'استقبال زائرين في غير أمور عمل المنشأة في أماكن العمل، دون إذن من الإدارة.', 'Receiving visitors on non-work matters at the workplace without management permission.', ['W','10','15','25']],
    [3, 'استعمال آلات، ومعدات، وأدوات المنشأة؛ لأغراض خاصة، دون إذن.', 'Using company machines, equipment or tools for personal purposes without permission.', ['W','10','25','50']],
    [4, 'تدخل العامل، دون وجه حق في أي عمل ليس في اختصاصه، أو لم يعهد به إليه.', 'Interfering without right in work outside one’s remit or not assigned to them.', ['50','1d','2d','3d']],
    [5, 'الخروج، أو الدخول من غير المكان المخصص لذلك.', 'Exiting or entering through a non-designated place.', ['W','10','15','25']],
    [6, 'الإهمال في تنظيف الآلات، وصيانتها، أو عدم العناية بها، أو عدم التبليغ عن ما بها من خلل.', 'Neglecting to clean or maintain machines, or failing to report faults.', ['50','1d','2d','3d']],
    [7, 'عدم وضع أدوات الإصلاح، والصيانة، واللوازم الأخرى في الأماكن المخصصة لها، بعد الانتهاء من العمل.', 'Not returning repair and maintenance tools and supplies to their place after work.', ['W','25','50','1d']],
    [8, 'تمزيق، أو إتلاف إعلانات، أو بلاغات إدارة المنشأة.', 'Tearing or damaging management announcements or notices.', ['2d','3d','5d','TR']],
    [9, 'الإهمال في العهد التي بحوزته، مثل: (سيارات، آلات، أجهزة، معدات، أدوات، ... إلخ).', 'Negligence with company property in one’s custody (vehicles, machines, devices, equipment, tools, etc.).', ['2d','3d','5d','TR']],
    [10, 'الأكل في مكان العمل، أو غير المكان المعد له، أو في غير أوقات الراحة.', 'Eating at the workstation, outside the designated area, or outside break times.', ['W','10','15','25']],
    [11, 'النوم أثناء العمل.', 'Sleeping during work.', ['W','10','25','50']],
    [12, 'النوم في الحالات التي تستدعي يقظة مستمرة.', 'Sleeping in situations requiring constant alertness.', ['50','1d','2d','3d']],
    [13, 'التسكع، أو وجود العامل في غير مكان عمله، أثناء ساعات العمل.', 'Loitering, or being away from one’s workplace during working hours.', ['10','25','50','1d']],
    [14, 'التلاعب في إثبات الحضور، والانصراف.', 'Tampering with attendance or departure records.', ['1d','2d','PR','TR']],
    [15, 'عدم إطاعة الأوامر العادية الخاصة بالعمل، أو عدم تنفيذ التعليمات الخاصة بالعمل، والمعلقة في مكان ظاهر.', 'Disobeying ordinary work orders, or not following work instructions posted in a visible place.', ['25','50','1d','2d']],
    [16, 'التحريض على مخالفة الأوامر، والتعليمات الخطية الخاصة بالعمل.', 'Inciting others to violate written work orders and instructions.', ['2d','3d','5d','TR']],
    [17, 'التدخين في الأماكن المحظورة، والمعلن عنها للمحافظة على سلامة العمال، والمنشأة.', 'Smoking in prohibited areas designated for the safety of workers and the facility.', ['2d','3d','5d','TR']],
    [18, 'الإهمال، أو التهاون في العمل الذي قد ينشأ عنه ضرر في صحة العمال، أو سلامتهم، أو في المواد، أو الأدوات، والأجهزة.', 'Negligence at work that may harm workers’ health or safety, or materials, tools and equipment.', ['2d','3d','5d','TR']],
  ]},
  { id: 2, ar: 'مخالفات تتعلق بسلوك العامل', en: 'Violations related to worker conduct', shortAr: 'سلوك العامل', shortEn: 'Worker conduct', items: [
    [1, 'التشاجر مع الزملاء، أو مع الغير، أو إحداث مشاغبات في مكان العمل.', 'Quarrelling with colleagues or others, or causing disturbances at the workplace.', ['1d','2d','3d','5d']],
    [2, 'التمارض، أو ادعاء العامل كذباً أنه أصيب أثناء العمل، أو بسببه.', 'Malingering, or falsely claiming an injury at or because of work.', ['1d','2d','3d','5d']],
    [3, 'الامتناع عن إجراء الكشف الطبي عند طلب طبيب المنشأة، أو رفض اتباع التعليمات الطبية أثناء العلاج.', 'Refusing a medical examination requested by the company doctor, or refusing medical instructions during treatment.', ['1d','2d','3d','5d']],
    [4, 'مخالفة التعليمات الصحية المعلقة بأماكن العمل.', 'Violating health instructions posted at the workplace.', ['50','1d','2d','5d']],
    [5, 'الكتابة على جدران المنشأة، أو لصق إعلانات عليها.', 'Writing on, or posting notices on, the facility’s walls.', ['W','10','25','50']],
    [6, 'رفض التفتيش الإداري عند الانصراف.', 'Refusing an administrative search on leaving.', ['25','50','1d','2d']],
    [7, 'عدم تسليم النقود المحصلة لحساب المنشأة في المواعيد المحددة دون تبرير مقبول.', 'Not handing over funds collected for the company on time without acceptable justification.', ['2d','3d','5d','TR']],
    [8, 'الامتناع عن ارتداء الملابس، والأجهزة المقررة للوقاية وللسلامة.', 'Refusing to wear prescribed protective clothing and safety equipment.', ['W','1d','2d','5d']],
    [9, 'تعمد الخلوة مع الجنس الآخر في أماكن العمل.', 'Deliberate seclusion with a member of the opposite sex at the workplace.', ['2d','3d','5d','TR']],
    [10, 'الإيحاء للآخرين بما يخدش الحياء قولاً، أو فعلاً.', 'Indecent suggestions to others, by word or deed.', ['2d','3d','5d','TR']],
    [11, 'الاعتداء على زملاء العمل بالقول، أو الإشارة، أو باستعمال وسائل الاتصال الإلكترونية بالشتم، أو التحقير.', 'Verbally abusing colleagues, by gesture, or via electronic communication, with insults or contempt.', ['2d','3d','5d','TR']],
    [12, 'الاعتداء بالإيذاء الجسدي على زملاء العمل، أو على غيرهم بطريقة إباحية.', 'Physical assault of colleagues or others in an indecent manner.', ['TNX','TNX','TNX','TNX']],
    [13, 'الاعتداء الجسدي، أو القولي، أو بأي وسيلة من وسائل الاتصال الإلكترونية على صاحب العمل، أو المدير المسؤول، أو أحد الرؤساء أثناء العمل، أو بسببه.', 'Physical or verbal assault, by any means including electronic, on the employer, responsible manager or a superior, during or because of work.', ['TNX','TNX','TNX','TNX']],
    [14, 'تقديم بلاغ، أو شكوى كيدية.', 'Filing a malicious report or complaint.', ['3d','5d','TR','-']],
    [15, 'عدم الامتثال لطلب لجنة التحقيق بالحضور.', 'Failing to comply with the investigation committee’s summons.', ['2d','3d','5d','TR']],
    [16, 'عدم التقيد بالزي الرسمي المعتمد بالمنشأة.', 'Not adhering to the company’s official uniform.', ['1d','2d','3d','5d']],
  ]},
];

const DAYS_AR = { '1d': 'يوم', '2d': 'يومين', '3d': 'ثلاثة أيام', '4d': 'أربعة أيام', '5d': 'خمسة أيام' };
const DAYS_EN = { '1d': 'one day', '2d': 'two days', '3d': 'three days', '4d': 'four days', '5d': 'five days' };
const FULL = {
  W: ['إنذار كتابي', 'Written warning'],
  PR: ['تأجيل الترقية أو الحرمان من العلاوة لمرة واحدة', 'Promotion postponed or annual raise withheld once'],
  PRW: ['تأجيل الترقية أو الحرمان من العلاوة لمرة واحدة، مع توجيه إنذار بالفصل طبقاً للمادة (الثمانون) من نظام العمل', 'Promotion postponed or annual raise withheld once, with a dismissal warning under Article 80 of the Labor Law'],
  T80: ['الفصل من العمل طبقاً للمادة (الثمانون) من نظام العمل', 'Dismissal under Article 80 of the Labor Law'],
  TR: ['الفصل من العمل مع المكافأة', 'Dismissal with end-of-service award'],
  TR30: ['الفصل من العمل مع المكافأة إذا لم يتجاوز مجموع الغياب (30) يوماً', 'Dismissal with end-of-service award, provided total absence does not exceed 30 days'],
  TN10: ['الفصل دون مكافأة أو تعويض، على أن يسبقه إنذار كتابي بعد الغياب مدة عشرة أيام، في نطاق حكم المادة (الثمانون) من النظام', 'Dismissal without award or compensation, preceded by a written warning after 10 days’ absence, under Article 80'],
  TN20: ['الفصل دون مكافأة أو تعويض، على أن يسبقه إنذار كتابي بعد الغياب مدة عشرين يوماً، في نطاق حكم المادة (الثمانون) من النظام', 'Dismissal without award or compensation, preceded by a written warning after 20 days’ absence, under Article 80'],
  TNX: ['الفصل بدون مكافأة أو إشعار أو تعويض بموجب المادة (الثمانون)', 'Dismissal without award, notice or compensation under Article 80'],
};
const SHORT = {
  W: ['إنذار كتابي', 'Warning'], PR: ['تأجيل الترقية', 'Promotion hold'], PRW: ['تأجيل + إنذار بالفصل', 'Hold + final warning'],
  T80: ['فصل (م ٨٠)', 'Dismissal (Art. 80)'], TR: ['فصل مع المكافأة', 'Dismissal + award'], TR30: ['فصل مع المكافأة', 'Dismissal + award'],
  TN10: ['فصل دون مكافأة', 'Dismissal, no award'], TN20: ['فصل دون مكافأة', 'Dismissal, no award'], TNX: ['فصل دون مكافأة', 'Dismissal, no award'], '-': ['—', '—'],
};
export const EXTRA = {
  late: ['بالإضافة إلى حسم أجر دقائق التأخر', 'plus deduction of wages for the minutes late'],
  hours: ['بالإضافة إلى حسم أجر ساعات التأخر', 'plus deduction of wages for the hours late'],
  leave: ['بالإضافة إلى حسم أجر مدة ترك العمل', 'plus deduction of wages for the time away from work'],
  absence: ['بالإضافة إلى حسم أجر مدة الغياب', 'plus deduction of wages for the period of absence'],
};
export function penaltyFull(code, lang) {
  const i = lang === 'ar' ? 0 : 1;
  if (FULL[code]) return FULL[code][i];
  if (DAYS_AR[code]) return lang === 'ar' ? `حسم أجر ${DAYS_AR[code]}` : `Deduction of ${DAYS_EN[code]}’ wage`.replace('one day’', 'one day’s');
  if (/^\d+$/.test(code)) return lang === 'ar' ? `حسم ${code}% من الأجر اليومي` : `Deduction of ${code}% of daily wage`;
  return '—';
}
export function penaltyShort(code, lang) {
  const i = lang === 'ar' ? 0 : 1;
  if (SHORT[code]) return SHORT[code][i];
  if (DAYS_AR[code]) return lang === 'ar' ? { '1d': 'يوم', '2d': 'يومان', '3d': 'ثلاثة أيام', '4d': 'أربعة أيام', '5d': 'خمسة أيام' }[code] : { '1d': '1 day', '2d': '2 days', '3d': '3 days', '4d': '4 days', '5d': '5 days' }[code];
  if (/^\d+$/.test(code)) return code + '%';
  return '—';
}
