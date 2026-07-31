# 📱 خطة الـ Responsive & Adaptive — الموبايل والتابلت فقط

> **القاعدة الذهبية:** الويب (أي شاشة **≥ 769px**) لن يتغير إطلاقًا — ولا حتى 1%.
> كل التعديلات المقترحة هنا محصورة في ملفات الموبايل + ملف تابلت جديد،
> والـ Desktop يفضل زي ما هو بالظبط.

---

## 1) 🎯 القيود المتفق عليها (Constraints)

| ممنوع لمسه إطلاقًا | المسموح بالتعديل عليه |
|---|---|
| `media/desktop/*` (ml / l / xl / xl_4k) | `media/mobile/s.css` (تحسين فقط) |
| `css/*` (header, techStack, projects, exp, contact) | `media/mobile/xs.css` (تحسين فقط) |
| `theme/*` و `index.css` | ملف جديد: `media/tablet/t.css` |
| أي CSS أساسي خارج الـ Media Queries | سطر `<link>` واحد جديد في `index.html` |

---

## 2) 🗺️ خريطة الـ Breakpoints الحالية + الفجوات

| النطاق | الملف الحالي | الحالة |
|---|---|---|
| 320 – 400px | `media/mobile/xs.css` | ✅ موجود |
| 401 – 480px | `media/mobile/s.css` | ✅ موجود |
| **481 – 768px** | **لا يوجد ملف نهائيًا!** | ⚠️ **فجوة كاملة** |
| 769 – 1024px | `media/desktop/ml.css` | ✅ (يُعتبر Desktop — مش هيتلمس) |
| 1025 – 1200px | `media/desktop/l.css` | ✅ (Desktop) |
| 1201px+ | `media/desktop/xl.css` / `xl_4k.css` | ✅ (Desktop) |

### 🔍 أهم الملاحظات التشخيصية

1. **فجوة التابلت (481–768px):** مفيش أي Media Query في النطاق ده.
   - **iPad العمودي = 768px بالظبط** → بيقع في الفجوة وبيشغّل قالب الـ Desktop الأساسي (حجم الصورة 650px، الـ grad-circle 650px...) = تكسير واضح.
   - ملاحظة: `media/tablet/` موجود كفولدر لكنه **فاضي** ومش مربوط في `index.html`.

2. **باگ حقيقي في الموبايل — سكشن الـ Contact:**
   - `.contact-row` في `css/contact.css` هو `display: flex` **أفقي**، و`contact.css` مش فيه أي override في ملفات الموبايل يحوله لـ `column`.
   - النتيجة على شاشة 360px: كارت الـ Contact (400px) + كارت التاريخ (300px) **جنب بعض** = تجاوز كامل للشاشة.
   - `xs.css` بيظبط `.contact-card` لـ 330px بس مش بيحل الـ Row نفسه.

3. **باگ حقيقي في الموبايل — كروت المشاريع:**
   - `.project-card` بعرض ثابت **350px** وملف الموبايل مش بينزّله → على شاشة 320px الكارت أوسع من الشاشة (مقطوع بالـ `overflow-x: hidden`).

4. **الـ `grad-circle` (650px) والدوائر الزخرفية** مش متخفية/متظبطة على الموبايل — رسمة كتير على شاشة صغيرة.

---

## 3) 📐 الاقتراحات لكل سكشن

---

### 3.1 الـ Navbar

- **الحالية:** `navbar-expand-md` (Bootstrap بيكسر القائمة لـ hamburger تلقائيًا تحت 768px) + `.navbar-action { padding-left: 5vw }` من الـ base، والقائمة المنسدلة من غير أي خلفية/مسافات.
- **المشكلة:** على الموبايل القائمة المنسدلة لاصقة ومليانة مسافات شاذة، وعلى التابلت (481–768) بتظهر collapsible من غير ستايل.

| | الاقتراح |
|---|---|
| 📱 **موبايل (≤480)** | خلفية `var(--bg-dark)` + padding للـ `.navbar-collapse` وقت الفتح، `navbar-action { padding-left: 0 }` جوه القائمة، ارتفاع لينك ≥ 44px لمنطقة لمس مريحة |
| 📟 **تابلت (481–768)** | نفس ستايل القائمة المنسدلة في **481–767px** (Bootstrap بيكسر القائمة تحت 768)، وعند 768px بالظبط القائمة بتتفتح تلقائيًا — يعني الستايل ده بيتطبق فعليًا على 481–767 فقط؛ وتقليل padding الـ navbar لـ `4%` بدل `10%` |

---

### 3.2 الهيدر Hero (الاسم + الصورة + الإحصائيات)

- **الحالية:** `grad-circle` 650px، صورة `dp` 650px (Desktop) و300–400px (موبايل)، `stats` عمود طويل من 3 صفوف على الموبايل، والدوائر `#circle-1/2` ظاهرة في نص الشاشة.
- **المشكلة:** الـ `grad-circle` لسه 650px على الموبايل، والـ stats عمود طويل بياكل مساحة عمودية، والدوائر الزخرفية بتشتت.

| | الاقتراح |
|---|---|
| 📱 **موبايل (≤480)** | إخفاء `grad-circle` على xs (و~300px على s)؛ **شبكة الـ stats**: عمود على xs ثم صفّ أفقي (3 في صف) على s فقط، مع تصغير `.stats-label-column` (150px ثابتة → مرنة) و`.value` حتى يكفي 3 عناصر جنب بعض على 401–480px؛ تصغير `dp` لـ ~260–280px؛ إخفاء `#circle-1` و`#circle-2` |
| 📟 **تابلت (481–768)** | الإبقاء على التكوين الجانبي (نص يمين / صورة شمال) زي الـ Desktop، مع تصغير `grad-circle` لـ ~380–420px و`dp` لـ ~380px، والـ stats أسفل يسار زي الـ Desktop |

---

### 3.3 الدوائر الزخرفية (`#circle-1` / `#circle-2`)

| | الاقتراح |
|---|---|
| 📱 **موبايل (≤480)** | إخفاؤهم (`display: none`) — عناصر زخرفية مش مهمة على شاشة صغيرة |
| 📟 **تابلت (481–768)** | الإبقاء مع تصغير القطر (20px → 14px) وتعديل المواقع حتى ما يتحوشوش على المحتوى |

---

### 3.4 زر الصعود `#up`

- **الحالية:** `position: fixed; right: 0; bottom: 8%` — شغال عادي.
- **الاقتراح:** إضافة `bottom: calc(8% + env(safe-area-inset-bottom))` للموبايل (أمان الـ iPhone notch)، وتقليل الـ padding لـ `12px` على الشاشات الصغيرة.

---

### 3.5 سكشن الـ Tech Stack

- **الحالية:** الموبايل بيعمل `flex-direction: column` (صح ✅) مع `#stack-illustration` بحجم 300px.
- **المشكلة:** الصورة بتاخد مساحة عمودية كبيرة على الشاشات الصغيرة جدًا.

| | الاقتراح |
|---|---|
| 📱 **موبايل (≤480)** | على xs (≤400px): إخفاء `#stack-illustration` (أو تصغيره لـ ~180px) لتوفير المساحة؛ وتظبيط الـ padding العلوي/السفلي للسكشن |
| 📟 **تابلت (481–768)** | الإبقاء على التكوين الجانبي (التفاصيل يمين + الصورة شمال) زي الـ Desktop، مع `#stack-illustration { height: 300px }` و`section-text` بعرض مرن |

---

### 3.6 سكشن الـ Projects

- **الحالية:** `.project-card` بعرض ثابت **350px** + `margin: 1em`، ومفيش أي تعديل في ملفات الموبايل.
- **المشكلة:** overflow أفقي على الشاشات ≤ 380px + مساحات ضياع.

| | الاقتراح |
|---|---|
| 📱 **موبايل (≤480)** | `.project-card { width: 100%; max-width: 350px; margin: 1em auto; }` و`.p-image { height: 170px; }` — كارت واحد في الصف متمركز |
| 📟 **تابلت (481–768)** | **كرتين في الصف:** `.project-card { width: calc(50% - 2em); margin: 1em; }` أو `flex: 1 1 300px; max-width: 350px;` وضبط padding الـ `.projects` لـ ~3% |

---

### 3.7 سكشن الـ Experience

- **الحالية:** الموبايل بيخفي خط الـ timeline والنقط ويخلي الكروت full width (مضبوط ✅). التابلت (481–768) مفيش قواعد — بيلعب قالب الـ Desktop بالـ line والنقط.
- **المشكلة:** على التابلت الـ `.exp-timeline` بعرض 85% + padding-left 44px شوية تضييق.

| | الاقتراح |
|---|---|
| 📱 **موبايل (≤480)** | خليهم زي ما هم (مضبوطين)، تحسينات مسافات بسيطة فقط |
| 📟 **تابلت (481–768)** | **الإبقاء على الـ timeline (الخط الأخضر + النقط)** — شكل جميل على التابلت؛ `.exp-timeline { width: 90%; }` و`.exp-card { padding: 20px 24px; }` |

---

### 3.8 سكشن الـ Contact + Current Date ⚠️ (أهم باگ)

- **الحالية:** `.contact-row { display: flex }` **أفقي** في كل الأحجام + `.contact-card` 400px + `.current-date-container` 300px.
- **المشكلة:** على الموبايل الكروت جنب بعض = **تجاوز كامل** (السكشن مكسور فعلًا على الموبايل حاليًا).

| | الاقتراح |
|---|---|
| 📱 **موبايل (≤480)** | `.contact-row { flex-direction: column; align-items: center; }` + `.contact-info-div { padding-left: 0; width: 100%; }` + `.contact-card { width: min(400px, 92vw); }` + `.current-date-container { width: min(300px, 92vw); }` + `.social-contact-icons { flex-wrap: wrap; }` |
| 📟 **تابلت (481–768)** | الإبقاء على الـ Row الأفقي (ينفع من 481+) مع `.contact-row { gap: 24px; }` وتصغير `.contact-card` لـ `min(400px, 45vw)` |

---

### 3.9 لمسات عامة (UX على اللمس)

| اللمسة | التفاصيل |
|---|---|
| 📏 **Touch targets** | كل العناصر القابلة للضغط ≥ 44×44px (أزرار السوشيال، لينكات القائمة، أزرار المشاريع) |
| 🍎 **Safe areas** | `env(safe-area-inset-bottom)` على `#up` وسكشن الـ Contact للشاشات ذات النوتش |
| 🔄 **Landscape (الموبايل الأفقي)** | Media Query إضافية `(orientation: landscape) and (max-height: 500px)` لتصغير الهيدر والمسافات حتى ما يختفي المحتوى |
| 📉 **شاشات أقل من 320px** | إضافة `@media (max-width: 319px)` داخل `xs.css` لضبط الشاشات القديمة جدًا |

---

## 4) 🗂️ ملفات التنفيذ المقترحة

1. **إنشاء `media/tablet/t.css`** — النطاق `min-width: 481px and max-width: 768px`.
2. **ربطه في `index.html`** — سطر واحد بعد ملفات الموبايل وقبل ملفات الـ Desktop:
   ```html
   <!-- tablet -->
   <link rel="stylesheet" href="media/tablet/t.css">
   ```
3. **تعديل `media/mobile/s.css` و `media/mobile/xs.css`** — إصلاح باگ الـ Contact + كروت المشاريع + الـ grad-circle + الـ stats.
4. **صفر تعديل** على أي ملف Desktop أو على الـ base CSS.

---

## 5) 🧪 نموذج كود مقترح (يُفضل مراجعته قبل التنفيذ)

### ملف `media/tablet/t.css` الجديد (481–768px)

```css
/* ── Tablet portrait (481px - 768px) ── */
@media only screen and (min-width: 481px) and (max-width: 768px) {

    /* Navbar */
    #app-navbar { padding-left: 4%; padding-right: 8%; }
    #brand { font-size: 20px; }
    .navbar-collapse {
        background-color: var(--bg-dark);
        padding: 12px 16px;
        border-radius: 8px;
        margin-top: 8px;
    }
    .navbar-action { padding-left: 0; padding: 6px 0; }

    /* Hero */
    .grad-circle { height: 400px; width: 400px; top: 30%; right: -8%; }
    .tag-wrapper { padding-top: 8%; padding-left: 6%; }
    .name { padding-top: 1%; padding-left: 6%; }
    #first-name, #last-name { font-size: 38px; }
    .tag { padding-top: 2%; padding-left: 6%; display: flex; }
    .dash { margin-left: 6%; width: 80px; }
    .chat { padding-top: 4%; }
    #chat-btn { padding-left: 6%; }
    .stats-div { position: absolute; padding-left: 5%; bottom: 4%; }
    .stats-data { padding-right: 5%; }
    .profile-picture { right: 4%; }
    .dp { height: 380px; }
    .space { padding-top: 22%; }

    /* Decorative circles */
    #circle-1, #circle-2 { height: 14px; width: 14px; }

    /* Tech stack */
    #stack-illustration { height: 300px; }

    /* Projects: 2 cards per row */
    .projects { padding-left: 3%; padding-right: 3%; }
    .project-card { width: calc(50% - 2em); margin: 1em; }

    /* Experience: keep timeline */
    .exp-timeline { width: 90%; }
    .exp-card { padding: 20px 24px; }

    /* Contact: keep side-by-side row */
    .contact-row { gap: 24px; }
    .contact-card { width: min(400px, 45vw); }
}
```

### إصلاحات `media/mobile/` (مثال — تُدمج في s.css و xs.css)

```css
/* سكشن الـ Contact: تحويله لعمود على الموبايل (إصلاح الباگ) */
.contact-row { flex-direction: column; align-items: center; }
.contact-info-div { padding-left: 0; width: 100%; }
.contact-card { width: min(400px, 92vw); }
.current-date-container { width: min(300px, 92vw); }
.social-contact-icons { flex-wrap: wrap; justify-content: center; }

/* كروت المشاريع: عرض مرن بدل 350px الثابتة */
.project-card { width: 100%; max-width: 350px; margin: 1em auto; }
.p-image { height: 170px; }

/* الـ grad-circle والدوائر: تخفيف على الموبايل */
.grad-circle { display: none; }          /* في xs.css فقط */
/* في s.css نستبدلها بـ: .grad-circle { height: 300px; width: 300px; } */
#circle-1, #circle-2 { display: none; }

/* شبكة الـ stats: عمود على xs، وصف أفقي (3 في صف) على s مع تصغير العمود */
.stats-div { flex-direction: row; flex-wrap: wrap; justify-content: center; }
.stats-data { margin-left: 0; padding: 10px 4%; }
.stats-label-column { width: auto; }
.value { font-size: 20px; }

/* زر الصعود: أمان الشاشات ذات النوتش */
.up { bottom: calc(8% + env(safe-area-inset-bottom)); }

/* Landscape للموبايل */
@media only screen and (max-width: 900px) and (orientation: landscape) and (max-height: 500px) {
    .grad-circle { display: none; }
    .tag-wrapper { padding-top: 3%; }
    .dp { height: 200px; }
    .space { padding-top: 0; }
    .stats-div { position: static; }
}
```

---

## 6) ✅ Check-list للتجربة (بعد التنفيذ)

| الجهاز / العرض | المتوقع |
|---|---|
| 320px (iPhone SE قديم) | لا overflow، Contact عمودي، كارت مشروع واحد مركّز |
| 360 – 400px (iPhone 12/13/14) | نفس الشكل النظيف + قائمة منسدلة مظبطة |
| 401 – 480px (iPhone Plus/Pro Max) | هيدر متزن + stats شبكة أفقية |
| **481 – 768px (iPad العمودي)** | التكوين الجانبي للهيدر + كرتين مشاريع في الصف + timeline ظاهرة |
| 769px فما فوق | **صفر تغيير** — نفس البكسل بتاع الـ Desktop الحالي |

---

*التقرير أُعدّ كاقتراح فقط — لم يتم تعديل أي ملف CSS حتى الآن.*
*بعد مراجعتك للخطة، يُنفَّذ التعديل داخل `media/mobile/*` + `media/tablet/t.css` فقط.*
