import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/#about', label: 'About' },
    { to: '/#skills', label: 'Skills' },
    { to: '/#projects', label: 'Projects' },
    { to: '/#contact', label: 'Contact' }
  ]
  return (
    <header className="bg-sapphire-4 text-sapphire-1 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <NavLink to="/" className="font-semibold text-lg">
            <span className="gradient-logo">Asadbek Umarov</span>
          </NavLink>
        </motion.div>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-sapphire-2' : 'text-sapphire-1 hover:text-sapphire-2'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
