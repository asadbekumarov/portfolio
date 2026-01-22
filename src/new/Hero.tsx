import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

export default function Hero() {
  return (
    <section className="min-h-[70vh] md:min-h-screen flex items-center" id="hero">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-sapphire-4 tracking-tight"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Building delightful, performant web experiences
        </motion.h1>
        <motion.p
          className="mt-4 text-base md:text-lg text-sapphire-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Frontend developer focusing on modern React, TypeScript, and design systems.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <a
            href="#projects"
            className="inline-block px-6 py-3 rounded-lg bg-sapphire-3 text-white shadow-md hover:bg-sapphire-4 hover:text-sapphire-1 transition-colors"
            aria-label="View projects"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}
