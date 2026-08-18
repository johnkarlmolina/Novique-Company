import { Clock } from 'lucide-react'

export default function ComingSoon({ eyebrow, title, description }) {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C89B3C]">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900">{title}</h1>
      <p className="mt-4 max-w-xl text-slate-600">{description}</p>
      <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#C89B3C]/40 bg-[#C89B3C]/10 px-5 py-2 text-sm font-semibold text-[#C89B3C]">
        <Clock className="h-4 w-4" />
        Coming Soon
      </span>
    </section>
  )
}
