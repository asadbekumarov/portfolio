import { motion } from 'framer-motion'
import { stagger, fadeIn } from '../utils/motion'

const projects = [
  {
    title: 'CloudPlay',
    desc: 'Cloud gaming dashboard with reactive charts and device handoff.',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    live: 'https://cloudplay.example.com'
  },
  {
    title: 'AutoQuiz',
    desc: 'Assessment builder with question bank, roles, and analytics.',
    tech: ['React', 'TailwindCSS'],
    live: 'https://autoquiz.example.com'
  },
  {
    title: 'Portfolio v3',
    desc: 'A11y-first personal site with motion and design tokens.',
    tech: ['React', 'TypeScript', 'Framer Motion'],
    live: 'https://portfolio.example.com'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-14">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-sapphire-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
          Projects
        </motion.h2>
        <motion.div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {projects.map((p) => (
            <motion.article key={p.title} variants={fadeIn} className="bg-white border border-sapphire-2 rounded-xl p-6 soft-shadow hover:-translate-y-1 hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-sapphire-4">{p.title}</h3>
              <p className="mt-2 text-sapphire-4/80">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-sapphire-2/20 text-sapphire-3">{t}</span>
                ))}
              </div>
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 rounded bg-sapphire-3 text-white hover:bg-sapphire-4 hover:text-sapphire-1 transition" aria-label={`Open ${p.title} live`}>
                Open Live
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
