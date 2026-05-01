import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms of Service — Alexandria's Language Institute",
  description: 'Terms of Service for Alexandria\'s Language Institute online Spanish courses.',
}

export default function TermsOfServicePage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="text-sm text-gray-400 dark:text-gray-500">Last Updated: May 1, 2026</p>

      <p>
        Welcome to Alexandria&apos;s Language Institute (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operated by
        Alexandria&apos;s Design LLC. By accessing or using our website and services at{' '}
        <strong>www.alexandriaslanguages.com</strong> (the &quot;Platform&quot;), you agree to be bound by these
        Terms of Service (&quot;Terms&quot;). If you do not agree, please do not use the Platform.
      </p>

      <h2>1. Service Description</h2>
      <p>
        Alexandria&apos;s Language Institute provides online Spanish language courses spanning 10 levels (A1 through C2),
        comprising 74 lessons with over 4,400 native audio clips and interactive activities. We also offer an AI-powered
        tutor feature to supplement your learning experience.
      </p>

      <h2>2. Account Registration and Age Requirements</h2>
      <p>
        To access certain features, you must create an account through our authentication provider, Clerk. You agree to:
      </p>
      <ul>
        <li>Provide accurate and complete information during registration.</li>
        <li>Keep your login credentials confidential and secure.</li>
        <li>Notify us immediately of any unauthorized use of your account.</li>
      </ul>
      <p>
        <strong>Age requirements:</strong>
      </p>
      <ul>
        <li>You must be at least <strong>13 years of age</strong> to create an account.</li>
        <li>
          If you are between <strong>13 and 17 years old</strong>, a parent or legal guardian must review and consent to
          these Terms on your behalf and is responsible for any payment associated with your account.
        </li>
        <li>
          We do not knowingly collect personal information from children under 13. If you become aware that a child
          under 13 has registered, please contact us at{' '}
          <a href="mailto:info@alexandriasdesign.com">info@alexandriasdesign.com</a> and we will promptly delete the
          account.
        </li>
      </ul>
      <p>
        You are solely responsible for all activity that occurs under your account. We reserve the right to suspend or
        terminate accounts that violate these Terms.
      </p>

      <h2>3. Subscription Plans and Pricing</h2>
      <p>We offer the following plans:</p>
      <ul>
        <li><strong>Free Tier</strong> &mdash; Access to Level 1 at no cost.</li>
        <li><strong>Premium Monthly</strong> &mdash; $14.99 per month, billed monthly.</li>
        <li><strong>Premium Yearly</strong> &mdash; $149.99 per year, billed annually.</li>
        <li><strong>Lifetime Access</strong> &mdash; One-time payment of $199.</li>
      </ul>
      <p>
        All prices are in US Dollars (USD) and may be subject to applicable taxes. We reserve the right to modify
        pricing with at least 30 days&apos; notice to active subscribers.
      </p>

      <h2>4. Payment and Billing</h2>
      <p>
        All payments are processed securely through Stripe. We do not store your credit card information on our servers.
        By subscribing to a paid plan, you authorize us to charge your payment method on a recurring basis until you
        cancel.
      </p>

      <h3>4.1 Auto-Renewal</h3>
      <p>
        Monthly and Yearly subscriptions automatically renew at the end of each billing period unless canceled before the
        renewal date. You will be charged the then-current rate at the time of renewal.
      </p>

      <h3>4.2 How to Cancel</h3>
      <p>
        You may cancel your subscription at any time through your Stripe Customer Portal (accessible from your account
        settings) or by emailing us at{' '}
        <a href="mailto:info@alexandriasdesign.com">info@alexandriasdesign.com</a>. Cancellation takes effect at
        the end of your current billing period.
      </p>

      <h2>5. Account Sharing and Restrictions</h2>
      <p>Your account is for your personal use only. You agree not to:</p>
      <ul>
        <li>Share your account credentials with any other person.</li>
        <li>Allow multiple individuals to use a single account.</li>
        <li>Use bots, scrapers, or automated tools to access or download content from the Platform.</li>
        <li>Reproduce, distribute, or resell any course materials without our prior written consent.</li>
        <li>Reverse-engineer, decompile, or disassemble any part of the Platform.</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        All content on the Platform &mdash; including but not limited to course materials, audio recordings, text,
        graphics, logos, and software &mdash; is the exclusive property of Alexandria&apos;s Design LLC or its
        licensors. This content is protected by copyright, trademark, and other intellectual property laws.
      </p>
      <p>
        Your subscription grants you a limited, non-exclusive, non-transferable, revocable license to access and use the
        content for personal, non-commercial educational purposes only.
      </p>

      <h2>7. AI Tutor Feature</h2>
      <p>
        Our AI tutor feature is powered by third-party technology (OpenAI) and is provided as a supplementary learning
        tool. While we strive for accuracy, AI-generated responses may occasionally contain errors. We do not guarantee
        the completeness or accuracy of AI-generated content, and it should not be relied upon as the sole source of
        language instruction.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Alexandria&apos;s Design LLC and its officers, directors, employees, and
        agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out
        of or related to your use of the Platform, including but not limited to loss of data, loss of profits, or
        interruption of service.
      </p>
      <p>
        Our total liability for any claim arising from these Terms or your use of the Platform shall not exceed the
        amount you have paid us in the 12 months preceding the claim.
      </p>

      <h2>9. Disclaimer of Warranties</h2>
      <p>
        The Platform is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether
        express or implied, including but not limited to implied warranties of merchantability, fitness for a particular
        purpose, and non-infringement. We do not warrant that the Platform will be uninterrupted, error-free, or free of
        harmful components.
      </p>

      <h2>10. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of the State of California, United States,
        without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved
        exclusively in the state or federal courts located in Riverside County, California.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. When we make material changes, we will notify you by posting the
        updated Terms on the Platform and updating the &quot;Last Updated&quot; date. For active subscribers, we will
        also send an email notification at least 30 days before significant changes take effect. Your continued use of
        the Platform after any changes constitutes acceptance of the new Terms.
      </p>

      <h2>12. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your access to the Platform at any time, with or without cause and
        with or without notice, if we believe you have violated these Terms. Upon termination, your right to use the
        Platform ceases immediately. Sections that by their nature should survive termination will remain in effect.
      </p>

      <h2>13. Contact Us</h2>
      <p>If you have questions about these Terms, please contact us at:</p>
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
