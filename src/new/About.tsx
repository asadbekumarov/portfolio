import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

export default function About() {
  return (
    <section id="about" className="py-14">
      <div className="max-w-5xl mx-auto">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-sapphire-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
          About
        </motion.h2>
        <motion.div
          className="mt-6 bg-sapphire-2/10 rounded-xl p-6 soft-shadow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-sapphire-4/90">
            I craft accessible, adaptive interfaces with clean architecture and solid testing. My toolkit includes React, TypeScript, TailwindCSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
