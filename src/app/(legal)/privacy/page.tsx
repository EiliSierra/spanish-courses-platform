import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy — Alexandria's Language Institute",
  description: 'Privacy Policy for Alexandria\'s Language Institute online Spanish courses.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="text-sm text-gray-400 dark:text-gray-500">Last Updated: April 10, 2026</p>

      <p>
        Alexandria&apos;s Language Institute (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operated by
        Alexandria&apos;s Design LLC, is committed to protecting your privacy. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you use our Platform at{' '}
        <strong>spanish-courses-platform.vercel.app</strong>.
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
        <a href="mailto:support@alexandriasdesign.com">support@alexandriasdesign.com</a>. We will respond within 30
        days.
      </p>

      <h2>8. California Privacy Rights (CCPA)</h2>
      <p>
        If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA),
        including the right to know what personal information we collect, the right to delete it, and the right to
        opt-out of the sale of personal information. As stated above, we do not sell personal information.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        Our Platform is not directed to children under 13. We do not knowingly collect personal information from
        children under 13. If you believe a child under 13 has provided us with personal data, please contact us and we
        will promptly delete it.
      </p>

      <h2>10. Data Security</h2>
      <p>
        We implement reasonable administrative, technical, and physical safeguards to protect your information. However,
        no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee
        absolute security.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. When we do, we will revise the &quot;Last Updated&quot; date at
        the top of this page. For material changes, we will notify registered users by email. We encourage you to review
        this Privacy Policy regularly.
      </p>

      <h2>12. Contact Us</h2>
      <p>For privacy-related inquiries or to exercise your data rights, please contact:</p>
      <ul>
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:support@alexandriasdesign.com">support@alexandriasdesign.com</a>
        </li>
        <li>
          <strong>Company:</strong> Alexandria&apos;s Design LLC
        </li>
      </ul>
    </>
  )
}
