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
    excerpt: 'A practical and easy-to-read salary guide for modern professionals, remote teams, and fast-growing digital careers in 2026.',
    category: 'Career Growth',
    summary:
      'Salary expectations are shifting as employers reward AI fluency, remote readiness, domain expertise, and measurable business impact. This guide explains the roles, ranges, and career moves that are creating the strongest earning potential this year, in clear and practical language.',
    featuredStats: [
      { label: 'Fast-growing roles', value: 'AI, Data, Product' },
      { label: 'Top salary trend', value: '+12% to +22%' },
      { label: 'Best growth path', value: 'Specialized + leadership' },
      { label: 'Best for', value: 'Professionals planning a raise' },
    ],
    salaryBands: [
      { role: 'Software Engineer', range: '$80k - $140k', insight: 'Strong demand for full-stack, cloud, and AI-enabled development skills.' },
      { role: 'Data Analyst', range: '$60k - $110k', insight: 'Business-facing analytics roles remain highly valuable when they connect insights to decisions.' },
      { role: 'Product Manager', range: '$95k - $165k', insight: 'Cross-functional leaders earn premium compensation for driving outcomes across teams.' },
      { role: 'Customer Success Lead', range: '$70k - $120k', insight: 'Retention and revenue-linked roles continue to rise as companies focus on long-term client value.' },
    ],
    sections: [
      {
        heading: 'What employers are paying in 2026',
        body: [
          'The strongest salary growth is concentrated in roles that combine technical capability with clear business value. Employers are rewarding professionals who can improve efficiency, build new products, and deliver measurable results.',
          'Remote and hybrid roles still command strong pay when the work includes strategy, ownership, and visible contribution. Flexible work is no longer a compromise for earnings in many industries.',
          'In most markets, professionals who can show proof of impact through results, leadership, or specialized expertise are earning more than those who only rely on a title.',
        ],
      },
      {
        heading: 'Roles that are rising fastest',
        body: [
          'AI-driven product roles, cybersecurity specialists, and data professionals continue to grow quickly because companies are investing in automation, resilience, and data-led decision-making.',
          'Sales, operations, and customer-facing positions with strong performance incentives are also gaining value as organizations focus on growth, retention, and customer satisfaction.',
          'The common thread across these roles is clear: employers want people who can solve problems, adapt quickly, and create measurable business outcomes.',
        ],
      },
      {
        heading: 'How to increase your earning potential',
        body: [
          'Focus on one high-value specialty, document your measurable results, and build a portfolio that proves your impact. Salary growth often comes from becoming the person who solves high-stakes problems rather than simply holding a title.',
          'A strong personal brand, clear communication, and consistent upskilling can make you more attractive for raises, promotions, and better offers.',
          'If you are planning your next move, compare your current pay with market ranges, identify the skills most in demand, and position yourself around the value you already create.',
        ],
      },
    ],
  },
]
