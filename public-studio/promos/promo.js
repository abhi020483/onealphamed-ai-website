const PS = {
  cream: "#F5F1E6",
  paper: "#FBF9F1",
  card: "#FFFFFF",
  ink: "#20241E",
  soft: "#6B6F62",
  line: "#DFD8C6",
  green: "#223528"
};
const SERIF = '"Newsreader", Georgia, serif';
const SANS = '"Instrument Sans", system-ui, sans-serif';
const SANSD = '"Instrument Sans", "Noto Sans Devanagari", system-ui, sans-serif';
const MONO = '"Spline Sans Mono", ui-monospace, monospace';
const EIO = Easing.easeInOutCubic, EO = Easing.easeOutCubic;
const r = (lt, t0, d, e = EO) => e(clamp((lt - t0) / d, 0, 1));
const ThemeCtx = React.createContext({ accent: "#C9F158", badges: true });
const SpecCtx = React.createContext(null);
const TEMPLATE_LIST = [
  ["01", "DERMA"],
  ["02", "DENTAL"],
  ["03", "ONCO"],
  ["04", "ORTHO"],
  ["05", "PAEDS"],
  ["06", "MULTI-SPECIALITY"]
];
const SPECS = {
  derma: {
    num: "01",
    slot: "DERMA \u2014 01",
    label: "Template \u2014 DERMA 01",
    activeIdx: 0,
    liveIdx: [],
    url: "arunaskin.in",
    brand: "Aruna Rao",
    brandTag: "DERMATOLOGY",
    eyebrow: "00 \u2014 Dermatology & Aesthetics \xB7 Bengaluru",
    h1a: "Skin, treated with",
    h1b: "quiet precision.",
    sub: "Evidence-led dermatology in Indiranagar \u2014 consultations, lasers and long-term skin health.",
    heroLabel: "CAMPAIGN PHOTOGRAPHY \u2014 3:4\nDROP CLINIC IMAGE HERE",
    next: "Thursday, 10:40 AM",
    slots: ["THU 10:40", "FRI 09:20", "SAT 11:00"],
    chips: ["UPI & card payments", "WhatsApp reminders", "\u0939\u093F\u0928\u094D\u0926\u0940 / English", "ABDM-ready records"],
    menuTitle: "A considered menu.",
    treatments: [
      ["01", "Acne & Acne Scars", "Peels, microneedling, fractional lasers", "from \u20B92,400"],
      ["02", "Pigmentation & Melasma", "Q-switch laser, depigmenting protocols", "from \u20B93,200"],
      ["03", "Laser Hair Reduction", "Diode, safe for Indian skin types", "from \u20B91,800"]
    ],
    docEyebrow: "02 \u2014 Your doctor",
    docName: "Dr. Aruna Rao",
    docCreds: "MD (Dermatology), DVL \xB7 14 years \xB7 IADVL member",
    docImgLabel: "PORTRAIT \u2014 DR. RAO",
    quote: "\u201CBooked in under a minute, walked in the same week.\u201D",
    quoteBy: "ANANYA S. \u2014 PATIENT SINCE 2024",
    footL: "ARUNASKIN.IN",
    footR: "BUILT WITH PRACTICE STUDIO \u2014 DERMA 01",
    revealTagline: "Editorial by default. Booking-first.",
    bad: {
      url: "http://www.drmehta-skinclinic.co.in/home.html",
      title: "Welcome To Dr. Mehta Skin & V.D. Clinic, Bengaluru",
      navTip: "Skin Care Tips",
      marquee: "** Now open on Sundays ** Call 080-2345-6789 for Appointment ** No online booking ** Timings 10am to 1pm & 5pm to 8pm **",
      about: "Dr. Mehta Skin & V.D. Clinic is serving patients since 1998. We provide treatment for all types of skin diseases, hair fall, dandruff etc. at very reasonable rates. Clinic is situated near City Market Bus Stop (opp. SBI Bank).",
      fees: "*** Consultation Fees Rs. 300 Only ***",
      img: "dr_photo_final2.jpg",
      updates: ["\xBB Rate List Updated (2011)", "\xBB New Laser Machine Arrived", "\xBB Clinic Closed on 15th August"],
      copyright: "\xA9 2009 Dr. Mehta Clinic"
    }
  },
  dental: {
    num: "02",
    slot: "DENTAL \u2014 01",
    label: "Template \u2014 DENTAL 01",
    activeIdx: 1,
    liveIdx: [0],
    url: "shahdental.in",
    brand: "Meera Shah",
    brandTag: "DENTAL STUDIO",
    eyebrow: "00 \u2014 Dentistry & Smile Design \xB7 Mumbai",
    h1a: "A calmer kind of",
    h1b: "dentistry.",
    sub: "Boutique dental care in Bandra \u2014 from checkups to smile design, at your pace.",
    heroLabel: "CAMPAIGN PHOTOGRAPHY \u2014 3:4\nDROP CLINIC IMAGE HERE",
    next: "Thursday, 6:20 PM",
    slots: ["THU 18:20", "FRI 09:40", "SAT 12:00"],
    chips: ["UPI & EMI plans", "WhatsApp reminders", "\u0939\u093F\u0928\u094D\u0926\u0940 / English", "ABDM-ready records"],
    menuTitle: "Every treatment, explained.",
    treatments: [
      ["01", "Smile Design & Veneers", "Digital preview before you commit", "from \u20B914,000"],
      ["02", "Implants & Restorations", "German implants, 10-year warranty", "EMI available"],
      ["03", "Single-visit Root Canal", "Painless, microscope-assisted", "from \u20B96,500"]
    ],
    docEyebrow: "02 \u2014 Your doctor",
    docName: "Dr. Meera Shah",
    docCreds: "MDS (Prosthodontics) \xB7 12 years \xB7 IDA member",
    docImgLabel: "PORTRAIT \u2014 DR. SHAH",
    quote: "\u201CI postponed the dentist for six years. This place ended that.\u201D",
    quoteBy: "RAHUL D. \u2014 PATIENT SINCE 2025",
    footL: "SHAHDENTAL.IN",
    footR: "BUILT WITH PRACTICE STUDIO \u2014 DENTAL 01",
    revealTagline: "Calm by design. Booking-first.",
    bad: {
      url: "http://www.drjoshidentalclinic.co.in/index.html",
      title: "Welcome To Dr. Joshi Dental Clinic & Implant Centre, Mumbai",
      navTip: "Dental Tips",
      marquee: "** All Types of Dental Treatment ** Call 022-2456-7890 for Appointment ** No online booking ** Timings 10am to 1pm & 5pm to 9pm **",
      about: "Dr. Joshi Dental Clinic is serving patients since 1996. We provide all types of dental treatment like braces, root canal, teeth cleaning, dentures etc. at very reasonable rates. Clinic is situated near Station Road (above Vijaya Bank).",
      fees: "*** Consultation Fees Rs. 200 Only ***",
      img: "clinic_photo_2.jpg",
      updates: ["\xBB Price List Updated (2012)", "\xBB New Digital X-Ray Machine", "\xBB Clinic Closed on Diwali"],
      copyright: "\xA9 2009 Dr. Joshi Dental Clinic"
    }
  }
};
function ScreenLabel() {
  const { time } = useTimeline();
  const { scene } = useScene();
  const ref = React.useRef(null);
  const sec = Math.floor(time);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = el.closest("[data-om-exportable-video-with-duration-secs]");
    if (root) root.setAttribute("data-screen-label", scene.name + " \xB7 t=" + sec + "s");
  }, [sec, scene.name]);
  return /* @__PURE__ */ React.createElement("div", { ref, style: { display: "none" } });
}
function SceneRoot({ bg = PS.cream, children }) {
  return /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: bg, overflow: "hidden" } }, /* @__PURE__ */ React.createElement(ScreenLabel, null), children);
}
function Cam({ cx, cy, s, children }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 0,
    top: 0,
    transform: `translate(${960 - cx * s}px, ${540 - cy * s}px) scale(${s})`,
    transformOrigin: "0 0",
    willChange: "transform"
  } }, children);
}
function Rise({ t, dy = 16, style, children }) {
  return /* @__PURE__ */ React.createElement("div", { style: { opacity: t, transform: `translateY(${(1 - t) * dy}px)`, ...style } }, children);
}
function Eyebrow({ children, style }) {
  return /* @__PURE__ */ React.createElement("div", { style: { fontFamily: MONO, fontSize: 15, letterSpacing: "0.18em", textTransform: "uppercase", color: PS.soft, ...style } }, children);
}
function Placeholder({ label, style }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "repeating-linear-gradient(135deg, #E7E0CD 0 12px, #DDD5BF 12px 24px)",
    color: "#8A8471",
    fontFamily: MONO,
    fontSize: 13,
    letterSpacing: "0.12em",
    textAlign: "center",
    ...style
  } }, label);
}
function BrowserFrame({ w = 1280, url, typed = 1, aged = false, children }) {
  const shown = url.slice(0, Math.ceil(url.length * clamp(typed, 0, 1)));
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 0,
    top: 0,
    width: w,
    borderRadius: aged ? 6 : 20,
    overflow: "hidden",
    border: `1px solid ${aged ? "#B9B9B9" : PS.line}`,
    boxShadow: "0 40px 90px rgba(32,36,30,0.16)",
    background: aged ? "#FFFFFF" : PS.paper
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    height: 56,
    display: "flex",
    alignItems: "center",
    padding: "0 22px",
    background: aged ? "#DCDCDC" : "#EFE9DA",
    borderBottom: `1px solid ${aged ? "#B9B9B9" : PS.line}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, width: 74 } }, [0, 1, 2].map((i) => /* @__PURE__ */ React.createElement("span", { key: i, style: { width: 12, height: 12, borderRadius: 6, background: aged ? "#B5B5B5" : "#DCD2B8", border: `1px solid ${aged ? "#9E9E9E" : "#CBBF9F"}` } }))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("div", { style: {
    minWidth: 380,
    height: 32,
    padding: "0 20px",
    borderRadius: aged ? 4 : 16,
    background: aged ? "#FFFFFF" : "#FBF9F1",
    border: `1px solid ${aged ? "#ADADAD" : PS.line}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: aged ? "Arial, sans-serif" : MONO,
    fontSize: 15,
    color: aged ? "#333" : PS.soft,
    letterSpacing: "0.02em"
  } }, shown, typed < 1 && /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: 8, height: 17, background: PS.ink, marginLeft: 2 } }))), /* @__PURE__ */ React.createElement("div", { style: { width: 74 } })), children);
}
const B1 = { url: 1, nav: 1, eyebrow: 1, h1a: 1, h1b: 1, sub: 1, cta: 1, hero: 1, booking: 1, chips: [1, 1, 1, 1], secHead: 1, rows: [1, 1, 1], doctor: 1, quote: 1, foot: 1 };
function FeatChip({ t, accent, children }) {
  return /* @__PURE__ */ React.createElement(Rise, { t, dy: 10, style: { display: "inline-flex" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 18px",
    border: `1px solid ${PS.line}`,
    borderRadius: 999,
    background: PS.card,
    fontFamily: SANSD,
    fontSize: 17,
    color: PS.ink,
    whiteSpace: "nowrap"
  } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: 4, background: accent, boxShadow: `0 0 0 3px ${accent}40` } }), children));
}
function TemplatePage({ spec, b, accent, badges = true }) {
  const v = { ...B1, ...b || {} };
  return /* @__PURE__ */ React.createElement("div", { style: { width: 1280, height: 1990, background: PS.paper, padding: "44px 72px 0", boxSizing: "border-box", position: "relative" } }, /* @__PURE__ */ React.createElement(Rise, { t: v.nav, dy: 12 }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 14 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: SERIF, fontSize: 30, fontWeight: 500, color: PS.ink } }, spec.brand), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: MONO, fontSize: 13, letterSpacing: "0.16em", color: PS.soft } }, spec.brandTag)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 34, fontFamily: SANS, fontSize: 17, color: PS.ink } }, /* @__PURE__ */ React.createElement("span", null, "Treatments"), /* @__PURE__ */ React.createElement("span", null, "Doctor"), /* @__PURE__ */ React.createElement("span", null, "Journal"), /* @__PURE__ */ React.createElement("span", null, "Contact"), /* @__PURE__ */ React.createElement("span", { style: { background: accent, color: PS.green, fontWeight: 600, padding: "11px 24px", borderRadius: 999 } }, "Book")))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 430px", gap: 64, marginTop: 56, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Rise, { t: v.eyebrow, dy: 12 }, /* @__PURE__ */ React.createElement(Eyebrow, null, spec.eyebrow)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, fontFamily: SERIF, fontSize: 76, lineHeight: 1.04, letterSpacing: "-0.01em", color: PS.ink, fontWeight: 500 } }, /* @__PURE__ */ React.createElement(Rise, { t: v.h1a, dy: 22 }, /* @__PURE__ */ React.createElement("div", null, spec.h1a)), /* @__PURE__ */ React.createElement(Rise, { t: v.h1b, dy: 22 }, /* @__PURE__ */ React.createElement("div", { style: { fontStyle: "italic", fontWeight: 400 } }, spec.h1b))), /* @__PURE__ */ React.createElement(Rise, { t: v.sub, dy: 16, style: { marginTop: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: SANS, fontSize: 21, lineHeight: 1.5, color: PS.soft, maxWidth: 540 } }, spec.sub)), /* @__PURE__ */ React.createElement(Rise, { t: v.cta, dy: 16, style: { marginTop: 36 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 28 } }, /* @__PURE__ */ React.createElement("span", { style: { background: accent, color: PS.green, fontFamily: SANS, fontWeight: 600, fontSize: 19, padding: "17px 32px", borderRadius: 999 } }, "Book a consultation"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: SANS, fontSize: 18, color: PS.ink, borderBottom: `1px solid ${PS.ink}`, paddingBottom: 3 } }, "View treatments \u2192")))), /* @__PURE__ */ React.createElement("div", { style: {
    width: 430,
    height: 540,
    borderRadius: "215px 215px 18px 18px",
    overflow: "hidden",
    clipPath: `inset(${(1 - clamp(v.hero, 0, 1)) * 100}% 0 0 0 round 215px 215px 18px 18px)`
  } }, /* @__PURE__ */ React.createElement(Placeholder, { label: spec.heroLabel, style: { whiteSpace: "pre-line" } }))), /* @__PURE__ */ React.createElement(Rise, { t: v.booking, dy: 18, style: { marginTop: 56 } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: PS.card,
    border: `1px solid ${PS.line}`,
    borderRadius: 20,
    padding: "26px 32px",
    display: "flex",
    alignItems: "center",
    gap: 28
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Eyebrow, { style: { fontSize: 13 } }, "Next available"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: SERIF, fontSize: 29, color: PS.ink, marginTop: 6 } }, spec.next)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, marginLeft: "auto" } }, spec.slots.map((s, i) => /* @__PURE__ */ React.createElement("span", { key: i, style: { fontFamily: MONO, fontSize: 15, letterSpacing: "0.06em", color: i === 0 ? PS.green : PS.soft, padding: "12px 18px", borderRadius: 999, border: `1px solid ${i === 0 ? PS.green : PS.line}`, background: i === 0 ? `${accent}55` : "transparent" } }, s))), /* @__PURE__ */ React.createElement("span", { style: { background: PS.green, color: PS.cream, fontFamily: SANS, fontWeight: 600, fontSize: 18, padding: "15px 28px", borderRadius: 999 } }, "Book this slot"))), badges && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, marginTop: 22 } }, spec.chips.map((c, i) => /* @__PURE__ */ React.createElement(FeatChip, { key: i, t: v.chips[i], accent }, c))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 72 } }, /* @__PURE__ */ React.createElement(Rise, { t: v.secHead, dy: 16 }, /* @__PURE__ */ React.createElement(Eyebrow, null, "01 \u2014 Treatments"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: SERIF, fontSize: 44, color: PS.ink, marginTop: 12, fontWeight: 500 } }, spec.menuTitle)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 28 } }, spec.treatments.map((row, i) => /* @__PURE__ */ React.createElement(Rise, { key: i, t: v.rows[i], dy: 14 }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "72px 1fr auto", alignItems: "center", gap: 20, padding: "22px 0", borderTop: `1px solid ${PS.line}` } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: MONO, fontSize: 15, color: PS.soft } }, row[0]), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: SERIF, fontSize: 29, color: PS.ink } }, row[1]), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: SANS, fontSize: 16, color: PS.soft, marginTop: 4 } }, row[2])), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: MONO, fontSize: 16, color: PS.ink } }, row[3])))))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "320px 1fr", gap: 56, marginTop: 78, alignItems: "start" } }, /* @__PURE__ */ React.createElement(Rise, { t: v.doctor, dy: 18 }, /* @__PURE__ */ React.createElement("div", { style: { width: 320, height: 384, borderRadius: 18, overflow: "hidden" } }, /* @__PURE__ */ React.createElement(Placeholder, { label: spec.docImgLabel }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Rise, { t: v.doctor, dy: 16 }, /* @__PURE__ */ React.createElement(Eyebrow, null, spec.docEyebrow), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: SERIF, fontSize: 42, color: PS.ink, marginTop: 12, fontWeight: 500 } }, spec.docName), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: SANS, fontSize: 18, color: PS.soft, marginTop: 10 } }, spec.docCreds)), /* @__PURE__ */ React.createElement(Rise, { t: v.quote, dy: 16, style: { marginTop: 34 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: SERIF, fontStyle: "italic", fontSize: 31, lineHeight: 1.35, color: PS.ink, maxWidth: 640 } }, spec.quote), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: MONO, fontSize: 14, letterSpacing: "0.14em", color: PS.soft, marginTop: 14 } }, spec.quoteBy)))), /* @__PURE__ */ React.createElement(Rise, { t: v.foot, dy: 12, style: { marginTop: 64 } }, /* @__PURE__ */ React.createElement("div", { style: { borderTop: `1px solid ${PS.line}`, padding: "26px 0", display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 14, letterSpacing: "0.1em", color: PS.soft } }, /* @__PURE__ */ React.createElement("span", null, spec.footL), /* @__PURE__ */ React.createElement("span", null, spec.footR))));
}
function BadSite({ lt, bad }) {
  const blink = Math.floor(lt * 2.2) % 2 === 0 ? 1 : 0.15;
  const marqueeX = 1180 - lt * 130 % 2130;
  const visitors = String(42871 + Math.floor(lt * 3)).padStart(7, "0");
  const T = "Times New Roman, Times, serif";
  return /* @__PURE__ */ React.createElement("div", { style: { width: 1180, height: 700, background: "#FFFFFF", color: "#1A1A1A", fontFamily: T, position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "linear-gradient(180deg,#2A64B2,#4E8AD6)", padding: "18px 20px", textAlign: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#FFF", fontSize: 34, fontWeight: 700, fontStyle: "italic" } }, bad.title), /* @__PURE__ */ React.createElement("span", { style: { color: "#FF2B2B", fontSize: 22, fontWeight: 700, marginLeft: 14, opacity: blink } }, "NEW!!")), /* @__PURE__ */ React.createElement("div", { style: { background: "#E9E9E9", borderTop: "2px solid #FFF", borderBottom: "2px solid #9A9A9A", padding: "10px 0", textAlign: "center", fontSize: 20 } }, ["Home", "About Doctor", "Treatments", bad.navTip, "Contact Us"].map((l, i) => /* @__PURE__ */ React.createElement("span", { key: i }, i > 0 && /* @__PURE__ */ React.createElement("span", { style: { color: "#777", margin: "0 12px" } }, "|"), /* @__PURE__ */ React.createElement("span", { style: { color: "#0000EE", textDecoration: "underline" } }, l)))), /* @__PURE__ */ React.createElement("div", { style: { borderBottom: "1px solid #DDD", overflow: "hidden", height: 38, position: "relative", background: "#FFFDE7" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", whiteSpace: "nowrap", transform: `translateX(${marqueeX}px)`, color: "#D40000", fontWeight: 700, fontSize: 20, fontFamily: "Arial, sans-serif", lineHeight: "38px" } }, bad.marquee)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 28, padding: "26px 34px" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { color: "#7B1010", fontSize: 30, fontWeight: 700, textDecoration: "underline" } }, "About Our Clinic"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 19, lineHeight: 1.5, textAlign: "justify", marginTop: 14 } }, bad.about), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 19, marginTop: 10 } }, "For appointment please call between 10am to 8pm. ", /* @__PURE__ */ React.createElement("span", { style: { color: "#0000EE", textDecoration: "underline", fontWeight: 700 } }, "Click Here!!"), " for directions map (opens in new window)."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, background: "#FFFF9C", display: "inline-block", padding: "6px 10px", fontSize: 18, fontWeight: 700 } }, bad.fees), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, fontSize: 18 } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 700, textDecoration: "underline", color: "#7B1010" } }, "Latest Updates :"), bad.updates.map((u, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { color: "#0000EE", textDecoration: "underline", marginTop: i === 0 ? 6 : 4 } }, u)))), /* @__PURE__ */ React.createElement("div", { style: { width: 270 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 270, height: 200, border: "1px solid #B5B5B5", background: "#F4F4F4", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 26, height: 20, border: "1px solid #999", background: "#FFF", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 3, top: 3, width: 8, height: 8, borderRadius: 4, border: "1px solid #C33" } })), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "Arial, sans-serif", fontSize: 13, color: "#888" } }, bad.img)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, background: "#000", color: "#3BFF3B", fontFamily: "monospace", fontSize: 18, padding: "8px 12px", textAlign: "center", letterSpacing: "0.2em" } }, "VISITORS ", visitors))), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 0, left: 0, right: 0, textAlign: "center", padding: "14px 0", color: "#8A8A8A", fontSize: 16, borderTop: "1px solid #DDD" } }, "Best viewed in Internet Explorer 6.0 at 800 x 600 resolution \xB7 ", bad.copyright, " \xB7 Site by WebWorld Solutions"));
}
function Problem() {
  const { localTime: lt } = useScene();
  const spec = React.useContext(SpecCtx);
  const s = interpolate([0, 6], [1.15, 1.24], Easing.linear)(lt);
  const cap1 = r(lt, 2.3, 0.7), cap2 = r(lt, 4.2, 0.7);
  return /* @__PURE__ */ React.createElement(SceneRoot, { bg: PS.cream }, /* @__PURE__ */ React.createElement(Cam, { cx: 590, cy: 378, s }, /* @__PURE__ */ React.createElement(BrowserFrame, { w: 1180, url: spec.bad.url, aged: true }, /* @__PURE__ */ React.createElement(BadSite, { lt, bad: spec.bad }))), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 110, bottom: 96, display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement(Rise, { t: cap1, dy: 18 }, /* @__PURE__ */ React.createElement("div", { style: { background: PS.ink, color: PS.cream, fontFamily: SERIF, fontStyle: "italic", fontSize: 31, padding: "16px 28px", borderRadius: 4 } }, "Most practices still look like this.")), /* @__PURE__ */ React.createElement(Rise, { t: cap2, dy: 18 }, /* @__PURE__ */ React.createElement("div", { style: { background: PS.ink, color: PS.cream, fontFamily: SERIF, fontStyle: "italic", fontSize: 31, padding: "16px 28px", borderRadius: 4 } }, "And patients notice."))));
}
function MaskWord({ t, style, children }) {
  return /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", transform: `translateY(${(1 - t) * 112}%)`, ...style } }, children));
}
function Turn() {
  const { localTime: lt } = useScene();
  const th = React.useContext(ThemeCtx);
  const w = [r(lt, 0.35, 0.7), r(lt, 0.55, 0.7), r(lt, 0.75, 0.7), r(lt, 1.05, 0.7)];
  const u = r(lt, 1.75, 0.7, EIO);
  const drift = 1 + 0.014 * r(lt, 2.2, 1.8, Easing.linear);
  return /* @__PURE__ */ React.createElement(SceneRoot, { bg: PS.cream }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: `scale(${drift})` } }, /* @__PURE__ */ React.createElement(Rise, { t: r(lt, 0.15, 0.6), dy: 12 }, /* @__PURE__ */ React.createElement(Eyebrow, { style: { fontSize: 17 } }, "Practice Studio \u2014 Specialty Templates")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 34, fontFamily: SERIF, fontSize: 108, fontWeight: 500, letterSpacing: "-0.015em", color: PS.ink, lineHeight: 1.06, textAlign: "center" } }, /* @__PURE__ */ React.createElement(MaskWord, { t: w[0] }, "Your"), "\xA0", /* @__PURE__ */ React.createElement(MaskWord, { t: w[1] }, "practice"), "\xA0", /* @__PURE__ */ React.createElement(MaskWord, { t: w[2] }, "deserves"), "\xA0", /* @__PURE__ */ React.createElement(MaskWord, { t: w[3], style: { fontStyle: "italic", fontWeight: 400, position: "relative" } }, /* @__PURE__ */ React.createElement("span", { style: { position: "relative", zIndex: 1 } }, "better."), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", left: "-2%", bottom: "8%", height: "24%", width: `${u * 104}%`, background: th.accent, zIndex: 0 } })))));
}
function Assembly() {
  const { localTime: lt } = useScene();
  const th = React.useContext(ThemeCtx);
  const spec = React.useContext(SpecCtx);
  const b = {
    url: r(lt, 0.15, 0.8, Easing.linear),
    nav: r(lt, 1, 0.6),
    eyebrow: r(lt, 1.7, 0.5),
    h1a: r(lt, 2, 0.7),
    h1b: r(lt, 2.35, 0.7),
    sub: r(lt, 2.75, 0.6),
    cta: r(lt, 3.1, 0.6),
    hero: r(lt, 3.5, 1, EIO),
    booking: r(lt, 5.05, 0.7),
    chips: [r(lt, 5.9, 0.45), r(lt, 6.25, 0.45), r(lt, 6.6, 0.45), r(lt, 6.95, 0.45)],
    secHead: r(lt, 7.9, 0.6),
    rows: [r(lt, 8.2, 0.5), r(lt, 8.45, 0.5), r(lt, 8.7, 0.5)],
    doctor: r(lt, 9.15, 0.6),
    quote: r(lt, 9.55, 0.6),
    foot: r(lt, 10, 0.5)
  };
  const T = [0, 1.2, 2, 4.6, 5.6, 7.5, 8.15, 8.9, 9.35, 10.25, 11.55, 12];
  const E = [EIO, EIO, EIO, EIO, EIO, EIO, EIO, EIO, EIO, EIO, Easing.linear];
  const cx = interpolate(T, [640, 640, 470, 470, 610, 610, 630, 630, 630, 630, 640, 640], E)(lt);
  const cy = interpolate(T, [560, 560, 470, 470, 845, 845, 1170, 1170, 1600, 1600, 1023, 1023], E)(lt);
  const s = interpolate(T, [0.85, 0.85, 1.02, 1.02, 1.34, 1.34, 1.12, 1.12, 1.04, 1.04, 0.545, 0.52], E)(lt);
  return /* @__PURE__ */ React.createElement(SceneRoot, { bg: PS.cream }, /* @__PURE__ */ React.createElement(Cam, { cx, cy, s }, /* @__PURE__ */ React.createElement(BrowserFrame, { url: spec.url, typed: b.url }, /* @__PURE__ */ React.createElement(TemplatePage, { spec, b, accent: th.accent, badges: th.badges }))), /* @__PURE__ */ React.createElement(Rise, { t: Math.min(r(lt, 0.4, 0.6), 1 - r(lt, 4.2, 0.5, EIO)), dy: 10, style: { position: "absolute", left: 64, top: 52 } }, /* @__PURE__ */ React.createElement(Eyebrow, { style: { fontSize: 16 } }, spec.label)));
}
function Reveal() {
  const { localTime: lt } = useScene();
  const th = React.useContext(ThemeCtx);
  const spec = React.useContext(SpecCtx);
  const sc = interpolate([0, 4], [0.445, 0.425], Easing.linear)(lt);
  const ty = interpolate([0, 4], [96, 66], Easing.linear)(lt);
  return /* @__PURE__ */ React.createElement(SceneRoot, { bg: PS.cream }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 96, top: ty, transform: `scale(${sc})`, transformOrigin: "0 0" } }, /* @__PURE__ */ React.createElement(BrowserFrame, { url: spec.url }, /* @__PURE__ */ React.createElement(TemplatePage, { spec, accent: th.accent, badges: th.badges }))), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 780, top: 190, width: 1020 } }, /* @__PURE__ */ React.createElement(Rise, { t: r(lt, 0.25, 0.6), dy: 14 }, /* @__PURE__ */ React.createElement(Eyebrow, { style: { fontSize: 17 } }, "Template ", spec.num, " / 06")), /* @__PURE__ */ React.createElement(Rise, { t: r(lt, 0.45, 0.7), dy: 20 }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: SERIF, fontSize: 92, fontWeight: 500, letterSpacing: "-0.01em", color: PS.ink, marginTop: 22 } }, spec.slot)), /* @__PURE__ */ React.createElement(Rise, { t: r(lt, 0.7, 0.7), dy: 16 }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: SERIF, fontStyle: "italic", fontSize: 32, color: PS.soft, marginTop: 10 } }, spec.revealTagline)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 46, maxWidth: 820 } }, TEMPLATE_LIST.map((row, i) => {
    const active = i === spec.activeIdx;
    const live = spec.liveIdx.indexOf(i) !== -1;
    return /* @__PURE__ */ React.createElement(Rise, { key: i, t: r(lt, 1 + i * 0.14, 0.5), dy: 12 }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "64px 1fr auto", alignItems: "center", padding: "17px 0", borderTop: `1px solid ${PS.line}` } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: MONO, fontSize: 15, color: PS.soft } }, row[0]), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: SANS, fontSize: 22, letterSpacing: "0.08em", fontWeight: active ? 600 : 400, color: active ? PS.ink : PS.soft } }, row[1]), active ? /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: 10, fontFamily: MONO, fontSize: 14, letterSpacing: "0.14em", color: PS.green } }, /* @__PURE__ */ React.createElement("span", { style: { width: 9, height: 9, borderRadius: 5, background: th.accent, boxShadow: `0 0 0 3px ${th.accent}40` } }), "NEW \u2014 LIVE NOW") : live ? /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: 10, fontFamily: MONO, fontSize: 14, letterSpacing: "0.14em", color: PS.soft } }, /* @__PURE__ */ React.createElement("span", { style: { width: 9, height: 9, borderRadius: 5, background: PS.line } }), "LIVE") : /* @__PURE__ */ React.createElement("span", { style: { width: 9, height: 9, borderRadius: 5, border: `1px solid ${PS.line}` } })));
  }))));
}
function Close() {
  const { localTime: lt } = useScene();
  const th = React.useContext(ThemeCtx);
  const drift = 1 + 0.016 * r(lt, 1.6, 2.4, Easing.linear);
  return /* @__PURE__ */ React.createElement(SceneRoot, { bg: PS.cream }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: `scale(${drift})` } }, /* @__PURE__ */ React.createElement(Rise, { t: r(lt, 0.25, 0.6), dy: 14 }, /* @__PURE__ */ React.createElement("div", { style: { width: 18, height: 18, borderRadius: 10, background: th.accent, boxShadow: `0 0 0 6px ${th.accent}40` } })), /* @__PURE__ */ React.createElement(Rise, { t: r(lt, 0.45, 0.8), dy: 22 }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: SERIF, fontSize: 100, fontWeight: 500, letterSpacing: "-0.015em", color: PS.ink, marginTop: 30 } }, "Practice Studio")), /* @__PURE__ */ React.createElement(Rise, { t: r(lt, 0.85, 0.7), dy: 16 }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: SERIF, fontSize: 34, color: PS.ink, marginTop: 18 } }, "Your practice, ", /* @__PURE__ */ React.createElement("span", { style: { fontStyle: "italic" } }, "beautifully"), " online.")), /* @__PURE__ */ React.createElement(Rise, { t: r(lt, 1.15, 0.7), dy: 14 }, /* @__PURE__ */ React.createElement("div", { style: { width: 76, height: 1, background: PS.line, margin: "34px auto 0" } }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: MONO, fontSize: 21, letterSpacing: "0.16em", color: PS.soft, marginTop: 32, textAlign: "center" } }, "PRACTICESTUDIO.IN"))));
}
function PracticeStudioPromo() {
  const [tw, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  const spec = SPECS[window.PS_TEMPLATE] || SPECS.derma;
  return /* @__PURE__ */ React.createElement(ThemeCtx.Provider, { value: { accent: tw.accent, badges: tw.indiaBadges } }, /* @__PURE__ */ React.createElement(SpecCtx.Provider, { value: spec }, /* @__PURE__ */ React.createElement(SceneStage, { width: 1920, height: 1080, scenes: window.OM_SCENES, playback: window.OM_PLAYBACK, bg: PS.cream }, { Problem, Turn, Assembly, Reveal, Close }), /* @__PURE__ */ React.createElement(TweaksPanel, null, /* @__PURE__ */ React.createElement(TweakSection, { label: "Template" }), /* @__PURE__ */ React.createElement(TweakColor, { label: "Accent", value: tw.accent, options: ["#C9F158", "#A9C47F", "#EBBE4D"], onChange: (v) => setTweak("accent", v) }), /* @__PURE__ */ React.createElement(TweakToggle, { label: "India features", value: tw.indiaBadges, onChange: (v) => setTweak("indiaBadges", v) }), /* @__PURE__ */ React.createElement(TweakSection, { label: "Editor" }), /* @__PURE__ */ React.createElement(TweakToggle, { label: "Motion editor", value: tw.motionEditor, onChange: (v) => setTweak("motionEditor", v) }))));
}
window.PracticeStudioPromo = PracticeStudioPromo;
window.PS_SHARED = { PS, SERIF, SANS, SANSD, MONO, EIO, EO, r, ThemeCtx, SpecCtx, SPECS, TEMPLATE_LIST, ScreenLabel, SceneRoot, Cam, Rise, Eyebrow, Placeholder, BrowserFrame, FeatChip, TemplatePage, MaskWord };
