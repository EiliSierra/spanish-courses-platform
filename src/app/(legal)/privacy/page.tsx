import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy — Alexandria's Language Institute",
  description: 'Privacy Policy for Alexandria\'s Language Institute online Spanish courses.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="text-sm text-gray-400 dark:text-gray-500">Last Updated: May 1, 2026</p>

      <p>
        Alexandria&apos;s Language Institute (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operated by
        Alexandria&apos;s Design LLC, is committed to protecting your privacy. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you use our Platform at{' '}
        <strong>www.alexandriaslanguages.com</strong>.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide</h3>
      <ul>
        <li>
          <strong>Account Information:</strong> When you create an account, we collect your name and email address
          through our authentication provider, Clerk.
        </li>
        <li>
          <strong>Payment Information:</strong> When you purchase a subscription, payment details (credit card number,
          billing address) are collected and processed directly by Stripe. We never store your full payment card details
          on our servers.
        </li>
        <li>
          <strong>Communications:</strong> If you contact us via email, we may retain the content of your messages and
          your email address.
        </li>
      </ul>

      <h3>1.2 Information Collected Automatically</h3>
      <ul>
        <li>
          <strong>Lesson Progress:</strong> Your course progress (completed lessons, quiz scores, activity states) is
          stored locally in your browser&apos;s <code>localStorage</code>. This data stays on your device and is not
          transmitted to our servers.
        </li>
        <li>
          <strong>Usage Data:</strong> We may collect basic analytics data such as pages visited, time spent, and
          referral sources through our hosting provider (Vercel).
        </li>
      </ul>

      <h2>2. Third-Party Services</h2>
      <p>
        We use the following third-party services, each with their own privacy policies. We encourage you to review
        them:
      </p>

      <h3>2.1 Clerk (Authentication)</h3>
      <p>
        Clerk handles user sign-up, sign-in, and session management. They process your name, email, and authentication
        credentials.{' '}
        <a href="https://clerk.com/privacy" target="_blank" rel="noopener noreferrer">
          Clerk Privacy Policy
        </a>
      </p>

      <h3>2.2 Stripe (Payments)</h3>
      <p>
        Stripe processes all payment transactions. Your payment information is handled directly by Stripe and is subject
        to Stripe&apos;s security standards (PCI DSS Level 1). We only receive confirmation of payment status and a
        truncated card identifier.{' '}
        <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
          Stripe Privacy Policy
        </a>
      </p>

      <h3>2.3 Vercel (Hosting)</h3>
      <p>
        Our Platform is hosted on Vercel, which may collect standard server logs including IP addresses and request
        metadata.{' '}
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          Vercel Privacy Policy
        </a>
      </p>

      <h3>2.4 OpenAI (AI Tutor Feature)</h3>
      <p>
        Our AI tutor feature sends your learning queries to OpenAI for processing. These interactions may include the
        text of your questions and the lesson context. OpenAI processes this data according to their API usage policies
        and does not use API inputs for model training.{' '}
        <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
          OpenAI Privacy Policy
        </a>
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve our services.</li>
        <li>Process payments and manage subscriptions.</li>
        <li>Send transactional emails (e.g., payment receipts, subscription changes).</li>
        <li>Respond to your inquiries and support requests.</li>
        <li>Detect and prevent fraud or abuse.</li>
        <li>Comply with legal obligations.</li>
      </ul>
      <p>
        We do <strong>not</strong> sell your personal information to third parties. We do <strong>not</strong> send
        marketing emails unless you have explicitly opted in.
      </p>

      <h2>4. Local Storage (localStorage)</h2>
      <p>
        We use your browser&apos;s <code>localStorage</code> to save your lesson progress, theme preferences, and
        course completion data. This information:
      </p>
      <ul>
        <li>Is stored entirely on your device.</li>
        <li>Is not transmitted to our servers or any third party.</li>
        <li>Can be cleared at any time through your browser settings.</li>
        <li>Will be lost if you clear your browser data or switch devices.</li>
      </ul>

      <h2>5. Cookies</h2>
      <p>We use a minimal number of cookies for essential functionality:</p>
      <ul>
        <li>
          <strong>Authentication Cookies:</strong> Set by Clerk to maintain your logged-in session. These are strictly
          necessary and cannot be disabled while using the Platform.
        </li>
        <li>
          <strong>Hosting Cookies:</strong> Vercel may set technical cookies for load balancing and security purposes.
        </li>
      </ul>
      <p>
        We do not use advertising cookies or third-party tracking cookies. We do not participate in cross-site
        behavioral advertising.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain your account information for as long as your account is active or as needed to provide services. If
        you delete your account, we will remove your personal data within 30 days, except where we are required by law
        to retain certain records (e.g., payment transaction records for tax and accounting purposes).
      </p>

      <h2>7. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>
          <strong>Access:</strong> Request a copy of the personal data we hold about you.
        </li>
        <li>
          <strong>Correction:</strong> Request that we correct inaccurate or incomplete data.
        </li>
        <li>
          <strong>Deletion:</strong> Request that we delete your personal data, subject to legal retention requirements.
        </li>
        <li>
          <strong>Portability:</strong> Request a machine-readable copy of your data.
        </li>
        <li>
          <strong>Objection:</strong> Object to processing of your data in certain circumstances.
        </li>
      </ul>
      <p>
        To exercise any of these rights, please contact us at{' '}
        <a href="mailto:info@alexandriasdesign.com">info@alexandriasdesign.com</a>. We will respond within 45
        days, as required by applicable law.
      </p>

      <h2>8. California Privacy Rights (CCPA / CPRA)</h2>
      <p>
        If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA),
        as amended by the California Privacy Rights Act (CPRA).
      </p>

      <h3>8.1 Categories of Personal Information We Collect</h3>
      <p>In the past 12 months, we have collected the following categories of personal information:</p>
      <ul>
        <li>
          <strong>Identifiers:</strong> Name, email address, account username (collected via Clerk).
        </li>
        <li>
          <strong>Commercial Information:</strong> Subscription plan purchased, payment status (collected via Stripe).
        </li>
        <li>
          <strong>Internet or Network Activity:</strong> Pages visited, time spent, referral sources, IP address
          (collected via Vercel hosting logs).
        </li>
        <li>
          <strong>Inferences:</strong> Lesson progress and quiz scores (stored locally in your browser).
        </li>
      </ul>
      <p>
        We do <strong>not</strong> collect biometric information, geolocation data beyond IP, or sensitive personal
        information as defined under CPRA.
      </p>

      <h3>8.2 Your CCPA / CPRA Rights</h3>
      <ul>
        <li>
          <strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal
          information we have collected about you.
        </li>
        <li>
          <strong>Right to Delete:</strong> Request deletion of your personal information, subject to legal retention
          exceptions.
        </li>
        <li>
          <strong>Right to Correct:</strong> Request correction of inaccurate personal information.
        </li>
        <li>
          <strong>Right to Opt-Out of Sale or Sharing:</strong> We do not sell or share personal information for
          cross-context behavioral advertising. There is nothing to opt out of.
        </li>
        <li>
          <strong>Right to Limit Use of Sensitive Personal Information:</strong> We do not collect sensitive personal
          information.
        </li>
        <li>
          <strong>Right to Non-Discrimination:</strong> We will not deny services, charge different prices, or provide
          a different level of quality because you exercised any of your CCPA / CPRA rights.
        </li>
      </ul>

      <h3>8.3 How to Exercise Your Rights</h3>
      <p>
        Submit a verifiable request by emailing{' '}
        <a href="mailto:info@alexandriasdesign.com">info@alexandriasdesign.com</a> with the subject line &quot;CCPA
        Request&quot; and the email address associated with your account. We will respond within 45 calendar days, with
        one possible 45-day extension if reasonably necessary. You may designate an authorized agent to make a request
        on your behalf with proof of authorization.
      </p>

      <h2>9. European Economic Area, United Kingdom, and International Users (GDPR)</h2>
      <p>
        If you access our Platform from the European Economic Area (EEA), the United Kingdom, or any other jurisdiction
        with comprehensive data protection law, the following additional terms apply.
      </p>

      <h3>9.1 Legal Basis for Processing</h3>
      <p>We process your personal data on the following legal bases:</p>
      <ul>
        <li>
          <strong>Performance of a contract:</strong> To create your account, deliver the courses you have purchased,
          and process payments.
        </li>
        <li>
          <strong>Legitimate interests:</strong> To prevent fraud, secure the Platform, and improve our services, where
          such interests are not overridden by your fundamental rights.
        </li>
        <li>
          <strong>Consent:</strong> Where required by law (e.g., optional analytics or marketing communications). You
          may withdraw consent at any time without affecting prior lawful processing.
        </li>
        <li>
          <strong>Legal obligation:</strong> To comply with tax, accounting, and other legal requirements.
        </li>
      </ul>

      <h3>9.2 International Data Transfers</h3>
      <p>
        Alexandria&apos;s Design LLC is based in the United States. When you use the Platform, your personal data is
        transferred to and processed in the United States and other countries where our service providers (Clerk,
        Stripe, Vercel, OpenAI) operate. These countries may have different data protection laws than your jurisdiction.
        Where required, we rely on Standard Contractual Clauses approved by the European Commission and equivalent
        safeguards under the UK GDPR.
      </p>

      <h3>9.3 Your GDPR Rights</h3>
      <p>
        In addition to the rights listed in Section 7, EEA and UK residents have the right to:
      </p>
      <ul>
        <li>Withdraw consent at any time, where processing is based on consent.</li>
        <li>
          Lodge a complaint with your local data protection authority (e.g., the Information Commissioner&apos;s Office
          in the UK, or the AEPD in Spain). However, we encourage you to contact us first so we can address your
          concern.
        </li>
        <li>Request restriction of processing in certain circumstances.</li>
      </ul>

      <h3>9.4 Data Protection Contact</h3>
      <p>
        For privacy inquiries from EEA, UK, or other international users, please contact{' '}
        <a href="mailto:info@alexandriasdesign.com">info@alexandriasdesign.com</a>.
      </p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        Our Platform is intended for users aged <strong>13 and older</strong>. Users between 13 and 17 must have a
        parent or legal guardian review these policies and consent to the processing of their data on their behalf.
        Parents are responsible for any payment and account activity associated with a minor&apos;s account.
      </p>
      <p>
        We do not knowingly collect personal information from children under 13. If you become aware that a child under
        13 has provided us with personal data, please contact us and we will promptly delete it.
      </p>

      <h2>11. Data Security</h2>
      <p>
        We implement reasonable administrative, technical, and physical safeguards to protect your information. However,
        no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee
        absolute security.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. When we do, we will revise the &quot;Last Updated&quot; date at
        the top of this page. For material changes, we will notify registered users by email. We encourage you to review
        this Privacy Policy regularly.
      </p>

      <h2>13. Contact Us</h2>
      <p>For privacy-related inquiries or to exercise your data rights, please contact:</p>
      <ul>
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:info@alexandriasdesign.com">info@alexandriasdesign.com</a>
        </li>
        <li>
          <strong>Company:</strong> Alexandria&apos;s Design LLC
        </li>
      </ul>
    </>
  )
}
