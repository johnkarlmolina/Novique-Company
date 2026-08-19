import { Send } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { Facebook, Instagram, TikTok } from './SocialIcons'

const companyLinks = [
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/partners', label: 'Partners' },
]

const exploreLinks = [
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/get-started', label: 'Get Started' },
]

const socialLinks = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: TikTok, label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[2.5rem] bg-[#0E1B24] text-slate-300">
      <span className="pointer-events-none absolute -bottom-10 left-0 select-none text-[9rem] font-extrabold leading-none tracking-tight text-white/5 sm:text-[12rem]">
        NOVIQUE
      </span>

      <div className="relative grid w-full gap-10 px-6 pb-12 pt-14 sm:px-10 lg:grid-cols-4 lg:px-16">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo-icon.png" alt="Novique" className="h-9 w-9 object-contain" />
            <span className="text-lg font-bold text-white">Novique</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-slate-400">
            Precision-crafted web and mobile products for bold digital businesses.
          </p>

          <h4 className="mt-6 text-sm font-semibold text-white">Socials</h4>
          <div className="mt-3 flex gap-3">
            {socialLinks.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-[#C89B3C]/60 hover:text-[#C89B3C]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Explore" links={exploreLinks} />

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C89B3C]">Newsletter</h4>
          <p className="mt-3 text-sm text-slate-400">Get occasional updates on new launches and case studies.</p>
          <form className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2">
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full bg-transparent px-2 text-sm text-white outline-none placeholder:text-slate-500"
            />
            <button type="button" className="rounded-lg bg-[#C89B3C] p-2 text-white">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="relative flex flex-col gap-3 border-t border-white/10 bg-black/20 px-6 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <p>© {new Date().getFullYear()} Novique. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-[#C89B3C]">Privacy Policy</a>
          <a href="#" className="hover:text-[#C89B3C]">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C89B3C]">{title}</h4>
      <div className="mt-3 flex flex-col gap-2 text-sm text-slate-400">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className="transition hover:text-white">
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
