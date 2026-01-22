import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

export default function Contact() {
  return (
    <section id="contact" className="py-14">
      <div className="max-w-4xl mx-auto">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-sapphire-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
          Contact
        </motion.h2>
        <motion.form className="mt-6 soft-card p-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-sapphire-4">Name</label>
              <input type="text" className="mt-1 w-full rounded border border-sapphire-2 focus:border-sapphire-3 focus:ring-2 focus:ring-sapphire-3/30 outline-none px-3 py-2 bg-white" aria-label="Your name" />
            </div>
            <div>
              <label className="text-sm text-sapphire-4">Email</label>
              <input type="email" className="mt-1 w-full rounded border border-sapphire-2 focus:border-sapphire-3 focus:ring-2 focus:ring-sapphire-3/30 outline-none px-3 py-2 bg-white" aria-label="Your email" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-sapphire-4">Message</label>
            <textarea rows={5} className="mt-1 w-full rounded border border-sapphire-2 focus:border-sapphire-3 focus:ring-2 focus:ring-sapphire-3/30 outline-none px-3 py-2 bg-white" aria-label="Your message" />
          </div>
          <button type="submit" className="mt-6 px-5 py-2 rounded bg-sapphire-3 text-white hover:bg-sapphire-4 hover:text-sapphire-1 transition" aria-label="Send message">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
