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
    excerpt: 'A practical guide to creating a resume that is clear, modern, and recruiter-friendly.',
    category: 'Resume Tips',
    summary:
      'Your resume is often your first impression with an employer. A strong resume quickly highlights your skills, experience, and achievements while showing why you are a good fit for the role.',
    highlights: ['Tailored for each role', 'ATS-friendly structure', 'Clear achievements', 'Modern resume format', 'Job-specific keywords'],
    steps: [
      'Write a strong professional summary that reflects the role you are applying for.',
      'Highlight measurable results instead of generic responsibilities.',
      'Keep the layout simple and easy to scan for recruiters and ATS tools.'
    ],
    sections: [
      {
        heading: 'Quick overview',
        body: [
          'Your resume is often your first impression with an employer. A strong resume quickly highlights your skills, experience, and achievements while showing why you’re a good fit for the role.',
          'In 2026, recruiters spend only a few seconds scanning each resume before deciding whether to continue reading. Keeping your resume focused, relevant, and easy to read can significantly improve your chances of getting an interview.'
        ]
      },
      {
        heading: 'Focus areas',
        body: [
          'Tailored for each role: Customize your resume for every application. Match your experience and skills to the requirements in the job description instead of using the same resume for every job.',
          'ATS-friendly structure: Many employers use Applicant Tracking Systems (ATS) to screen resumes. Use standard headings such as Professional Summary, Work Experience, Education, and Skills, and avoid complex layouts, graphics, or text boxes.',
          'Clear achievements: Show the value you created in previous roles. Focus on measurable results rather than listing everyday responsibilities.'
        ]
      },
      {
        heading: 'How to get started',
        body: [
          'Write a strong professional summary: Begin with a short summary that reflects the role you’re applying for. Mention your experience, key strengths, and career objective in two or three sentences.',
          'Highlight results: Each bullet point under your work experience should demonstrate an achievement, improvement, or contribution whenever possible.',
          'Keep it simple: Use a clean layout with clear headings, bullet points, and consistent formatting. A resume should be easy for both recruiters and ATS software to scan.'
        ]
      },
      {
        heading: 'What a modern resume should include',
        body: [
          'Contact Information',
          'Professional Summary',
          'Key Skills',
          'Work Experience',
          'Education',
          'Certifications (if relevant)',
          'Projects or Portfolio (optional)',
          'Technical Skills (for technical roles)',
          'Keep your resume concise—one page for most entry-level professionals and up to two pages for experienced candidates.'
        ]
      },
      {
        heading: 'How to make your resume stronger',
        body: [
          'Instead of using generic phrases like hardworking, team player, or responsible, focus on accomplishments that demonstrate your impact.',
          'Use numbers whenever possible to make your achievements more convincing.',
          'Examples include: Increased website traffic by 35%, Reduced response time by 20%, Managed a portfolio of 100+ clients, Completed projects ahead of schedule.',
          'Recruiters are more interested in what you achieved than what your job description was.'
        ]
      },
      {
        heading: 'Match your resume to the job',
        body: [
          'Before applying, carefully review the job posting and identify the key skills, tools, and qualifications the employer is looking for.',
          'If those skills genuinely match your experience, include them naturally throughout your resume. This improves your chances of passing ATS screening and helps recruiters quickly recognize your suitability for the role.'
        ]
      },
      {
        heading: 'Quick resume checklist',
        body: [
          '✔ Is my resume tailored to this specific job?',
          '✔ Does the summary match the position?',
          '✔ Have I highlighted measurable achievements?',
          '✔ Is the formatting clean and easy to read?',
          '✔ Have I included relevant keywords from the job description?',
          '✔ Is the resume free of spelling and grammar errors?',
          '✔ Are my contact details accurate and up to date?',
          '✔ Is the resume one or two pages long?',
          '✔ Have I removed outdated or irrelevant information?'
        ]
      },
      {
        heading: 'Final tip',
        body: [
          'A great resume doesn’t need flashy designs or complicated layouts. Recruiters want a document that is clear, relevant, and focused on the value you can bring to their organization.',
          'Keep your resume updated, tailor it for each opportunity, and let your achievements speak for themselves.'
        ]
      }
    ]
  },
  {
    slug: 'interview-preparation-guide',
    title: 'Interview Preparation Guide',
    excerpt: 'Learn how to prepare effectively, answer confidently, and make a lasting impression during your next job interview.',
    category: 'Interview Prep',
    summary:
      'A successful interview is about more than having the right qualifications. Employers want to see that you communicate clearly, solve problems effectively, and understand how your skills can contribute to their organization.',
    highlights: ['Confident answers', 'Strong storytelling', 'Better preparation', 'Company research', 'STAR method'],
    steps: [
      'Research the company and the role thoroughly before your interview.',
      'Prepare strong examples that show your skills, achievements, and problem-solving.',
      'Practice your delivery aloud so your answers feel natural, clear, and confident.'
    ],
    sections: [
      {
        heading: 'Quick overview',
        body: [
          'A successful interview is about more than having the right qualifications. Employers want to see that you communicate clearly, solve problems effectively, and understand how your skills can contribute to their organization.',
          'Preparing in advance helps you answer questions with confidence, reduce nervousness, and present yourself as a professional candidate.'
        ]
      },
      {
        heading: 'Focus areas',
        body: [
          'Confident answers: Practice answering common interview questions in a clear and concise way. Focus on your experience, achievements, and how your skills match the role.',
          'Strong storytelling: Support your answers with real examples from your education, work experience, internships, or personal projects. Structured stories are more memorable and demonstrate your abilities.',
          'Better preparation: Understanding the company and the position before the interview allows you to tailor your responses and show genuine interest in the opportunity.'
        ]
      },
      {
        heading: 'How to get started',
        body: [
          'Research the company: Visit the company’s website, review its mission, products or services, and learn about its values and recent achievements. Read the job description carefully so you understand what the employer is looking for.',
          'Prepare your examples: Think of situations where you solved a problem, worked as part of a team, handled a challenge, or achieved a positive result. These examples will help you answer behavioral interview questions with confidence.',
          'Practice your delivery: Practice answering questions aloud instead of simply reading them. Speaking naturally helps improve confidence, clarity, and eye contact during the interview.'
        ]
      },
      {
        heading: 'Prepare before the interview',
        body: [
          'Research the company and the role.',
          'Review your resume and be ready to discuss your experience.',
          'Prepare answers to common interview questions.',
          'Practice using the STAR Method (Situation, Task, Action, Result) to explain your experiences.',
          'Prepare copies of your resume if attending an in-person interview.',
          'Plan your route or test your internet connection for virtual interviews.',
          'Dress appropriately for the company’s work environment.',
          'Being prepared helps you feel more confident and allows you to focus on the conversation instead of worrying about logistics.'
        ]
      },
      {
        heading: 'What to do during the interview',
        body: [
          'Arrive 10–15 minutes early or join virtual interviews a few minutes before the scheduled time.',
          'Greet the interviewer politely and maintain a positive attitude.',
          'Listen carefully before answering each question.',
          'Speak clearly and keep your responses focused.',
          'Support your answers with relevant examples whenever possible.',
          'Maintain appropriate eye contact and positive body language.',
          'Be honest if you don’t know an answer, and explain how you would approach learning or solving the problem.',
          'Remember, employers are evaluating not only your experience but also how you communicate, think, and collaborate.'
        ]
      },
      {
        heading: 'Ask thoughtful questions',
        body: [
          'When the interviewer asks if you have any questions, always take the opportunity to learn more about the role.',
          'Consider asking questions such as: What does success look like in this position? What are the team’s current priorities? What opportunities are available for learning and professional development? How would you describe the company culture? What are the next steps in the hiring process?',
          'Asking thoughtful questions demonstrates preparation, curiosity, and genuine interest in the opportunity.'
        ]
      },
      {
        heading: 'Quick interview checklist',
        body: [
          '✔ Have I researched the company and the role?',
          '✔ Do I understand the job requirements?',
          '✔ Have I prepared examples using the STAR Method?',
          '✔ Can I explain my experience clearly?',
          '✔ Have I practiced answering common interview questions?',
          '✔ Do I know what questions I want to ask the interviewer?',
          '✔ Have I chosen appropriate professional attire?',
          '✔ Am I familiar with the interview location or virtual meeting platform?'
        ]
      },
      {
        heading: 'Final tip',
        body: [
          'Interviews are conversations, not tests. The goal is to demonstrate how your skills, experience, and attitude can help the employer succeed.',
          'Prepare thoroughly, stay confident, communicate clearly, and let your experience and achievements speak for themselves.'
        ]
      }
    ]
  },
  {
    slug: 'networking-tips-for-job-seekers',
    title: 'Networking Tips for Job Seekers',
    excerpt: 'Discover practical ways to build meaningful professional relationships and uncover career opportunities that are not always advertised.',
    category: 'Networking',
    summary:
      'Networking is one of the most effective ways to grow your career. Many job opportunities are filled through referrals, recommendations, or professional connections before they are ever posted online.',
    highlights: ['Meaningful connections', 'Hidden opportunities', 'Long-term growth', 'Professional presence', 'Effective follow-up'],
    steps: [
      'Introduce yourself with a short, friendly message that explains who you are and why you are connecting.',
      'Offer value by sharing resources, congratulating others, or helping where you can.',
      'Stay consistent by checking in, sharing updates, and maintaining respectful communication over time.'
    ],
    sections: [
      {
        heading: 'Quick overview',
        body: [
          'Networking is one of the most effective ways to grow your career. Many job opportunities are filled through referrals, recommendations, or professional connections before they are ever posted online.',
          'The best networking is genuine, consistent, and focused on building long-term relationships—not asking for a job in your first conversation.'
        ]
      },
      {
        heading: 'Focus areas',
        body: [
          'Meaningful connections: Build relationships with people who share your professional interests. Focus on creating authentic conversations, learning from others, and staying connected over time.',
          'Hidden opportunities: Many employers fill roles through referrals and professional networks. Expanding your network can help you learn about opportunities before they become public.',
          'Long-term growth: Networking isn’t just for finding your next job. It can lead to mentorship, career advice, partnerships, industry knowledge, and future opportunities throughout your career.'
        ]
      },
      {
        heading: 'How to get started',
        body: [
          'Reach out professionally: Introduce yourself with a short, friendly message. Explain who you are, why you’re connecting, and what you’d like to learn or discuss.',
          'Offer value: Networking is a two-way relationship. Share useful resources, congratulate others on their achievements, or offer help when appropriate. People are more likely to remember those who contribute positively.',
          'Stay consistent: Strong professional relationships develop over time. Stay in touch occasionally by sharing updates, commenting on professional posts, or checking in with your connections.'
        ]
      },
      {
        heading: 'Build relationships with purpose',
        body: [
          'Start with the people you already know, including former colleagues, classmates, professors or teachers, friends and family, mentors, and professional association members.',
          'As your confidence grows, expand your network by connecting with professionals in your industry through networking events, webinars, conferences, and online communities.',
          'Remember, networking is about learning, sharing ideas, and building trust—not simply collecting contacts.'
        ]
      },
      {
        heading: 'Make your outreach effective',
        body: [
          'A good networking message should be polite, personal, and concise.',
          'Keep your message focused by introducing yourself briefly, explaining why you’re reaching out, mentioning what you admire about their work or experience, and asking one thoughtful question or requesting a short conversation.',
          'Avoid sending generic messages or immediately asking for a job or referral. Building trust first creates stronger professional relationships.'
        ]
      },
      {
        heading: 'Grow your professional presence',
        body: [
          'Your online presence plays an important role in networking. Make sure your professional profiles are updated with your latest experience, clear and professional, consistent across platforms, and focused on your skills and career goals.',
          'Share industry news, learning experiences, certifications, or personal projects to demonstrate your interest and expertise.'
        ]
      },
      {
        heading: 'Attend networking opportunities',
        body: [
          'Look for opportunities to meet professionals both online and in person, such as career fairs, industry conferences, professional workshops, webinars, local meetups, alumni events, and online professional communities.',
          'Participating regularly helps you expand your network and stay informed about industry trends.'
        ]
      },
      {
        heading: 'Follow up the right way',
        body: [
          'After meeting someone new, send a short follow-up message within a few days to thank them for their time or conversation.',
          'Stay connected by congratulating them on achievements, sharing helpful articles or resources, commenting on professional updates, and checking in occasionally without expecting anything in return.',
          'Consistent, respectful communication helps build lasting professional relationships.'
        ]
      },
      {
        heading: 'Quick networking checklist',
        body: [
          '✔ Is my message personalized?',
          '✔ Have I explained why I’m connecting?',
          '✔ Am I being respectful of their time?',
          '✔ Am I looking to build a relationship rather than asking for immediate favors?',
          '✔ Is my professional profile up to date?',
          '✔ Have I followed up appropriately after connecting?'
        ]
      },
      {
        heading: 'Final tip',
        body: [
          'Networking is an investment in your career. The strongest professional relationships are built through genuine conversations, mutual respect, and consistent engagement.',
          'Focus on learning, offering value, and maintaining meaningful connections over time. Those relationships can open doors to new opportunities, career advice, and long-term professional growth.'
        ]
      }
    ]
  }
]
