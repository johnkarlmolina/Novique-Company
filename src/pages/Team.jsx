import { Facebook } from '../components/SocialIcons'

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1-.001-4.124 2.062 2.062 0 0 1 .001 4.124zM7.119 20.452H3.556V9h3.563v11.452z" />
    </svg>
  )
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 2h-3.2v13.6a2.9 2.9 0 1 1-2.6-2.88v-3.24a6.14 6.14 0 1 0 5.8 6.12V8.9a7.9 7.9 0 0 0 4.6 1.47V7.16A4.78 4.78 0 0 1 16.5 2z" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socials = [
  { Icon: LinkedinIcon, label: 'LinkedIn' },
  { Icon: Facebook, label: 'Facebook' },
  { Icon: TikTokIcon, label: 'TikTok' },
  { Icon: XIcon, label: 'X' },
]

const members = [
  {
    name: 'Daniel Baptista Legaspi',
    role: 'OIC @ Novique',
    photo: null,
  },
  {
    name: 'John Karl P. Molina',
    role: 'Lead Full-Stack Developer @ Novique',
    photo: '/Karl-avatar.jpg',
  },
  {
    name: 'Josh Henrick D. Cathcillar',
    role: 'Front-End Developer / BA, QA & Documentation Lead @ Novique',
    photo: '/Josh-avatar.jpg',
  },
  {
    name: 'John Patrick Dela Cruz',
    role: 'Front-End Developer / Project Manager @ Novique',
    photo: '/Patrick-avatar.jpg',
  },
]

export default function Team() {
  return (
    <section className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C89B3C]">Team</p>
        <h1 className="text-4xl font-bold text-slate-900">Builders Behind Novique</h1>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <article
            key={member.name}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-sm transition hover:shadow-lg"
          >
            {/* 📸 Photo - fills the entire card */}
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#C89B3C]/55 to-[#C89B3C]/15" />
            )}

            {/* Bottom scrim for text legibility */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Social icons - overlaid top-center */}
            <div className="absolute inset-x-0 top-3 flex justify-center gap-1.5">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="inline-flex rounded-full bg-black/40 p-1.5 text-white/90 backdrop-blur-sm transition hover:bg-[#C89B3C] hover:text-white"
                  aria-label={`${member.name} on ${label}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>

            {/* Name & role - overlaid bottom-left on the photo */}
            <div className="absolute inset-x-0 bottom-0 p-4">
              <h2 className="truncate text-sm font-bold text-white">{member.name}</h2>
              <p className="truncate text-xs font-medium text-[#E8C878]">{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
