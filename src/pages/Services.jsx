import { CheckCircle2 } from 'lucide-react'

const services = [
  {
    title: 'Web Application Development',
    desc: 'Scalable SaaS platforms, operational dashboards, and secure web portals.',
    features: ['Architecture planning', 'API integrations', 'Automation workflows'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Mobile App Development (iOS/Android)',
    desc: 'High-retention mobile products engineered for speed, usability, and reliability.',
    features: ['Native + cross-platform', 'Offline-first capability', 'Analytics integration'],
    stack: ['Swift', 'Kotlin', 'Flutter', 'Firebase'],
  },
  {
    title: 'UI/UX Design & Strategy',
    desc: 'User-focused product flows and design systems tied to business outcomes.',
    features: ['Discovery workshops', 'User flow mapping', 'High-fidelity prototyping'],
    stack: ['Figma', 'Design Tokens', 'Usability Testing'],
  },
]

export default function Services() {
  return (
    <section className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C89B3C]">Services</p>
        <h1 className="text-4xl font-bold text-slate-900">Full-Spectrum Product Engineering</h1>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">{service.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{service.desc}</p>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#C89B3C]" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {service.stack.map((item) => (
                <span key={item} className="rounded-full border border-[#C89B3C]/35 px-3 py-1 text-[#C89B3C]">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-lg font-bold text-slate-900">Our Process</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {['Discover', 'Architect', 'Build', 'Scale'].map((step, idx) => (
            <div key={step} className="rounded-xl border border-[#C89B3C]/25 bg-white p-4">
              <p className="text-xs font-semibold text-[#C89B3C]">STEP {idx + 1}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
