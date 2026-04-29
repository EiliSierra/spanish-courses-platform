const SITE_URL = 'https://www.alexandriaslanguages.com'

const organization = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: "Alexandria's Language Institute",
  alternateName: 'Alexandria Languages',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-horizontal.png`,
  description:
    'Online Spanish language institute offering 10 CEFR-aligned levels (A1 to C2) with native audio, interactive activities, and AI-powered tutoring.',
  parentOrganization: {
    '@type': 'Organization',
    name: "Alexandria's Design LLC",
    address: {
      '@type': 'PostalAddress',
      streetAddress: '27376 Red Rock Rd',
      addressLocality: 'Moreno Valley',
      addressRegion: 'CA',
      postalCode: '92555',
      addressCountry: 'US',
    },
  },
  founder: [
    {
      '@type': 'Person',
      name: 'Eili Sierra',
      jobTitle: 'Founder & Lead Curriculum Designer',
      description: 'Native Spanish speaker, M.Ed. in Educational Innovation, 20+ years teaching experience.',
    },
    {
      '@type': 'Person',
      name: 'Dr. Charles Martin',
      jobTitle: 'Research Foundation & Instructional Designer',
      description:
        'Ed.D. in Curriculum and Instruction with specialization in Educational Technology (University of Florida).',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'info@alexandriasdesign.com',
    availableLanguage: ['English', 'Spanish'],
  },
}

const course = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Spanish Language Course — A1 to C2',
  description:
    'A complete online Spanish language program built on CEFR backward design, UDL principles, and evidence-based L2 acquisition research. 84 lessons across 10 levels with native audio, interactive activities, and AI-powered tutoring.',
  provider: {
    '@type': 'EducationalOrganization',
    name: "Alexandria's Language Institute",
    sameAs: SITE_URL,
  },
  inLanguage: 'es',
  educationalLevel: 'A1, A2, B1, B2, C1, C2',
  teaches: [
    'Spanish vocabulary',
    'Spanish grammar',
    'Spanish pronunciation',
    'Spanish listening comprehension',
    'Conversational Spanish',
    'Reading and writing in Spanish',
  ],
  hasCourseInstance: [
    {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT100H',
      inLanguage: 'es',
    },
  ],
  offers: [
    {
      '@type': 'Offer',
      name: 'Free Plan',
      description: 'Level 1 (A1 Foundations) — 8 lessons + final exam',
      price: '0',
      priceCurrency: 'USD',
      url: `${SITE_URL}/sign-up`,
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Premium Monthly',
      description: 'All 10 levels, monthly subscription',
      price: '14.99',
      priceCurrency: 'USD',
      url: `${SITE_URL}/#pricing`,
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Premium Yearly',
      description: 'All 10 levels, yearly subscription',
      price: '119',
      priceCurrency: 'USD',
      url: `${SITE_URL}/#pricing`,
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Lifetime',
      description: 'All 10 levels, one-time payment, lifetime access',
      price: '199',
      priceCurrency: 'USD',
      url: `${SITE_URL}/#pricing`,
      availability: 'https://schema.org/InStock',
    },
  ],
}

const faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it free to start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Level 1 (A1 Foundations) is fully free — 8 lessons plus a final exam — no credit card required to sign up.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Monthly, Yearly, and Lifetime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All three plans give you access to all 10 levels (A1 to C2). Monthly is $14.99 billed every month, Yearly is $119 billed annually (~33% savings), and Lifetime is a single $199 payment with permanent access — no recurring charges.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I learn at my own pace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The platform is fully self-paced. Your progress is saved automatically and preserved even if you pause your subscription and return later.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the audio recorded by native Spanish speakers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All 4,400+ audio clips — every word and dialogue across all 84 lessons — are recorded by native Spanish speakers, not synthesized.',
      },
    },
    {
      '@type': 'Question',
      name: 'What CEFR levels does the course cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The course covers A1 (Foundations) through C2 (Capstone), with 10 progressive levels: A1, A1–A2, A2, A2–B1, B1–B2, B1–C1, B2–C1, B2–C1 Specialization, C1 Cultural Immersion, and C1–C2 Capstone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cancel anytime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can cancel your subscription anytime from your dashboard. You keep access until the end of the current billing period. Refund requests are handled per our refund policy.',
      },
    },
  ],
}

export default function JsonLd() {
  const schemas = [organization, course, faq]
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
