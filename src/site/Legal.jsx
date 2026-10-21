import { ADDRESS, CONTACT_EMAIL, LEGAL_NAME, PHONE, PHONE_DISPLAY } from './content'
import { Link } from './router'

const UPDATED = '21 October 2026'

function LegalPage({ kicker, title, children }) {
  return (
    <section style={{ padding: '72px 24px 96px' }}>
      <article className="oa-wrap oa-prose">
        <span className="oa-kicker" style={{ color: 'var(--c-green)' }}>{kicker}</span>
        <h1 className="oa-h1">{title}</h1>
        <p className="oa-updated">Last updated: {UPDATED}</p>
        {children}
      </article>
    </section>
  )
}

const Email = () => <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>

export function Privacy() {
  return (
    <LegalPage kicker="Legal" title="Privacy policy">
      <p>
        This policy explains how {LEGAL_NAME} ("OneAlphaMed", "we", "us") handles personal data collected through
        this website, onealphamed.ai. It is written to meet India's Digital Personal Data Protection Act, 2023 and, for
        visitors in the European Union, the GDPR.
      </p>
      <p>
        Each of our products (for example Merlin AI, SkinScan, Arogya or PathView 3D) has its own privacy notice, shown
        inside the product. This policy covers the website only.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Demo and contact requests.</strong> When you submit the form on our Contact page we collect your name,
          work email, company, phone number (optional), the product you are interested in, your message (optional) and
          your consent.
        </li>
        <li>
          <strong>Emails and calls.</strong> If you email or call us, we receive the details you choose to share.
        </li>
        <li>
          <strong>Technical data.</strong> Our hosting provider receives standard technical information when you load a
          page, such as your IP address and browser type, and may keep it in server logs for security.
        </li>
      </ul>
      <p>We do not ask for health information on this website, and you should not send it to us through the form.</p>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to your request, arrange a demo and send you information you asked for.</li>
        <li>To keep a record of our correspondence with you and your organisation.</li>
        <li>To keep the website secure and working.</li>
      </ul>
      <p>We do not sell personal data, and we do not use it for advertising.</p>

      <h2>Our legal basis</h2>
      <p>
        We process form submissions on the basis of the consent you give when you submit the form. You can withdraw
        consent at any time by emailing <Email />; this does not affect anything we did before you withdrew it.
      </p>

      <h2>Who we share it with</h2>
      <ul>
        <li>
          <strong>Form delivery.</strong> Contact-form submissions are delivered to our inbox by FormSubmit
          (formsubmit.co), a third-party form service.
        </li>
        <li>
          <strong>Hosting.</strong> This website is hosted on GitHub Pages.
        </li>
        <li>
          <strong>The OneAlphaMed group.</strong> If your request relates to another OneAlphaMed group business, we may
          pass it to that team so they can respond.
        </li>
        <li>Authorities, where the law requires it.</li>
      </ul>
      <p>Some of these providers may process data outside India.</p>

      <h2>Cookies</h2>
      <p>
        This website does not use advertising or analytics cookies. Our Practice Studio page offers a language switcher;
        if you use it, the Google Translate service sets a cookie to remember your language.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep demo and contact requests for as long as we need them to respond and follow up, and delete them when
        they are no longer needed or when you ask us to.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us to access, correct or delete your personal data, withdraw your consent, or nominate someone to
        exercise these rights for you. To do so, or to raise a grievance, email <Email />. We will respond within the
        time the law requires. If you are not satisfied with our response, you can complain to the Data Protection
        Board of India or, in the EU, to your local data protection authority.
      </p>

      <h2>Children</h2>
      <p>This website is meant for healthcare and pharmaceutical professionals and is not directed at children.</p>

      <h2>Contact</h2>
      <p>
        {LEGAL_NAME}, {ADDRESS}. Email <Email /> or call <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.
      </p>

      <h2>Changes</h2>
      <p>We may update this policy. The date at the top shows when it last changed.</p>
    </LegalPage>
  )
}

export function Terms() {
  return (
    <LegalPage kicker="Legal" title="Terms of use">
      <p>
        These terms apply to your use of the website onealphamed.ai, operated by {LEGAL_NAME}. By using the website you
        agree to them. Use of our products is governed by separate agreements.
      </p>

      <h2>Information only</h2>
      <p>
        The website describes our products and services for healthcare and pharmaceutical professionals. It is not
        medical advice — see our <Link to="/disclaimer">medical disclaimer</Link>. Product descriptions, sample answers
        and screenshots are illustrative and may change; what a product does for you is set out in your agreement with us.
      </p>

      <h2>Public demos</h2>
      <p>
        Some products offer public demos. They are provided for evaluation, as they are, and may change or be withdrawn
        at any time. Do not enter real patient information into a public demo.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The website's content, design, product names and logos belong to {LEGAL_NAME} or its licensors. Third-party
        names and logos belong to their owners and appear for identification only. You may view and share pages for
        your own reference, but not copy or reuse them commercially without our written permission.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Don't misuse the website: no attempts to gain unauthorised access, disrupt it, scrape it at scale, or send
        unlawful or misleading content through our forms.
      </p>

      <h2>Links</h2>
      <p>We link to other websites for convenience. We are not responsible for their content or practices.</p>

      <h2>Liability</h2>
      <p>
        We work to keep the website accurate and available, but we provide it "as is" and, to the extent the law
        allows, we are not liable for losses arising from your use of it or reliance on its content.
      </p>

      <h2>Law</h2>
      <p>These terms are governed by the laws of India, and the courts of Haryana have jurisdiction.</p>

      <h2>Contact</h2>
      <p>Questions about these terms: <Email />.</p>
    </LegalPage>
  )
}

export function Disclaimer() {
  return (
    <LegalPage kicker="Legal" title="Medical disclaimer">
      <p>
        The information on onealphamed.ai is for general information about our products and services. It is not medical
        advice, and it is not a substitute for the judgement of a qualified healthcare professional.
      </p>
      <ul>
        <li>
          Sample answers, scores, treatment timelines and patient figures shown on this website are illustrative. They
          are not predictions for any real patient.
        </li>
        <li>
          Our products support healthcare professionals and patients; they do not diagnose, and they do not replace the
          clinician. Clinical decisions remain with the treating doctor.
        </li>
        <li>
          <strong>SkinScan</strong> gives an estimate for pigmentation awareness, not a diagnosis, and does not check
          moles or spots for skin cancer. See a dermatologist about any spot that is new, changing, bleeding or itchy.
        </li>
        <li>
          <strong>PathView 3D</strong> is an educational model. It is not a patient-specific prediction.
        </li>
        <li>
          <strong>OncoNourish</strong> provides supportive nutrition guidance approved by the patient's clinician. It
          does not treat, cure or arrest cancer.
        </li>
      </ul>
      <p>
        Never ignore professional medical advice or delay seeking it because of something you read here. In a medical
        emergency, contact your local emergency number immediately.
      </p>
      <p>
        To report an adverse event involving a medicine, contact the medicine's manufacturer or your national
        pharmacovigilance programme. In India, that is the Pharmacovigilance Programme of India (PvPI).
      </p>
    </LegalPage>
  )
}

export function NotFound() {
  return (
    <section style={{ padding: '120px 24px', textAlign: 'center' }}>
      <div className="oa-wrap" style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
        <span className="oa-kicker" style={{ color: 'var(--c-green)' }}>Page not found</span>
        <h1 className="oa-h1">We couldn't find that page.</h1>
        <p className="oa-lead">It may have moved when we updated the site.</p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" className="oa-btn oa-btn--sm">Go to the home page</Link>
          <Link to="/products" className="oa-btn-ghost oa-btn-ghost--sm">See the products</Link>
        </div>
      </div>
    </section>
  )
}
