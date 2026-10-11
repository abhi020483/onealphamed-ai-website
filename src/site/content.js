export const L = '#568f1e'
export const G = '#0e8f58'
export const T = '#087f6c'
export const B = '#1f66b0'

export const DEMO_EMAIL = 'blessy.babychan@onealphamed.com'
export const OFFICES = 'Mumbai · Gurgaon · Jakarta · Dubai · Amsterdam'

export const PRODUCT_LINKS = [
  { id: 'merlin', label: 'Merlin AI' },
  { id: 'onconourish', label: 'OncoNourish' },
  { id: 'voice', label: 'Voice Agent' },
  { id: 'arogya', label: 'Arogya' },
  { id: 'skinscan', label: 'SkinScan' },
  { id: 'rwe', label: 'RWE Platform' },
]

export const pillars = [
  { n: 'CAP / 01', color: L, title: 'Medical intelligence', desc: 'RAG engines that answer HCP and patient queries from approved evidence only, with a citation on every claim — deployed inside your perimeter.', tags: ['Merlin AI', 'MedLink AI', 'MedScan AI'] },
  { n: 'CAP / 02', color: G, title: 'Real-world evidence', desc: 'Prescription photos become QC-reviewed case report forms with automatic edit checks, maker-checker payments and a sponsor portal that reads from one metrics layer.', tags: ['RWE Platform'] },
  { n: 'CAP / 03', color: T, title: 'Clinician-governed patient programs', desc: 'Rules-engine and adherence platforms where AI drafts and clinicians approve — supportive-care framing and hard safety blocks enforced in code.', tags: ['OncoNourish', 'Arogya', 'SkinScan'] },
  { n: 'CAP / 04', color: B, title: 'Compliant commercial AI', desc: 'Multilingual voice agents that extend the field force with MLR-reviewed messaging, consent handling and full call audit trails.', tags: ['AI Sales Voice Agent'] },
]

export const rules = [
  { n: '01', color: L, title: 'Approved evidence only', desc: 'Every model retrieves from a corpus your medical team has signed off — PubMed, peer-reviewed journals, label information, internal databases. If it is not in the corpus, the answer is "I don\'t know."' },
  { n: '02', color: G, title: 'Air-gapped by default', desc: 'Deployments run inside your perimeter. No query, document or patient record touches a public model. HIPAA and EU GDPR aligned.' },
  { n: '03', color: T, title: 'Clinician in the loop', desc: 'Nothing patient-facing is released without sign-off. Allergen exclusions and dose rules are hard blocks, not suggestions.' },
  { n: '04', color: B, title: 'Auditable end to end', desc: 'Every response cites its source and page; every call is recorded; every message passes medical-legal-regulatory review before it ships.' },
]

export const products = [
  { id: 'merlin', kind: 'Flagship · Medical information', status: 'Live', color: G, name: 'Merlin AI', tagline: 'One-stop, customisable medical intelligence. RAG, label-bounded, air-gapped — with MedLink (WhatsApp) and MedScan (prescription OCR).' },
  { id: 'onconourish', kind: 'Oncology · Supportive care', status: 'Live', color: T, name: 'OncoNourish', tagline: 'Clinician-prescribed, AI-guided nutrition plans that keep patients nourished enough to finish treatment.' },
  { id: 'voice', kind: 'Commercial · Field force', status: 'In deployment', color: G, name: 'AI Sales Voice Agent', tagline: 'An always-on, compliant, multilingual voice layer that reinforces approved messaging between MR visits.' },
  { id: 'arogya', kind: 'Patient · Adherence', status: 'In deployment', color: L, name: 'Arogya', tagline: 'Medication adherence for elderly patients and family caregivers, with four-tier missed-dose escalation.' },
  { id: 'skinscan', kind: 'Consumer · Awareness', status: 'Live', color: B, name: 'SkinScan', tagline: 'A guided face photo returns a Skin Score and a MASI-style Melasma-pattern Score, explained in plain words.' },
  { id: 'rwe', kind: 'Medical affairs · RWE', status: 'Phase 1', color: T, name: 'RWE Platform', tagline: 'Prescription capture, AI extraction into the CRF, QC review, investigator payments and sponsor analytics for real-world evidence studies.' },
]

export const phases = [
  { label: 'Phase One', dot: '#86d13f', color: L, text: 'Building & optimising medical information query systems.', chip: 'MERLIN' },
  { label: 'Phase Two', dot: '#0aa88f', color: T, text: 'Building HCP-focussed intelligent prescription digitisation with LLMs.', chip: 'MEDSCAN' },
  { label: 'Phase Three', dot: '#2d7fd4', color: B, text: 'Improving sales–doctor interactions & building efficient Gen AI patient programs.', chip: 'VOICE AGENT · ONCONOURISH · AROGYA · RWE' },
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
  { level: 'warn', bg: '#b7791f', text: 'BP systolic 262 is outside 60–260 mmHg.' },
  { level: 'info', bg: '#1f66b0', text: 'Low AI confidence on eGFR, NT-proBNP. Check against the image.' },
  { level: 'info', bg: '#1f66b0', text: 'No MRA prescribed. Intolerance reason recorded: Hyperkalaemia.' },
  { level: 'pass', bg: '#0e8f58', text: 'Visit date 14 Jan is inside the window (4 Jan–24 Jan).' },
  { level: 'pass', bg: '#0e8f58', text: 'Diastolic is below systolic.' },
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
  { dot: '#2d7fd4', title: 'Shipping, not piloting', desc: 'Merlin, OncoNourish and SkinScan are live; the Voice Agent, Arogya and the RWE Platform are in deployment. Each new product reuses the same evidence engine, so the next one ships faster.' },
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
  'Merlin AI', 'MedLink AI', 'MedScan AI', 'OncoNourish', 'AI Sales Voice Agent',
  'Arogya', 'SkinScan', 'RWE Platform', 'Multiple / not sure',
]
