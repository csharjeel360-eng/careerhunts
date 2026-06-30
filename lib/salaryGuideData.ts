export type SalaryGuideItem = {
  slug: string
  title: string
  shortTitle: string
  excerpt: string
  category: string
  summary: string
  featuredStats: Array<{
    label: string
    value: string
  }>
  salaryBands: Array<{
    role: string
    range: string
    insight: string
  }>
  sections: Array<{
    heading: string
    body: string[]
  }>
}

export const salaryGuides: SalaryGuideItem[] = [
  {
    slug: 'next-gen-salary-guide-2026',
    title: 'Next-Gen Salary Guide 2026',
    shortTitle: '2026 Salary Guide',
    excerpt: 'A practical salary guide for modern professionals, remote teams, and fast-growing digital careers in 2026.',
    category: 'Career Growth',
    summary:
      'Salary expectations are shifting as employers reward AI fluency, remote readiness, domain expertise, and measurable business impact. This guide highlights the roles, ranges, and career moves that are creating the strongest earning potential this year.',
    featuredStats: [
      { label: 'Fast-growing roles', value: 'AI, Data, Product' },
      { label: 'Top salary trend', value: '+12% to +22%' },
      { label: 'Best growth path', value: 'Specialized + leadership' },
    ],
    salaryBands: [
      { role: 'Software Engineer', range: '$80k - $140k', insight: 'Strong demand for full-stack and cloud engineering skills.' },
      { role: 'Data Analyst', range: '$60k - $110k', insight: 'Business-facing analytics roles remain highly valuable.' },
      { role: 'Product Manager', range: '$95k - $165k', insight: 'Cross-functional leaders earn premium compensation.' },
      { role: 'Customer Success Lead', range: '$70k - $120k', insight: 'Retention and revenue-linked roles continue to rise.' },
    ],
    sections: [
      {
        heading: 'What employers are paying in 2026',
        body: [
          'The strongest salary growth is concentrated in roles that combine technical capability with clear business value. Employers are rewarding professionals who can improve efficiency, drive growth, or build new digital products.',
          'Remote and hybrid roles still command premium pay when the work involves strategy, ownership, and measurable outcomes. Flexible location is no longer a trade-off for earnings in many industries.',
        ],
      },
      {
        heading: 'Roles that are rising fastest',
        body: [
          'AI-driven product roles, cybersecurity specialists, and data professionals continue to see fast growth because companies are investing heavily in automation, resilience, and data-led decision-making.',
          'Sales, operations, and customer-facing positions with performance incentives are also gaining value as companies focus on retention and growth.',
        ],
      },
      {
        heading: 'How to increase your earning potential',
        body: [
          'Focus on one high-value specialty, document your measurable results, and build a portfolio that proves your impact. Salary growth often comes from becoming the person who solves high-stakes problems rather than simply holding a title.',
          'A strong personal brand, clear communication, and consistent upskilling can make you more attractive for raises, promotions, and better offers.',
        ],
      },
    ],
  },
]
