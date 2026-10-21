export const L = '#45761a'
export const G = '#0b7a4b'
export const T = '#077363'
export const B = '#1f66b0'

// Public contact details, as published on the group site (onealphamed.com).
export const CONTACT_EMAIL = 'info@onealphamed.com'
export const PHONE = '+919811660635'
export const PHONE_DISPLAY = '+91 98116 60635'
export const ADDRESS = '2414, Ground Floor, Aravali Vihar, Sector 49, Faridabad, Haryana 121001, India'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/onealphamed/'
export const GROUP_URL = 'https://onealphamed.com'
export const LEGAL_NAME = 'OneAlphaMed Pvt Ltd'
export const OFFICES = 'Mumbai · Gurgaon · Jakarta · Dubai · Amsterdam'

// Demo requests are relayed to this inbox (FormSubmit activation is tied to it).
export const DEMO_FORM_TO = 'blessy.babychan@onealphamed.com'

export const PRODUCT_LINKS = [
  { id: 'merlin', label: 'Merlin AI' },
  { id: 'onconourish', label: 'OncoNourish' },
  { id: 'voice', label: 'Voice Agent' },
  { id: 'arogya', label: 'Arogya' },
  { id: 'skinscan', label: 'SkinScan' },
  { id: 'rwe', label: 'RWE Platform' },
  { id: 'pathview', label: 'PathView 3D' },
]

export const audiences = [
  {
    key: 'medical',
    color: L,
    title: 'Medical affairs',
    desc: "Answer doctors' questions instantly from your approved literature — every answer cited — and run real-world evidence studies from prescription photos.",
    products: ['merlin', 'rwe'],
  },
  {
    key: 'commercial',
    color: G,
    title: 'Marketing & sales',
    desc: 'Keep doctors engaged between rep visits with messaging your medical-legal team has approved, and give them a 3D tool to explain treatment in the consultation room.',
    products: ['voice', 'pathview'],
  },
  {
    key: 'patients',
    color: B,
    title: 'Patient programs',
    desc: 'Support patients between visits — nutrition during cancer treatment, medication reminders for elderly patients, and skin awareness that leads to a dermatologist.',
    products: ['onconourish', 'arogya', 'skinscan'],
  },
]

export const rules = [
  { n: '01', color: L, title: 'Only your approved evidence', desc: "Answers come only from literature your medical team has signed off — journals, label information and your own databases. If the answer isn't there, the product says so instead of guessing." },
  { n: '02', color: G, title: 'Your data never leaves your systems', desc: 'We deploy inside your own infrastructure, so no question, document or patient record is sent to a public AI model. HIPAA and EU GDPR aligned.' },
  { n: '03', color: T, title: 'A clinician signs off first', desc: "Nothing reaches a patient until a clinician approves it, and safety rules such as allergen exclusions can't be overridden." },
  { n: '04', color: B, title: 'Every answer can be traced', desc: 'Each answer shows its source and page, every call is recorded, and every message is approved by your medical-legal team before it goes out.' },
]

// status: 'Live' = available to clients now · 'Pilot' = running with early partners
export const products = [
  { id: 'merlin', kind: 'Medical information', status: 'Live', color: G, name: 'Merlin AI', audience: ['pharma', 'doctors'], tagline: "Answer doctors' questions instantly, using only your approved literature — every answer cited. Includes the MedLink (WhatsApp) and MedScan (prescription scanning) modules." },
  { id: 'onconourish', kind: 'Oncology · Supportive care', status: 'Live', color: T, name: 'OncoNourish', audience: ['doctors', 'patients'], tagline: 'Clinician-prescribed, AI-guided nutrition plans that keep patients nourished enough to finish treatment.', demoUrl: 'https://onconourish.onealphamed.com', demoLabel: 'Visit OncoNourish' },
  { id: 'voice', kind: 'Commercial · Field force', status: 'Pilot', color: G, name: 'AI Sales Voice Agent', audience: ['pharma'], tagline: "Calls doctors between rep visits, in their language, using only messaging your medical-legal team has approved." },
  { id: 'arogya', kind: 'Patients · Adherence', status: 'Pilot', color: L, name: 'Arogya', audience: ['patients'], tagline: 'Medication reminders for elderly patients, with alerts to family caregivers and doctor-ready adherence reports.' },
  { id: 'skinscan', kind: 'Consumer · Skin awareness', status: 'Live', color: B, name: 'SkinScan', audience: ['patients'], tagline: 'A simple skin score your customers can understand, from one guided face photo — with clear questions to take to a dermatologist.', demoUrl: 'https://skinscan-jade.vercel.app', demoLabel: 'Try SkinScan' },
  { id: 'rwe', kind: 'Medical affairs · RWE', status: 'Pilot', color: T, name: 'RWE Platform', audience: ['pharma', 'doctors'], tagline: 'Turn prescription photos into clean study data, and pay investigators on time.' },
  { id: 'pathview', kind: 'Consultation · 3D anatomy', status: 'Pilot', color: B, name: 'PathView 3D', audience: ['doctors', 'pharma'], tagline: 'Interactive 3D anatomy for the consultation room — a layered chest model and treatment routes compared side by side.', demoUrl: 'https://pathview-3d.vercel.app/#/consult?demo=1&condition=nsclc&compare=side&t=0.55&preset=bone', demoLabel: 'Try the demo' },
]

export const productById = Object.fromEntries(products.map((p) => [p.id, p]))

export const STATUS_LEGEND = 'Live — available to clients now · Pilot — running with early partners'

export const AUDIENCE_FILTERS = [
  { key: 'all', label: 'All products' },
  { key: 'pharma', label: 'For pharma teams' },
  { key: 'doctors', label: 'For doctors' },
  { key: 'patients', label: 'For patients' },
]

// One-line "who it's for" shown under each product heading.
export const productFor = {
  merlin: 'Medical information and medical affairs teams, and the doctors they support',
  onconourish: 'Oncology teams and their patients',
  voice: 'Sales and marketing teams with field forces',
  arogya: 'Elderly patients, their family caregivers and their doctors',
  skinscan: 'Consumers concerned about dark patches, and dermatology brands',
  rwe: 'Medical affairs teams running real-world evidence studies, and their investigators',
  pathview: 'Doctors explaining a diagnosis and treatment options to patients',
}

export const phases = [
  { label: 'Phase One', dot: '#86d13f', color: L, text: 'Building & optimising medical information query systems.', chip: 'Merlin AI' },
  { label: 'Phase Two', dot: '#0aa88f', color: T, text: 'Building HCP-focussed intelligent prescription digitisation with LLMs.', chip: 'MedScan (Merlin module)' },
  { label: 'Phase Three', dot: '#2d7fd4', color: B, text: 'Improving sales–doctor interactions & building efficient Gen AI patient programs.', chip: 'Voice Agent · OncoNourish · Arogya · RWE Platform · PathView 3D' },
]

export const powerOf4 = [
  { n: 'P4 / 01', color: L, title: 'Generative AI', desc: 'Drafts evidence-grounded medical content on demand.' },
  { n: 'P4 / 02', color: G, title: 'RAG', desc: 'Retrieval-augmented answers, cited from your approved evidence library.' },
  { n: 'P4 / 03', color: T, title: 'Label Info', desc: 'Responses bounded by approved label information.' },
  { n: 'P4 / 04', color: B, title: 'Air Gap', desc: 'Deploys inside your perimeter. HIPAA / EU GDPR.' },
]

export const merlinPoints = [
  'Grounded only in the documents your medical team has approved.',
  'Every claim cites its source document and page.',
  "If it isn't in the corpus, Merlin says so — it never guesses.",
]

export const compare = [
  { dim: 'Flow', standard: 'Scripted decision trees', medlink: 'Free conversation, context retained' },
  { dim: 'Grounding', standard: 'Generic answers', medlink: 'Approved medical evidence only' },
  { dim: 'Tone', standard: 'Robotic templates', medlink: 'Emotionally intelligent, patient-aware' },
  { dim: 'Escalation', standard: 'Dead ends', medlink: 'Hands off to the clinic when it matters' },
]

export const chat = [
  { from: 'patient', time: '09:41', text: "I've been feeling nauseous since yesterday's dose. Should I stop taking it?" },
  { from: 'bot', time: '09:41 · MedLink AI', text: "Please don't stop on your own. Mild nausea is common in the first week — take the dose with food and plenty of water. I've noted this for Dr Khadilkar; if it continues past 48 hours, the clinic will call you." },
  { from: 'patient', time: '09:42', text: 'Thank you, that helps.' },
]

export const flow = [
  { n: '01', step: 'Create & intake', desc: 'Clinician creates the patient and captures the intake profile.' },
  { n: '02', step: 'Generate', desc: 'The rules engine drafts a personalised nutrition plan.' },
  { n: '03', step: 'Review & approve', desc: 'Nothing reaches the patient until the clinician signs off.' },
  { n: '04', step: 'Follow & print', desc: 'Patient follows the plan — printable, trackable.' },
]

export const profile = ['Cancer type & stage', 'Treatment phase', 'Diet pattern', 'Allergies & intolerances', 'Anthropometrics', 'Symptom burden']

export const guardrails = [
  'Supportive-care framing enforced in every output',
  'Allergen exclusions are hard blocks, not suggestions',
  'Clinician approval gates every plan release',
  'No treat / cure / arrest language — ever',
]

export const voiceCards = [
  { n: 'VA / 01', color: L, title: 'Augments the field force', desc: 'Reinforcement and follow-up calls between visits — so reps spend in-person time on the highest-value interactions.' },
  { n: 'VA / 02', color: G, title: 'Covers vacant territories', desc: 'When an MR seat is open, the agent keeps those doctors engaged — no customer goes dark while the role is filled.' },
  { n: 'VA / 03', color: T, title: 'Consistent messaging', desc: 'Approved, medico-legally reviewed content — delivered identically across every doctor, specialty and language.' },
  { n: 'VA / 04', color: B, title: 'Dynamic knowledge system', desc: 'No fixed scripts — live retrieval over products, clinical data, formulary and FAQs. It genuinely converses and handles objections.' },
]

export const waveBars = ['#86d13f', '#86d13f', '#1ec27a', '#1ec27a', '#0aa88f', '#0aa88f', '#2d7fd4', '#1ec27a', '#86d13f']

export const pipeline = [
  { label: 'Speech-to-text', border: 'rgba(134,209,63,0.5)', color: L },
  { label: 'LLM + Retrieval', border: 'rgba(30,194,122,0.5)', color: G },
  { label: 'Text-to-speech', border: 'rgba(45,127,212,0.5)', color: B },
]

export const voiceCompliance = ['TRAI Consent', 'UCPMP', 'DPDP Act 2023', 'MLR Reviewed']

export const arogyaFeatures = [
  { n: 'AR / 01', color: L, title: 'AI prescription scan', desc: 'Camera capture of handwritten prescriptions — AI auto-fills medicine, dose and timing for the patient to confirm. Autocomplete from a 5,000+ Indian drug database.' },
  { n: 'AR / 02', color: G, title: 'Family care network', desc: "Caregivers monitor adherence from a shared view, mark doses on the patient's behalf, and get WhatsApp alerts when a critical dose is missed." },
  { n: 'AR / 03', color: T, title: 'AI insights & doctor reports', desc: 'Patterns detected from adherence data — best-performing times, missed-dose triggers, schedule suggestions — plus an auto-generated, doctor-ready adherence report.' },
  { n: 'AR / 04', color: B, title: 'Refills, interactions & offline', desc: 'Pharmacy refill ordering from the medicine list, severity-coded drug-interaction alerts, and full offline operation — reminders fire and sync on reconnect.' },
]

export const tiers = [
  { t: 'T+0 · Tier 1', dot: '#86d13f', color: L, title: 'Push notification', desc: 'Works on silent mode' },
  { t: 'T+10 · Tier 2', dot: '#1ec27a', color: G, title: 'Full-screen alarm', desc: 'Overrides silent mode' },
  { t: 'T+20 · Tier 3', dot: '#0aa88f', color: T, title: 'AI voice call', desc: "In the patient's language — confirms dose or logs miss" },
  { t: 'T+25 · Tier 4', dot: '#2d7fd4', color: B, title: 'WhatsApp family alert', desc: 'Caregiver can call or mark the dose remotely' },
]

export const skinFeatures = [
  { n: 'SS / 01', color: L, title: 'Guided face scan', desc: 'Fit your face in the oval in soft daylight — the photo is taken for you. No dermatoscope, no appointment, any modern phone.' },
  { n: 'SS / 02', color: G, title: 'Two scores, plain words', desc: 'A Skin Score plus a Melasma-pattern Score (MASI-style estimate, 0 to 48) — with markings on the photo showing the areas behind each score.' },
  { n: 'SS / 03', color: T, title: 'Private by design', desc: 'Analysis runs on the device; only scores and measurements reach the server. Stored photos are optional, encrypted, and auto-deleted after 90 days.' },
  { n: 'SS / 04', color: B, title: 'Built for the consult', desc: 'Not a diagnosis — a conversation starter. Every result ends with what to ask a dermatologist next.' },
]

export const rweSteps = [
  { n: 'RWE / 01', color: L, title: 'Capture at the clinic', desc: 'The investigator photographs the prescription on their phone. On-device checks for sharpness, glare and resolution reject unreadable images before upload; duplicates are caught by image hash.' },
  { n: 'RWE / 02', color: G, title: 'AI extraction into the CRF', desc: 'A vision model reads the prescription against the study’s case report form, returning a value, a confidence score and a bounding box per field. Low-confidence fields are flagged for the reviewer.' },
  { n: 'RWE / 03', color: T, title: 'Automatic edit checks', desc: 'Range, enum, required-field, systolic/diastolic and visit-window checks run on every upload before QC sees it. Derived values like GDMT pillars are computed, not typed.' },
  { n: 'RWE / 04', color: B, title: 'Two-pane QC and payments', desc: 'Reviewers approve, query or request a retake with the image beside the form. Approved completers flow into maker-checker payment batches with TDS applied and every action in the audit log.' },
]

export const rweWorkspaces = [
  { dot: '#86d13f', title: 'Doctor app', desc: 'Today’s tasks, capture, patient timeline and payments. Phone first, desktop sidebar at the clinic.' },
  { dot: '#1ec27a', title: 'QC console', desc: 'Review queue with a 24-hour SLA and a two-pane workspace. J / K move between records.' },
  { dot: '#0aa88f', title: 'Finance & Ops', desc: 'Investigator onboarding funnel, bank verification, maker-checker batches, study setup, audit log.' },
  { dot: '#2d7fd4', title: 'Sponsor portal', desc: 'Enrolment vs target, clinical outcomes, data quality and CSV export — investigators shown as pseudonymous codes.' },
]

export const rweChecks = [
  { level: 'warn', bg: '#8a5a12', text: 'BP systolic 262 is outside 60–260 mmHg.' },
  { level: 'info', bg: '#1f66b0', text: 'Low AI confidence on eGFR, NT-proBNP. Check against the image.' },
  { level: 'info', bg: '#1f66b0', text: 'No MRA prescribed. Intolerance reason recorded: Hyperkalaemia.' },
  { level: 'pass', bg: '#0b7a4b', text: 'Visit date 14 Jan is inside the window (4 Jan–24 Jan).' },
  { level: 'pass', bg: '#0b7a4b', text: 'Diastolic is below systolic.' },
]

export const rweStats = [
  { value: '3 / 4', label: 'GDMT pillars' },
  { value: 'NYHA II', label: 'from III at V1' },
  { value: '0.91', label: 'Mean AI confidence' },
]

export const rweCompliance = ['Full audit log', 'Maker-checker payments', 'Pseudonymous investigators', 'PII masking', 'E-consent']

export const edges = [
  { dot: '#86d13f', title: 'Pharma domain, not generic AI', desc: 'The group has run brand strategy, medical affairs and patient-support programs for pharmaceutical companies across India, Southeast Asia and global markets. Our products are shaped by those workflows and their regulators.' },
  { dot: '#0aa88f', title: 'Compliance as architecture', desc: 'Air-gapped deployment, approved-corpus retrieval, clinician approval gates and MLR review are built into every product — not added at procurement.' },
  { dot: '#2d7fd4', title: 'Products in use, not slideware', desc: 'Merlin, OncoNourish and SkinScan are live; the Voice Agent, Arogya, the RWE Platform and PathView 3D are in pilot. Each new product reuses the same evidence engine, so the next one ships faster.' },
]

export const services = [
  { n: 'ECO / 01', color: L, name: 'STRATEDIA' },
  { n: 'ECO / 02', color: G, name: 'EDUVENT' },
  { n: 'ECO / 03', color: T, name: 'CLINOPS' },
  { n: 'ECO / 04', color: B, name: 'MEDEXPO' },
  { n: 'ECO / 05', color: L, name: 'CONNECT' },
  { n: 'ECO / 06', color: G, name: 'INNOVATION LABS' },
]

export const interests = [
  'Merlin AI (incl. MedLink & MedScan)', 'OncoNourish', 'AI Sales Voice Agent',
  'Arogya', 'SkinScan', 'RWE Platform', 'PathView 3D', 'Security review', 'Multiple / not sure',
]

// product id → its option in the "Interested in" field, for "Book a demo of …" links
export const interestFor = {
  merlin: interests[0], onconourish: 'OncoNourish', voice: 'AI Sales Voice Agent', arogya: 'Arogya',
  skinscan: 'SkinScan', rwe: 'RWE Platform', pathview: 'PathView 3D',
}

// Client list as published on onealphamed.com (its client sentence order, then the extra logos shown there).
export const partners = [
  'sun-pharma',
  'jb-chemicals',
  'bayer',
  'hetero',
  'novo-nordisk',
  'mankind',
  'eris',
  'lupin',
  'pfizer',
  'max-healthcare',
  'aurobindo',
  'anthem-biosciences',
  'olympus',
  'resmed',
  'wockhardt',
  'pg-health',
  'meril',
  'metropolis',
  'gsk',
  'abbott',
  'zydus',
  'medtronic',
  'cipla',
  'dr-reddys',
  'aurogen',
  'dentsply-sirona',
  'biological-e',
]

export const partnerSizes = {
  'sun-pharma': [71, 96],
  'jb-chemicals': [96, 96],
  'bayer': [96, 96],
  'hetero': [116, 96],
  'novo-nordisk': [135, 96],
  'mankind': [159, 96],
  'eris': [266, 96],
  'lupin': [80, 96],
  'pfizer': [234, 96],
  'max-healthcare': [288, 96],
  'aurobindo': [228, 96],
  'anthem-biosciences': [300, 88],
  'olympus': [300, 59],
  'resmed': [132, 96],
  'wockhardt': [300, 66],
  'pg-health': [233, 96],
  'meril': [242, 96],
  'metropolis': [274, 96],
  'gsk': [300, 91],
  'abbott': [300, 46],
  'zydus': [173, 96],
  'medtronic': [300, 50],
  'cipla': [288, 96],
  'dr-reddys': [300, 65],
  'aurogen': [210, 96],
  'dentsply-sirona': [300, 84],
  'biological-e': [200, 96],
}

export const partnerNames = {
  'sun-pharma': "Sun Pharma",
  'jb-chemicals': "JB Chemicals",
  'bayer': "Bayer",
  'hetero': "Hetero",
  'novo-nordisk': "Novo Nordisk",
  'mankind': "Mankind",
  'eris': "ERIS",
  'lupin': "Lupin",
  'pfizer': "Pfizer",
  'max-healthcare': "MAX Healthcare",
  'aurobindo': "Aurobindo",
  'anthem-biosciences': "Anthem Biosciences",
  'olympus': "Olympus",
  'resmed': "ResMed",
  'wockhardt': "Wockhardt",
  'pg-health': "P&G Health",
  'meril': "Meril",
  'metropolis': "Metropolis",
  'gsk': "GSK",
  'abbott': "Abbott",
  'zydus': "Zydus",
  'medtronic': "Medtronic",
  'cipla': "Cipla",
  'dr-reddys': "Dr. Reddy's",
  'aurogen': "Aurogen",
  'dentsply-sirona': "Dentsply Sirona",
  'biological-e': "Biological E. Limited",
}

export const engagement = [
  { step: 'Pilot', color: L, desc: 'We configure the product on your evidence, your therapy area and your compliance rules, and run it with a small group of users so you can measure it before committing.' },
  { step: 'Deploy', color: T, desc: 'We roll out to your wider team inside your own infrastructure, with your medical-legal review built into the workflow and training for every user.' },
  { step: 'Scale', color: B, desc: 'Add therapy areas, languages, markets or products on the same foundation — your approved evidence and audit trail carry over.' },
]

export const faqs = [
  { q: 'How is pricing structured?', a: 'Pricing depends on the product, the number of users or patients, and how it is deployed. After a short scoping call we send a written proposal, usually starting with a pilot.' },
  { q: 'Where does our data live?', a: 'Our enterprise products deploy inside your own infrastructure, so questions, documents and patient records are not sent to a public AI model. Our public demos (SkinScan, PathView 3D) do not ask for or store patient records.' },
  { q: 'Who owns the content and the data?', a: 'The evidence library is the literature your medical team approves, and the data generated in your programme belongs to your organisation. The exact terms are set out in your agreement with us.' },
  { q: 'Which languages do you support?', a: 'Products work in English. The AI Sales Voice Agent and the Arogya reminder calls also speak Indian languages, including Hindi. Tell us which languages you need and we will confirm coverage for your programme.' },
  { q: 'Do you integrate with our CRM and WhatsApp?', a: 'Yes. The Voice Agent logs every call to your CRM / SFE system, MedLink runs on a clinic’s WhatsApp number, and Arogya sends caregiver alerts over WhatsApp. We confirm specific integrations during scoping.' },
  { q: 'How do medical-legal-regulatory (MLR) reviews fit in?', a: 'Every patient- or doctor-facing message is drawn from content your medical-legal team has approved, and changes go back through your review before they ship.' },
]


export const pathviewFeatures = [
  { n: 'PV / 01', color: L, title: 'Seven anatomical layers', desc: 'Skin, muscle, skeleton, vessels, airways, lung tissue and a cellular view — each with its own opacity, plus tap-to-identify, isolate and a slicing plane on three axes.' },
  { n: 'PV / 02', color: G, title: 'Treatment routes on a timeline', desc: 'Route A, Route B and the natural course, played month by month with milestones and plain-language narration the doctor can read to the patient.' },
  { n: 'PV / 03', color: T, title: 'Side by side, before and after', desc: 'A | B comparison with synced cameras, or a before / after wipe — so the trade-off between, say, chemotherapy and lobectomy becomes concrete.' },
  { n: 'PV / 04', color: B, title: 'Handout & Head Office analytics', desc: 'A one-page PDF of the current view for the patient to take home, and a Head Office dashboard of adoption, session time, anatomical hotspots and route split.' },
]

export const pathviewReadouts = [
  { label: 'Tumour size', a: '1.0 cm', b: 'Removed' },
  { label: 'Lymph nodes', a: 'Shrinking', b: 'Cleared' },
  { label: 'Lung capacity', a: '100%', b: '87%' },
  { label: 'Spread', a: 'None seen', b: 'None seen' },
]

export const pathviewMilestones = ['Diagnosis', 'Cycle 3', 'Cycle 6', 'Response scan', '12 mo']

export const pathviewConditions = [
  { area: 'Oncology', name: 'Lung cancer (NSCLC)', routes: 'Chemotherapy · lobectomy · natural course' },
  { area: 'Pulmonology', name: 'COPD / emphysema', routes: 'Inhaled therapy + rehab · valve lung-volume reduction · natural course' },
]
