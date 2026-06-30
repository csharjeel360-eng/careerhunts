import Link from 'next/link'

interface LegalSection {
  heading: string
  body: string[]
}

interface LegalPageProps {
  title: string
  intro: string
  sections: LegalSection[]
}

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_35%,_#f8fafc_100%)]">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_45%)]" />
      <div className="container relative mx-auto px-4 py-14 sm:py-16">
        <Link href="/" className="inline-flex items-center text-sm font-semibold text-slate-700 transition hover:text-slate-900">
          <span className="mr-2">←</span>
          Back to home
        </Link>

        <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-[0_25px_70px_-24px_rgba(15,23,42,0.24)] backdrop-blur sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Legal</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">{intro}</p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <div key={section.heading} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
                <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
