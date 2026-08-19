import { Facebook } from '../components/SocialIcons'

const members = [
  {
    name: 'Daniel Baptista Legaspi',
    role: 'OIC',
    bio: 'N/A',
    tags: [],
    photo: null,
    center: true,
  },
  {
    name: 'John Karl P. Molina',
    role: 'Lead Full-Stack Developer',
    bio: 'N/A',
    tags: ['TypeScript', 'Node', 'Express Js'],
    photo: '/Karl-avatar.jpg',
  },
  {
    name: 'Josh Henrick D. Cathcillar',
    role: 'Front-End Developer / BA, QA & Documunentation Lead',
    bio: 'N/A',
    tags: ['JAVA', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'React Native', 'ReactJS', 'JavaScript', 'C', ' C++', 'C#','PHP','Python'],
    photo: '/Josh-avatar.jpg',
  },
  {
    name: 'John Patrick Dela Cruz',
    role: 'Front-End Developer / Project Manager',
    bio: 'N/A',
    tags: ['Html', 'Css', 'Php'],
    photo: null,
  },
]

export default function Team() {
  return (
    <section className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C89B3C]">Team</p>
        <h1 className="text-4xl font-bold text-slate-900">Builders Behind Novique</h1>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        {members.map((member) => (
          <article
            key={member.name}
            className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${
              member.center ? 'md:col-start-2 md:row-start-1' : 'md:row-start-2'
            }`}
          >
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="mb-4 h-14 w-14 rounded-full object-cover"
              />
            ) : (
              <div className="mb-4 h-14 w-14 rounded-full bg-gradient-to-br from-[#C89B3C]/55 to-[#C89B3C]/15" />
            )}
            <h2 className="text-lg font-bold text-slate-900">{member.name}</h2>
            <p className="text-sm font-medium text-[#C89B3C]">{member.role}</p>
            <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-[#C89B3C]">
              {member.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[#C89B3C]/35 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-2 text-slate-500">
              <a href="#" className="rounded-md border border-slate-200 p-2 hover:border-[#C89B3C] hover:text-[#C89B3C]" aria-label={`${member.name} on Facebook`}>
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
