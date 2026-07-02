export type CareerResourceItem = {
  slug: string
  title: string
  excerpt: string
  category: string
  summary: string
  highlights: string[]
  steps: string[]
  sections: Array<{
    heading: string
    body: string[]
  }>
}

export const careerResources: CareerResourceItem[] = [
  {
    slug: 'resume-checklist-2026',
    title: 'Resume Checklist for 2026',
    excerpt: 'A practical guide to building a resume that is clear, modern, and recruiter-friendly.',
    category: 'Resume Tips',
    summary:
      'A strong resume should quickly show your value, match the role you want, and be easy for recruiters and applicant tracking systems to read.',
    highlights: ['Tailored for each role', 'ATS-friendly structure', 'Clear achievements'],
    steps: [
      'Start with a clean summary that matches the job title.',
      'Focus each bullet point on measurable impact and outcomes.',
      'Keep formatting simple and easy to scan.'
    ],
    sections: [
      {
        heading: 'What a modern resume should include',
        body: [
          'A strong resume in 2026 is concise, targeted, and results-focused. It should quickly tell recruiters who you are, what you do well, and how your experience fits the role.',
          'Use a clear structure with a short summary, relevant skills, work experience, and education. Keep the language simple and direct so the page is easy to skim.'
        ]
      },
      {
        heading: 'How to make your resume stronger',
        body: [
          'Replace generic phrases with clear achievements. Instead of saying you helped the team, explain the result you delivered and the impact it had.',
          'Match your resume to the role by including the skills and tools mentioned in the job description. This helps both recruiters and automated screening systems understand your fit.'
        ]
      }
    ]
  },
  {
    slug: 'interview-preparation-guide',
    title: 'Interview Preparation Guide',
    excerpt: 'Learn how to prepare, answer confidently, and leave a strong impression in interviews.',
    category: 'Interview Prep',
    summary:
      'Good interview preparation is about clarity, confidence, and showing that you can solve problems and communicate your value well.',
    highlights: ['Confident answers', 'Strong storytelling', 'Better preparation'],
    steps: [
      'Research the company and the role before the interview.',
      'Prepare clear examples that show your skills and results.',
      'Practice your delivery so your answers feel natural and confident.'
    ],
    sections: [
      {
        heading: 'Prepare before the interview',
        body: [
          'Start by reviewing the company’s mission, recent news, and the specific requirements of the role. This helps you tailor your answers and show genuine interest.',
          'Prepare a few strong stories using the STAR method so you can answer questions with structure and confidence.'
        ]
      },
      {
        heading: 'What to do during the interview',
        body: [
          'Speak clearly, stay calm, and focus on the value you bring. Employers are not only listening for what you did, but also how you think and how you communicate.',
          'Ask thoughtful questions about the team, goals, and expectations. This shows curiosity and helps you evaluate whether the role fits you well.'
        ]
      }
    ]
  },
  {
    slug: 'networking-tips-for-job-seekers',
    title: 'Networking Tips for Job Seekers',
    excerpt: 'Discover simple ways to build meaningful professional relationships and uncover hidden opportunities.',
    category: 'Networking',
    summary:
      'Networking works best when it is consistent, genuine, and focused on building long-term relationships rather than asking for favors too quickly.',
    highlights: ['Meaningful connections', 'Hidden opportunities', 'Long-term growth'],
    steps: [
      'Reach out to people in your industry with a clear and friendly message.',
      'Offer value by sharing useful insights or support when possible.',
      'Stay consistent and build relationships over time.'
    ],
    sections: [
      {
        heading: 'Build relationships with purpose',
        body: [
          'Networking is not only about finding a job. It is also about learning, sharing knowledge, and creating lasting professional connections.',
          'Begin with people you already know, then expand to colleagues, mentors, and professionals in your field who share your interests.'
        ]
      },
      {
        heading: 'Make your outreach effective',
        body: [
          'Keep your message short and specific. Mention why you are reaching out and what you hope to learn or discuss.',
          'Follow up respectfully and stay engaged over time. Strong networking often leads to opportunities that are not posted publicly.'
        ]
      }
    ]
  }
]
