/* ---------- CONFIG (edit these) ---------- */
const CONFIG = {
  HERO_VIDEO: "hero.mp4",   // portrait video, chest-up, black suit + sunglasses
  HERO_IMAGE: "logo.png"      // used when no video is present
};
const SKILLS = [
  {n:"Python", p:84, core:true,  t:{en:"Automation, fuzzers, exploit scripts",fa:"اتوماسیون، فازر و اسکریپت اکسپلویت"}},
  {n:"C++", p:80, core:true,  t:{en:"Systems and memory",fa:"سیستم و حافظه"}},
  {n:"JavaScript", p:78, core:true,  t:{en:"Web attack surface, XSS, DOM",fa:"سطح حمله وب، XSS و DOM"}},
  {n:"Assembly", p:74, core:true,  t:{en:"Reversing and low-level analysis",fa:"مهندسی معکوس و تحلیل سطح پایین"}},
  {n:"Java (Networking)", p:72, core:true,  t:{en:"Sockets, protocols, network apps",fa:"سوکت، پروتکل و برنامه‌های شبکه"}},
  {n:"Ruby", p:66, core:false, t:{en:"Tooling and scripting",fa:"ابزارسازی و اسکریپت"}},
  {n:"HTML / CSS", p:64, core:false, t:{en:"Markup, forms, page structure",fa:"ساختار صفحه و فرم‌ها"}}
];
const PROJECTS = [  // fill these in later: {title, desc, link, image}
  {
    title:"TV-ONE",
    tag:"Python · CLI · Recon",
    desc:{
      en:"Console-based passive reconnaissance tool for domains — security headers, SSL/TLS, WHOIS, DNS, and subdomain enumeration — built for authorized bug bounty and penetration testing recon. By Mr_TV.",
      fa:"ابزار کنسولی پایتون برای شناسایی غیرتهاجمی دامنه‌ها (هدر امنیتی، SSL، WHOIS، DNS و ساب‌دامین) — مناسب فاز Recon در باگ بانتی و تست نفوذ قانونی. ساخته‌شده توسط Mr_TV."
    },
    link:"https://github.com/TV-CENTER/TV-ONE",
    image:"tv-one.png"
  },{
    title:"TV-EYE",
    tag:"Python · Pentest · Bug Bounty",
    desc:{
      en:"Dependency-free Python pentest and bug bounty console: recon, injection tests, header/TLS audits, port scan and reports. Authorized use only.",
      fa:"کنسول تست نفوذ و باگ‌بانتی با پایتون (بدون وابستگی): شناسایی، تست تزریق، بررسی هدر و TLS، اسکن پورت و گزارش‌گیری. فقط برای تست مجاز."
    },
    link:"https://github.com/TV-CENTER/TV-EYE",
    image:"tv-eye.png"
  },{}
];
const FOCUS = {en:["Bug Bounty","Penetration Testing","Web App Security","Network Security","Vulnerability Research","Reverse Engineering"],
               fa:["باگ بانتی","تست نفوذ","امنیت وب","امنیت شبکه","تحقیق آسیب‌پذیری","مهندسی معکوس"]};
const STEPS = {en:[["Recon","Map the scope, assets and technology before touching anything."],["Enumerate","Find endpoints, parameters, services and trust boundaries."],["Exploit","Prove impact with the smallest safe proof of concept."],["Report","Clear steps, severity and a fix the team can ship."]],
               fa:[["شناسایی","قبل از هر کاری، محدوده و دارایی‌ها و تکنولوژی‌ها رو نقشه‌برداری می‌کنم."],["پیمایش","اندپوینت‌ها، پارامترها، سرویس‌ها و مرزهای اعتماد رو پیدا می‌کنم."],["بهره‌برداری","تاثیر رو با کوچک‌ترین PoC امن ثابت می‌کنم."],["گزارش","مراحل روشن، شدت آسیب‌پذیری و راه‌حلی که تیم بتونه اجرا کنه."]]};
const I18N = {
 en:{name:"Mr.TV",pre_load:"Loading the experience",pre_skip:"Skip intro",n_about:"About",n_skills:"Skills",n_work:"Selected work",n_method:"Method",n_touch:"Get in touch",
  hey:"Hey, I'm Mr.TV",h1a:"Bug Bounty",h1b:"Hunter & Pentester",intro_k:"(01 — Intro)",intro_t:"I break things carefully so they can be fixed properly.",intro_p:"Low-level code, web and network security, and reports that developers can act on.",intro_a:"Explore my work ↗",
  s1:"Years old, already hunting",s2:"Languages in my toolbox",s3:"Security focus areas",s4:"Peak proficiency in core security languages",foot1:"Built with purpose. Tested like a target.",foot2:"Scroll to discover ↓",
  a_k:"(02 — About)",a_h:"Offensive security, <em>from the metal up.</em>",a_p1:"Hi, I'm Mr.TV and I'm 19. I work as a bug bounty hunter and penetration tester. I like understanding a system all the way down, from assembly and memory to the web app on top, because that is where the interesting bugs live.",a_p2:"I work in C++, Assembly, Python, JavaScript, Java (networking), HTML/CSS and Ruby, and I pick the one that fits the target.",
  k_k:"(03 — Skills)",k_h:"Languages & <em>proficiency</em>",k_p:"Security-heavy languages sit at 70–80% and above. The rest are above 60%.",lg1:"Core security stack",lg2:"Supporting stack",
  w_k:"(04 — Projects)",w_h:"Selected <em>work</em>",w_p:"Write-ups, tools and findings. More are on the way.",m_k:"(05 — Method)",m_h:"How I <em>hunt</em>",
  c_k:"(06 — Contact)",c_h:"Got a target worth testing?",c_p:"Reach me directly. I reply fastest on Telegram.",phone:"Phone",soon:"Coming soon",slot:"project preview",copied:"Copied",view:"View project ↗"},
 fa:{name:"Mr.TV",pre_load:"در حال بارگذاری",pre_skip:"رد کردن",n_about:"درباره من",n_skills:"مهارت‌ها",n_work:"نمونه کارها",n_method:"روش کار",n_touch:"ارتباط با من",
  hey:"سلام، من Mr.TV هستم",h1a:"باگ بانتی",h1b:"و تست نفوذ",intro_k:"(۰۱ — معرفی)",intro_t:"با دقت می‌شکنم تا درست ترمیم بشه.",intro_p:"کد سطح پایین، امنیت وب و شبکه، و گزارش‌هایی که توسعه‌دهنده‌ها می‌تونن روشون کار کنن.",intro_a:"نمونه کارها ↗",
  s1:"سال سن، و فعال در شکار باگ",s2:"زبان برنامه‌نویسی",s3:"حوزه تخصصی امنیت",s4:"بیشترین تسلط در زبان‌های امنیتی",foot1:"با هدف ساخته شده. مثل یک تارگت تست شده.",foot2:"برای ادامه اسکرول کن ↓",
  a_k:"(۰۲ — درباره من)",a_h:"امنیت تهاجمی، <em>از سطح سخت‌افزار به بالا.</em>",a_p1:"سلام من Mr.TV هستم و 19سالمه, کارم شکارچی باگ و تست نفوذ. دوست دارم یک سیستم رو از پایینترین لایه, از اسمبلی و حافظه تا اپلیکیشن وب, بفهمم, چون باگ های جذاب همونجاست.",a_p2:"با C++‎, اسمبلی, پایتون, جاوا اسکریپت, جاوا (شبکه), HTML/CSS و روبی کار میکنم و هر کدوم رو متناسب با تارگت انتخاب میکنم .",
  k_k:"(۰۳ — مهارت‌ها)",k_h:"زبان‌ها و <em>میزان تسلط</em>",k_p:"زبان‌های امنیتی بین ۷۰ تا ۸۰ درصد و بالاتر هستن. بقیه بالای ۶۰ درصد.",lg1:"زبان‌های اصلی امنیت",lg2:"زبان‌های مکمل",
  w_k:"(۰۴ — پروژه‌ها)",w_h:"نمونه <em>کارها</em>",w_p:"رایت‌آپ‌ها، ابزارها و یافته‌ها. موارد بیشتر در راهه.",m_k:"(۰۵ — روش کار)",m_h:"چطور <em>شکار می‌کنم</em>",
  c_k:"(۰۶ — ارتباط)",c_h:"تارگتی برای تست داری؟",c_p:"مستقیم پیام بده. توی تلگرام سریع‌تر جواب می‌دم.",phone:"تلفن",soon:"به‌زودی",slot:"پیش‌نمایش پروژه",copied:"کپی شد",view:"مشاهده پروژه ↗"}
};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let lang="en";
try{ lang = localStorage.getItem("lang") || "en"; }catch(e){}

function render(){
  const d=I18N[lang];
  document.documentElement.lang=lang; document.documentElement.dir = lang==="fa"?"rtl":"ltr";
  $$("[data-i]").forEach(el=>{const v=d[el.dataset.i]; if(v!==undefined){ el.innerHTML=v; }});
  $("#langLbl").textContent = lang==="fa" ? "English" : "فارسی";
  $("#chips").innerHTML = FOCUS[lang].map(x=>`<span class="chip">${x}</span>`).join("");
  $("#skillGrid").innerHTML = SKILLS.map(s=>`<div class="card sk rv ${s.core?'core':''}"><div class="row"><span class="nm">${s.n}</span><span class="pc"><b data-to="${s.p}">0</b>%</span></div><div class="track"><div class="fill" data-w="${s.p}"></div></div><span class="mono tag">${s.t[lang]}</span></div>`).join("");
  $("#workGrid").innerHTML = PROJECTS.map((p,i)=>{
    const has = p.title;
    return `<div class="card proj rv"><div class="shot">${p.image?`<img src="${p.image}" alt="">`:`<span>[ ${d.slot} ${String(i+1).padStart(2,"0")} ]</span>`}</div><div><span class="mono">${has?(p.tag||""):d.soon}</span><h3>${has?p.title:"— — —"}</h3><p>${has?((p.desc&&p.desc[lang])||p.desc||""):""}</p>${has&&p.link?`<a class="go" href="${p.link}" target="_blank" rel="noopener">${d.view}</a>`:""}</div></div>`}).join("");
  $("#steps").innerHTML = STEPS[lang].map((s,i)=>`<div class="card step rv"><span class="k">0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("");
  observe(); revealBelow();
}

/* counters */
function countUp(el,to,dur=1400){const t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-k,3);el.textContent=Math.round(to*e);if(k<1)requestAnimationFrame(f)})(t0)}
let counted=false;
function runHeroCounts(){ if(counted)return; counted=true; $$("[data-count]").forEach(el=>countUp(el,+el.dataset.count)); }

/* scroll reveal + skill bars */
let io;
function observe(){
  if(io) io.disconnect();
  io=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting) return;
    const el=e.target; el.classList.remove("pre");
    el.querySelectorAll("[data-w]").forEach(f=>f.style.width=f.dataset.w+"%");
    el.querySelectorAll("[data-to]").forEach(b=>countUp(b,+b.dataset.to,1300));
    io.unobserve(el);
  }),{threshold:0,rootMargin:"0px 0px -6% 0px"});
  $$(".rv").forEach(el=>io.observe(el));
}
function revealBelow(){ /* start below-fold items hidden, with a safety net so nothing stays invisible */
  $$(".rv").forEach(el=>{ if(el.getBoundingClientRect().top>innerHeight) el.classList.add("pre"); else {el.querySelectorAll("[data-w]").forEach(f=>f.style.width=f.dataset.w+"%");el.querySelectorAll("[data-to]").forEach(b=>countUp(b,+b.dataset.to,1300));} });
  setTimeout(()=>{ if(scrollY<5) return; },0);
}
addEventListener("load",()=>setTimeout(()=>{ if(!("IntersectionObserver" in window)) $$(".pre").forEach(e=>e.classList.remove("pre")); },3000));

/* glass-card spotlight + cursor glow */
document.addEventListener("pointermove",e=>{
  const s=$("#spot"); s.style.left=e.clientX+"px"; s.style.top=e.clientY+"px";
  const c=e.target.closest&&e.target.closest(".card"); if(c){const r=c.getBoundingClientRect(); c.style.setProperty("--mx",(e.clientX-r.left)+"px"); c.style.setProperty("--my",(e.clientY-r.top)+"px");}
});

/* language */
$("#lang").onclick=()=>{ lang = lang==="en"?"fa":"en"; try{localStorage.setItem("lang",lang)}catch(e){} render(); };

/* preloader */
function endPre(){ const p=$("#pre"); if(p.classList.contains("gone")) return; p.classList.add("gone"); runHeroCounts(); }
$("#skip").onclick=endPre; setTimeout(endPre,2300);

/* copy phone */
$("#copyPhone").onclick=async()=>{
  const b=$("#copyPhone"); let ok=false;
  try{ await navigator.clipboard.writeText(b.dataset.copy); ok=true; }catch(e){
    const r=document.createRange(); r.selectNodeContents(b.querySelector("bdi")); const s=getSelection(); s.removeAllRanges(); s.addRange(r);
  }
  $("#okMsg").textContent = ok ? I18N[lang].copied : ""; setTimeout(()=>$("#okMsg").textContent="",1800);
};

/* hero media: video → image → built-in placeholder */
function setMedia(kind,src){
  const stage=$("#stage"); $$("#stage video,#stage img.photo").forEach(n=>n.remove());
  const sil=$("#sil");
  if(kind==="video"){
    const v=document.createElement("video"); v.muted=true; v.loop=true; v.autoplay=true; v.playsInline=true; v.setAttribute("playsinline","");
    v.onloadeddata=()=>{sil.style.display="none"; v.play().catch(()=>{});}; v.onerror=()=>{v.remove(); sil.style.display="";};
    v.src=src; stage.appendChild(v);
  }else{
    const im=new Image(); im.className="photo"; im.alt="";
    im.onload=()=>{sil.style.display="none"; stage.appendChild(im);}; im.onerror=()=>{ sil.style.display=""; };
    im.src=src;
  }
}
function autoMedia(){
  const probe=document.createElement("video"); probe.preload="metadata";
  probe.onloadedmetadata=()=>setMedia("video",CONFIG.HERO_VIDEO);
  probe.onerror=()=>setMedia("image",CONFIG.HERO_IMAGE);
  probe.src=CONFIG.HERO_VIDEO;
}

render(); autoMedia();
