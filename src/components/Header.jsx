import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { HiMenu, HiX, HiHome, HiUser, HiFolder, HiMail, HiOutlineViewGrid } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import gmailImg from "../assets/sidebarImg/gmail.png";
import githubImg from "../assets/sidebarImg/github.png";
import telegramImg from "../assets/sidebarImg/telegram.png";
import telefonImg from "../assets/sidebarImg/telefon.png";
import logo from "../assets/headerImg/logo.jpg";
import DownloadButton from "./DownloadButton";

const navLinks = [
  { path: "/", label: "Bosh sahifa", icon: HiHome },
  { path: "/aboutMe", label: "Haqida", icon: HiUser },
  { path: "/projects", label: "Loyihalar", icon: HiFolder },
  { path: "/contact", label: "Bog'lanish", icon: HiMail }
];

const contacts = [
  {
    img: gmailImg,
    title: "Gmail",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=asadbekumarov922@gmail.com",
  },
  {
    img: githubImg,
    title: "GitHub",
    link: "https://github.com/asadbekumarov",
  },
  {
    img: telegramImg,
    title: "Telegram",
    link: "https://t.me/asad_umarov",
  },
  {
    img: telefonImg,
    title: "Telefon",
    link: "tel:+998949011202",
  },
];

function Header({ setSidebarToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = ({ isActive }) =>
    `relative flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      isActive
        ? "text-primary bg-primary bg-opacity-10"
        : "text-main hover:text-primary hover:bg-primary hover:bg-opacity-5"
    }`;

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    closed: { x: -15, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.08, duration: 0.3 },
    }),
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "bg-surface bg-opacity-95 shadow-lg" : "bg-surface bg-opacity-90"
      } border-b border-border`}
    >
      <div className=" relative flex justify-between items-center px-4 sm:px-6 lg:px-8 py-[19px]">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <motion.img
            src={logo}
            alt="Logo"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-primary object-cover transition-all duration-300 group-hover:border-primary-hover group-hover:scale-105"
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="text-xl sm:text-2xl font-bold text-main group-hover:text-primary transition-colors duration-300 hidden sm:block"
            style={{ fontFamily: '"Fira Code", monospace' }}
          >
            Umarov Asadbek
          </motion.span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {navLinks.map(({ path, label, icon: Icon }, index) => (
              <motion.li
                key={path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <NavLink 
                  to={path} 
                  className={linkClasses}
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{label}</span>
                </NavLink>
              </motion.li>
            ))}
          </ul>

          <div className="h-8 w-px bg-border" />

          <DownloadButton />
        </nav>

         {/* Sidebar Toggle Button */}
        <motion.button
          className="lg:hidden p-2 rounded-lg text-main hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-300"
          onClick={() => setSidebarToggle(prev => !prev)}
          aria-label="Toggle sidebar"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HiOutlineViewGrid size={24} />
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg text-main hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? "close" : "open"}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden border-t border-border bg-surface"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map(({ path, label, icon: Icon }, index) => (
                <motion.li
                  key={path}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  custom={index}
                >
                  <NavLink
                    to={path}
                    className="flex items-center gap-3 px-6 py-3 text-muted hover:text-primary hover:bg-primary hover:bg-opacity-5 transition-all duration-300"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            {/* Contacts */}
            <motion.div
              className="px-6 py-4 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="grid grid-cols-4 gap-3 mb-4">
                {contacts.map(({ img, title, link }, i) => (
                  <motion.a
                    key={i}
                    href={link}
                    target={link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-surface border border-border hover:border-primary transition-all duration-300"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={img} alt={title} className="w-8 h-8 object-contain" />
                    <span 
                      className="text-xs text-muted"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {title}
                    </span>
                  </motion.a>
                ))}
              </div>

              <DownloadButton />
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

Header.propTypes = {
  setSidebarToggle: PropTypes.func.isRequired,
};

export default Header;