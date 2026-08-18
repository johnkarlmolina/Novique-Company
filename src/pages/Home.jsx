import { ArrowRight, LayoutDashboard, PenTool, Smartphone, Sparkles } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className="space-y-24">
      <section className="hero-grid relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-6 py-16 text-center sm:px-12 sm:py-24">
        <div className="pointer-events-none absolute -right-20 top-0 h-52 w-52 rounded-full bg-[#C89B3C]/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-8 bottom-0 h-44 w-44 rounded-full bg-[#172A3A]/10 blur-2xl" />

        <div className="relative mx-auto max-w-3xl space-y-7">
          <p className="fade-rise text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            For Startups, Founders & Growing Businesses
          </p>

          <h1 className="fade-rise relative text-4xl font-extrabold leading-tight text-slate-900 sm:text-6xl">
            <Sparkles className="absolute -left-2 -top-4 h-5 w-5 text-[#C89B3C] sm:-left-8 sm:top-0" />
            We Craft Next-Gen Web & Mobile Experiences
          </h1>

          <p className="fade-rise mx-auto max-w-xl text-base text-slate-600 sm:text-lg">
            Novique designs and engineers custom digital platforms from enterprise web ecosystems to premium iOS and Android products.
          </p>

          <div className="fade-rise flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
              <NavLink
                to="/get-started"
                className="inline-flex items-center gap-2 rounded-full bg-[#C89B3C] px-5 py-2.5 text-sm font-bold text-white transition hover:scale-[1.03]"
              >
                Start Your Project <ArrowRight className="h-4 w-4" />
              </NavLink>
              <NavLink
                to="/projects"
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:text-[#C89B3C]"
              >
                View Portfolio
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C89B3C]">Services</p>
          <h2 className="text-3xl font-bold text-slate-900">Specialized Build Capabilities</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <ServiceCard icon={LayoutDashboard} title="Web Application Development" text="Custom web systems, secure admin platforms, and dashboard ecosystems built for scale." />
          <ServiceCard icon={Smartphone} title="Mobile App Development" text="Cross-platform and native mobile product delivery with premium product polish." />
          <ServiceCard icon={PenTool} title="UI/UX Strategy" text="Journey mapping and interface systems designed for adoption and conversion." />
        </div>
      </section>

      <section className="rounded-3xl bg-[#0E1B24] p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C89B3C]">Ready to Build?</p>
        <h3 className="mt-2 text-3xl font-bold text-white">Launch your next platform with Novique</h3>
        <p className="mx-auto mt-2 max-w-2xl text-slate-300">
          Get a focused strategy call and a custom technical roadmap tailored to your business goals.
        </p>
        <NavLink
          to="/get-started"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#C89B3C] px-6 py-3 text-sm font-bold text-white transition hover:gap-3"
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </NavLink>
      </section>
    </div>
  )
}

function ServiceCard({ icon: Icon, title, text }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#C89B3C]/60 hover:shadow-lg">
      <div className="mb-4 inline-flex rounded-lg bg-[#C89B3C]/15 p-2 text-[#C89B3C]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </article>
  )
}
