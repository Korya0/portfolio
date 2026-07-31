# 📋 تقرير التنظيف وإعادة التنظيم — CLEANUP REPORT

تم فحص المشروع **فايل فايل**، وحذف كل ما هو غير مستخدم، ثم إعادة تنظيم الكود طبقًا لمبادئ **Clean Code**.
الملف ده ملخص كامل لكل حاجة اتمسحت واتعدلت.

---

## 1) الملفات المحذوفة (Unused Files)

| الملف | السبب |
|---|---|
| `js/script.js` | فايل فاضي تمامًا وملوش أي `<script>` بيداينه في `index.html` |
| `js/community.js` | كان بيفضل في DOM عناصر مش موجودة (`#communities`, `#cw-points`) = كان هيكسر الصفحة ويطلع **Error** في الـ Console، وقسم الـ Community نفسه مش موجود في الـ HTML أصلًا |
| `css/about.css` | فايل فاضي تمامًا وملوش `<link>` في `index.html` |
| `css/community.css` | فايل فاضي تمامًا وكان مرتبط بلا فايدة |
| `media/others.css` | فايل فاضي تمامًا وكان مرتبط بلا فايدة |
| `media/tablet/m.css` | فايل فاضي تمامًا وكان مرتبط بلا فايدة |
| `media/tablet/others.css` | **مش مرتبط أصلًا** في `index.html` (Dead File) وكان فيه قواعد CSS قديمة لسكشن الـ Community المحذوف |

---

## 2) الصور المحذوفة (Unused Images)

| الصورة | السبب |
|---|---|
| `images/about/about.png` | سكشن الـ About مش موجود في الصفحة |
| `images/tech/figma.svg` | كان مربوط بمدخل `design-tech` في `tech.js` لكن مفيش `<div id="design-tech">` في الـ HTML — الكود كان سايب الـ Div ميت |
| `images/tech/github.svg` | مفيش أي مرجع ليه (المداخل كلها بتستخدم `github-actions.svg`) |
| `images/tech/graphql-svgrepo-com.svg` | مفيش أي مرجع ليه (المستخدم هو `graphql.svg`) |
| `images/tech/notion.svg` | مفيش أي مرجع ليه في أي مكان |

---

## 3) مكتبات / أصول CDN اتمسحت من `index.html`

| الأصل | السبب |
|---|---|
| `iconify.min.js` + `dns-prefetch` بتاعها | مفيش أي `<iconify-icon>` مستخدم |
| `devicon.min.css` | مفيش أي كلاس Devicon مستخدم (كل الأيقونات SVG محلية) |
| `Material Icons` (Google Fonts) | كان مستخدم بس في برانش `Package` الميت في `projects.js` |
| سكربت canonical الأول (جوه الـ `<head>`) | **مكرر** — نفس الشغل اللي بيعمله `index.js` |
| سكربت canonical الثاني (قبل نهاية الـ `<head>`) | **مكرر** — نفس الشغل اللي بيعمله `index.js` |

---

## 4) أكواد ميتة اتمسحت (Dead Code)

### `index.js`
- ❌ الكومنت الكبير المحجوب أول الملف (سطر scroll محجوب بالكامل).
- ❌ `downloadResume()` — مفيش أي حاجة بتناديها (الزر بيستخدم `onMeetClick()` في `contact.js`).
- ❌ متغير `menu = target` مكرر/ميت.
- ❌ `$target` من غير `var` (تسريب للـ Global Scope).
- ❌ **باگ**: كل سكرول كان بيسجل Handler جديد (`window.onscroll` كان بيحط `$(document).on("scroll", onScroll)` جواه) — بقى التسجيل مرة واحدة في `$(document).ready`.
- ❌ Selector غلط `#navbarMenu` → اتصحّح لـ `#navbar-menu`.

### `js/header.js`
- ❌ برانش الـ copy-to-clipboard في السوشيال — مفيش أي سوشيال فيه خاصية `copy` (كود ميت).
- ❌ برانش `link` في الإحصائيات — مفيش أي إحصائية فيها `link` (كود ميت).
- ❌ `innerHTML` على نصوص ثابتة → اتحولت لـ `textContent`.
- ♻️ تكرار منطق إنشاء الأيقونة مرتين → اتعمل `createSocialLink()` واحدة (DRY).

### `js/tech.js`
- ❌ مدخل **Figma** بتاع `design-tech` — مفيش `<div id="design-tech">` في الـ HTML.
- ❌ برانش `icon.startsWith("fa ")` — كل الأيقونات صور SVG (كود ميت).
- ♻️ `tech[i]["icon"]` → `tech.icon` (Dot Notation).

### `js/projects.js`
- ❌ برانشات `App` / `Play` / `Web` / `YouTube` / `Package` / `Docs` في أيقونات اللابلز — مفيش مشروع بيستخدمها (كود ميت).
- ❌ **باگ Closure**: `onerror` كان بياخد آخر قيمة لـ `i` و `title` بدل قيمة كل مشروع — اتصلح بقوله `image.remove()` + تمرير القيم لكل عنصر.
- ♻️ انقسم الكود لـ Helper Functions صغيرة (`createProjectCard`, `createProjectImage`, `createProjectLabels`...).
- ♻️ `LABEL_ICONS` Map بدل if/else طويل.

### `js/experience.js`
- ♻️ `exp[i]["org"]` → `job.org` (Dot Notation).
- ♻️ انقسم لـ Helper Functions (`createTimelineItem`, `createCardHeader`, `createTechPills`, `createDetailsList`).
- ♻️ `var` → `const` / `let`.

### `js/contact.js`
- ❌ **باگ**: `id="mail-icon"` و `id="chevron-icon"` كانوا بيتكرروا على الكارتين الاتنين (Duplicate IDs = HTML غير صالح) → اتحولوا لـ Classes: `.contact-card-icon` / `.contact-card-chevron`.
- ❌ **باگ Closure**: الكود كان بيستخدم آخر `card` في الـ loop → اتصلح بتمرير `card` لدالة `copyToClipboard(text, card)`.
- ♻️ `c["copy"]` → `item.copyText` (تسمية أوضح).

---

## 5) تعديلات Clean Code على الـ HTML

- ❌ **Duplicate IDs**: `id="tech-stack-title"` و `id="tech-stack-text"` كانوا **4 مرات** في الصفحة (HTML غير صالح!) → اتحدوا في Class واحد: `.section-title` / `.section-text` في `css/techStack.css`.
- ❌ Inline Styles متكررة (`style="background-color: transparent; text-align: center;"`) → استُبدلت بـ `class="section-text text-center"`.
- ❌ `<div style="height: 50px;"></div>` → `class="spacer"` (في `index.css`).
- ❌ كلاس `trianlge-right` (غلطة إملائية) → `triangle-right` في HTML وكل ملفات الـ media.
- ❌ `alt=""` فاضية → `alt="menu"`.
- ❌ `alt="muhammad hamza profile picture"` (اسم خطأ) → `alt="Mahmoud Mohamed profile picture"`.
- ❌ `class=" tech-stack"` (مسافة زيادة) → `class="tech-stack"`.
- ❌ `type="text/javascript"` في وسوم `<script>` (قديمة من HTML4) → اتمسحت.
- ✅ اتمسحت وسوم `<script>` و `<link>` للملفات المحذوفة.

---

## 6) تعديلات Clean Code على الـ CSS

- `index.css`: شيلت `#mini-circle`, `#repo-link`, `.foot`, `.foot-text`, `.foot-name`, `.show`, `.hide` — مفيش عنها أي عنصر في الـ HTML.
- `css/header.css`: شيلت `#accelerator-btn` (مفيش زر بالاسم ده) + نسخة مكررة من `@keyframes beat` (اتحتفظ بنسخة واحدة في `index.css`).
- `css/projects.css`: شيلت `#project-subtitle` (مفيش عنصر).
- `components/currentDate.css`: شيلت نسخة مكررة من `@keyframes pulse2` (اتحتفظ بنسخة واحدة في `index.css`).
- `theme/core.css`: شيلت كلاسات `primary`, `text-light`, `bg`, `bg-dark` غير المستخدمة — اتساب بس الـ Design Tokens (`:root`).
- `media/*`: شيلت كل قواعد سكشن الـ Community الميت (`.cw-*`, `.calendar`, `.year-txt`, `.communitites`...) و`#accelerator-btn`.

---

## 7) ملفات تانية اتصححت

| الملف | التعديل |
|---|---|
| `README.md` | كان **تالف** (ترميز UTF-16 مكسور) → اتعاد كتابته كـ Markdown نظيف |
| `manifest.json` | كان فيه **BOM** مخفي أول الملف → اتنضف وصار JSON صالح |

---

## 8) 🔧 إصلاح باغ الشاشة البيضاء (White Flash) أثناء التمرير

**المشكلة:** لما تبقى في سكشن 2 أو 3 وتروح تاب تانية وترجع وتعمل سكرول لفوق بسرعة، بتظهر شاشة بيضاء لحظيًا قبل ما السكشن يظهر.

**السبب:** في `theme/core.css` كانت الخلفية بتتطبق على **كل عنصر** عن طريق:
```css
* { background-color: var(--bg); }
```
دي بترغم المتصفح يعيد رسم كل عنصر لوحده وقت التمرير السريع أو بعد الرجوع للتاب، فتلاقي وميض أبيض قبل ما المحتوى يترسم.

**الحل (اتطبق في `theme/core.css`):**
```css
html, body {
    background-color: var(--bg);
    overflow-x: hidden;
}
* { font-family: 'Montserrat', sans-serif; }  /* الخلفية اتشالت من هنا */
```
- الخلفية بقت مرسومة مرة واحدة على جذر الصفحة (بدل كل عنصر) = لا وميض أبيض.
- `overflow-x: hidden` بيمنع ظهور Scrollbar أفقي من العناصر الزخرفية الكبيرة (زي `.grad-circle` حجمه 650px) اللي كان ممكن يسبب قفزات في التمرير.
- **التصميم مفيش حاجة اتغيرت فيه** — كل الأقسام بتورث نفس اللون من `body` وكل سكشن بيلون نفسه صراحةً.

---

## 🧪 ملاحظات

- **التصميم والوظيفة اتغيروش** — كل التغييرات تنظيف وتنظيم من غير تغيير أي سلوك ظاهر للمستخدم.
- لو عايز ترجع الـ Community section أو أي صورة، كل الحاجات المحذوفة متوفرة في Git history.

---
*التقرير اتعمل تلقائيًا — Mahmoud Portfolio*
