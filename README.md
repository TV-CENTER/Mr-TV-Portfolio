# Mr-TV-Portfolio
Bilingual (EN/FA) dark-theme portfolio of Mr.TV, a bug bounty hunter and pentester. Animated hero, skills, selected projects, methodology and contact. Pure HTML, CSS and JavaScript with no frameworks or build step.

سایت رزومه و نمونه‌کار دوزبانه (فارسی/انگلیسی) Mr.TV، باگ‌بانتی‌هانتر و تست‌نفوذگر. تم تیره، انیمیشن حرفه‌ای، مهارت‌ها، نمونه‌کارها، روش کار و ارتباط. فقط HTML، CSS و جاوااسکریپت خالص، بدون فریم‌ورک و بدون بیلد.


# Mr.TV | Bug Bounty Hunter & Pentester Portfolio

A bilingual (English / Persian) personal portfolio website for **Mr.TV**, a bug bounty hunter and penetration tester focused on web, network and low-level security. It is a dark, cinematic one-page site with a crimson glow, built to show skills, tools and working method to employers, bug bounty programs and clients.

The whole site is plain HTML, CSS and JavaScript. No framework, no build step, no backend and no package install.

## Features

- **Two languages, one click.** Switch between English and Persian at any time. Persian switches the whole page to right-to-left, and the chosen language is remembered for the next visit.
- **Intro preloader** with a skip button.
- **Animated hero** with a portrait video (`hero.mp4`) and an automatic image fallback (`logo.png`) when no video is present.
- **Animated counters** and **skill cards** with percentage bars that fill as you scroll.
- **Selected work** section: project cards with a screenshot, a tag line, a bilingual description and a link to the GitHub repository. Empty slots show a "Coming soon" placeholder.
- **Method section** describing the workflow: Recon, Enumerate, Exploit, Report.
- **Contact section** with one-click copy buttons for each contact detail.
- **Polished motion:** scroll reveal, glass-card spotlight, cursor glow. Animations are reduced automatically for visitors who enable "reduce motion".
- **Responsive** layout for desktop, tablet and phone.

## Projects shown on the site

| Project | Description |
| --- | --- |
| [TV-ONE](https://github.com/TV-CENTER/TV-ONE) | Console-based passive reconnaissance tool for domains: security headers, SSL/TLS, WHOIS, DNS and subdomain enumeration. |
| [TV-EYE](https://github.com/TV-CENTER/TV-EYE) | Dependency-free Python pentest and bug bounty console: recon, injection tests, header/TLS audits, port scan and reports. Authorized use only. |

## Project structure

```
.
├── index.html   # page structure and sections
├── style.css    # theme, layout, animations
├── script.js    # content, translations, interactions
├── logo.png     # hero fallback image
├── tv-one.png   # TV-ONE screenshot
├── tv-eye.png   # TV-EYE screenshot
└── hero.mp4     # optional portrait hero video
```

## Getting started

```bash
git clone https://github.com/TV-CENTER/<repo-name>.git
cd <repo-name>
```

Then open `index.html` in your browser. For a local server, any static server works, for example:

```bash
python3 -m http.server 8000
```

## Customization

Almost everything you would want to change lives at the top of `script.js`:

- `CONFIG`: hero video and fallback image.
- `SKILLS`: skill names, percentages and descriptions (English and Persian).
- `PROJECTS`: add a new work item with `title`, `tag`, `desc.en`, `desc.fa`, `link` and `image`.
- `FOCUS`, `STEPS` and `I18N`: focus areas, method steps and all interface text in both languages.

Colors, spacing and animation styles are in `style.css`.

## Deployment

The site is fully static, so it can be hosted anywhere: GitHub Pages, Netlify, Cloudflare Pages or any web server. For GitHub Pages, go to Settings, then Pages, and publish from the main branch.

## Notes

- Fonts are loaded from Google Fonts. Everything else is local.
- The security tools showcased here are intended for **authorized testing only**.

## Contact

- Telegram: [@Mr_TV_ir](https://t.me/Mr_TV_ir)
- GitHub: [TV-CENTER](https://github.com/TV-CENTER)



# Mr.TV | سایت رزومه باگ‌بانتی‌هانتر و تست‌نفوذگر

سایت رزومه و نمونه‌کار شخصی و **دوزبانه (فارسی / انگلیسی)** برای **Mr.TV**، باگ‌بانتی‌هانتر و تست‌نفوذگر با تمرکز روی امنیت وب، شبکه و سطح پایین. یک سایت تک‌صفحه‌ای، تیره و سینمایی با درخشش قرمز که برای نمایش مهارت‌ها، ابزارها و روش کار به کارفرماها، برنامه‌های باگ‌بانتی و مشتری‌ها ساخته شده است.

کل سایت با HTML، CSS و جاوااسکریپت خالص نوشته شده. بدون فریم‌ورک، بدون مرحله بیلد، بدون بک‌اند و بدون نصب پکیج.

## قابلیت‌ها

- **دو زبان، با یک کلیک.** هر لحظه بین فارسی و انگلیسی جابه‌جا شو. با انتخاب فارسی کل صفحه راست‌به‌چپ می‌شود و زبان انتخابی برای بازدید بعدی ذخیره می‌ماند.
- **صفحه آغازین (پیش‌بارگذاری)** با دکمه رد کردن.
- **هیرو انیمیشنی** با ویدیوی پرتره (`hero.mp4`) و جایگزین خودکار تصویر (`logo.png`) وقتی ویدیو موجود نباشد.
- **شمارنده‌های متحرک** و **کارت‌های مهارت** با نوار درصد که هنگام اسکرول پر می‌شود.
- بخش **نمونه‌کارها**: کارت پروژه با اسکرین‌شات، برچسب، توضیح دوزبانه و لینک ریپوی گیت‌هاب. جاهای خالی با عبارت «Coming soon» نمایش داده می‌شوند.
- بخش **روش کار** شامل مراحل: شناسایی، پیمایش، بهره‌برداری، گزارش.
- بخش **ارتباط** با دکمه‌های کپی یک‌کلیکی برای هر راه ارتباطی.
- **حرکت و جلوه‌های حرفه‌ای:** ظاهر شدن با اسکرول، نور دنبال‌کننده روی کارت‌های شیشه‌ای و درخشش دنبال ماوس. برای بازدیدکننده‌هایی که «کاهش حرکت» را فعال کرده‌اند انیمیشن‌ها خودکار کم می‌شود.
- **واکنش‌گرا** برای دسکتاپ، تبلت و موبایل.

## پروژه‌های نمایش داده‌شده در سایت

| پروژه | توضیح |
| --- | --- |
| [TV-ONE](https://github.com/TV-CENTER/TV-ONE) | ابزار کنسولی پایتون برای شناسایی غیرتهاجمی دامنه‌ها (هدر امنیتی، SSL/TLS، WHOIS، DNS و ساب‌دامین). |
| [TV-EYE](https://github.com/TV-CENTER/TV-EYE) | کنسول تست نفوذ و باگ‌بانتی با پایتون (بدون وابستگی): شناسایی، تست تزریق، بررسی هدر و TLS، اسکن پورت و گزارش‌گیری. فقط برای تست مجاز. |

## ساختار پروژه

```
.
├── index.html   # ساختار صفحه و بخش‌ها
├── style.css    # تم، چیدمان و انیمیشن‌ها
├── script.js    # محتوا، ترجمه‌ها و تعامل‌ها
├── logo.png     # تصویر جایگزین هیرو
├── tv-one.png   # اسکرین‌شات TV-ONE
├── tv-eye.png   # اسکرین‌شات TV-EYE
└── hero.mp4     # ویدیوی اختیاری هیرو
```

## شروع سریع

```bash
git clone https://github.com/TV-CENTER/<repo-name>.git
cd <repo-name>
```

بعد فایل `index.html` را در مرورگر باز کن. برای اجرا با سرور محلی هر سرور استاتیکی کافی است، مثلاً:

```bash
python3 -m http.server 8000
```

## شخصی‌سازی

تقریباً هر چیزی که بخواهی عوض کنی بالای فایل `script.js` است:

- `CONFIG`: ویدیوی هیرو و تصویر جایگزین.
- `SKILLS`: نام مهارت‌ها، درصدها و توضیحات (فارسی و انگلیسی).
- `PROJECTS`: برای افزودن نمونه‌کار جدید فیلدهای `title`، `tag`، `desc.en`، `desc.fa`، `link` و `image` را بنویس.
- `FOCUS`، `STEPS` و `I18N`: حوزه‌های تمرکز، مراحل روش کار و تمام متن‌های رابط به هر دو زبان.

رنگ‌ها، فاصله‌ها و استایل انیمیشن‌ها در `style.css` هستند.

## انتشار

سایت کاملاً استاتیک است و روی هر جایی قابل میزبانی است: GitHub Pages، Netlify، Cloudflare Pages یا هر وب‌سرور. برای GitHub Pages به Settings و بعد Pages برو و از برنچ main منتشر کن.

## نکات

- فونت‌ها از Google Fonts بارگذاری می‌شوند و بقیه چیز محلی است.
- ابزارهای امنیتی معرفی‌شده در این سایت فقط برای **تست مجاز** هستند.

## ارتباط

- تلگرام: [@Mr_TV_ir](https://t.me/Mr_TV_ir)
- گیت‌هاب: [TV-CENTER](https://github.com/TV-CENTER)
