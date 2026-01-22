import { motion } from 'framer-motion'
import { stagger, fadeIn } from '../utils/motion'

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'TailwindCSS', level: 95 },
  { name: 'Framer Motion', level: 80 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-14">
      <div className="max-w-5xl mx-auto">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-sapphire-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
          Skills
        </motion.h2>
        <motion.div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {skills.map((s, i) => (
            <motion.div key={s.name} variants={fadeIn} className="bg-sapphire-1 border border-sapphire-2 rounded-xl p-5 soft-shadow hover:scale-[1.02] transition-transform">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sapphire-4">{s.name}</span>
                <span className="text-sapphire-3">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 bg-sapphire-2/30 rounded">
                <motion.div className="h-2 bg-sapphire-3 rounded" initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.05 }} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
