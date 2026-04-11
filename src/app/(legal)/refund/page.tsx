import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — Alexandria's Language Institute",
  description: 'Refund and cancellation policy for Alexandria\'s Language Institute subscriptions.',
}

export default function RefundPolicyPage() {
  return (
    <>
      <h1>Refund &amp; Cancellation Policy</h1>
      <p className="text-sm text-gray-400 dark:text-gray-500">Last Updated: April 10, 2026</p>

      <p>
        We want you to be satisfied with your learning experience at Alexandria&apos;s Language Institute. This policy
        outlines how cancellations and refunds are handled for each of our subscription plans.
      </p>

      <h2>1. Free Tier</h2>
      <p>
        The Free Tier provides access to Level 1 at no cost and requires no payment. There is nothing to cancel or
        refund. You may delete your account at any time.
      </p>

      <h2>2. Premium Monthly ($14.99/month)</h2>
      <ul>
        <li>You may cancel your Monthly subscription at any time.</li>
        <li>Upon cancellation, you will retain full access to all premium content until the end of your current billing period.</li>
        <li>No partial refunds are issued for unused days within a billing period.</li>
        <li>Cancellation prevents future charges &mdash; you will not be billed again after the current period ends.</li>
      </ul>

      <h2>3. Premium Yearly ($149.99/year)</h2>
      <ul>
        <li>You may cancel your Yearly subscription at any time.</li>
        <li>
          <strong>Within 30 days of purchase:</strong> You are eligible for a pro-rata refund based on the unused
          portion of your subscription. For example, if you cancel after 10 days, you will receive a refund for the
          remaining ~11 months.
        </li>
        <li>
          <strong>After 30 days:</strong> No refund is available. You will retain access until the end of your annual
          billing period.
        </li>
        <li>Cancellation prevents automatic renewal at the end of the annual period.</li>
      </ul>

      <h2>4. Lifetime Access ($199)</h2>
      <ul>
        <li>
          <strong>14-day money-back guarantee:</strong> If you are not satisfied, you may request a full refund within 14
          calendar days of purchase &mdash; no questions asked.
        </li>
        <li>
          <strong>After 14 days:</strong> Lifetime purchases are non-refundable. You retain permanent access to all
          current and future course content.
        </li>
      </ul>

      <h2>5. How to Cancel</h2>
      <p>You can cancel your subscription through either of these methods:</p>

      <h3>5.1 Stripe Customer Portal (Recommended)</h3>
      <ol>
        <li>Log in to your account on the Platform.</li>
        <li>Navigate to your Account Settings.</li>
        <li>Click &quot;Manage Subscription&quot; to open the Stripe Customer Portal.</li>
        <li>Select &quot;Cancel Subscription&quot; and confirm.</li>
      </ol>

      <h3>5.2 Email</h3>
      <p>
        Send a cancellation request to{' '}
        <a href="mailto:support@alexandriasdesign.com">support@alexandriasdesign.com</a> with the email address
        associated with your account. We will process your cancellation within 1 business day.
      </p>

      <h2>6. How to Request a Refund</h2>
      <p>
        If you are eligible for a refund under this policy, email us at{' '}
        <a href="mailto:support@alexandriasdesign.com">support@alexandriasdesign.com</a> with:
      </p>
      <ul>
        <li>Your account email address.</li>
        <li>The date of your purchase.</li>
        <li>Your reason for requesting a refund (optional but helpful).</li>
      </ul>

      <h2>7. Refund Processing</h2>
      <ul>
        <li>Approved refunds are processed within <strong>5&ndash;10 business days</strong>.</li>
        <li>Refunds are issued to the original payment method used at the time of purchase.</li>
        <li>Depending on your bank or card issuer, it may take an additional 5&ndash;10 business days for the refund to appear on your statement.</li>
      </ul>

      <h2>8. Exceptions</h2>
      <p>We reserve the right to deny a refund request if:</p>
      <ul>
        <li>The request is made outside the applicable refund window.</li>
        <li>We detect evidence of fraud or abuse (e.g., repeated purchase-and-refund patterns).</li>
        <li>The account was terminated for violation of our Terms of Service.</li>
      </ul>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Refund &amp; Cancellation Policy from time to time. Changes will be posted on this page with
        an updated &quot;Last Updated&quot; date. Material changes will be communicated to active subscribers via email.
      </p>

      <h2>10. Contact Us</h2>
      <p>For any questions about refunds or cancellations:</p>
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
