import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { HiMenu, HiX, HiHome, HiUser, HiFolder, HiMail, HiOutlineViewGrid, HiTranslate, HiSun, HiMoon, HiNewspaper } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import gmailImg from "../assets/sidebarImg/gmail.png";
import githubImg from "../assets/sidebarImg/github.png";
import telegramImg from "../assets/sidebarImg/telegram.png";
import telefonImg from "../assets/sidebarImg/telefon.png";
import logo from "../assets/headerImg/logo.jpg";
import DownloadButton from "./DownloadButton";

const navLinks = [
  { path: "/", key: "nav.home", icon: HiHome },
  { path: "/aboutMe", key: "nav.about", icon: HiUser },
  { path: "/projects", key: "nav.projects", icon: HiFolder },
  { path: "/blog", key: "nav.blog", icon: HiNewspaper },
  { path: "/contact", key: "nav.contact", icon: HiMail }
];

const contacts = [
  {
    img: gmailImg,
    key: "contacts.gmail",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=asadbekumarov922@gmail.com",
  },
  {
    img: githubImg,
    key: "contacts.github",
    link: "https://github.com/asadbekumarov",
  },
  {
    img: telegramImg,
    key: "contacts.telegram",
    link: "https://t.me/asad_umarov",
  },
  {
    img: telefonImg,
    key: "contacts.phone",
    link: "tel:+998949011202",
  },
];

function Header({ setSidebarToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleClickOutside = (event) => {
      if (!event.target.closest(".lang-switcher")) {
        setIsLangDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentLang = i18n.language === "uz" ? "UZ" : "EN";

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

  const dropdownVariants = {
    closed: { opacity: 0, y: 10, scale: 0.95, pointerEvents: "none" },
    open: { opacity: 1, y: 0, scale: 1, pointerEvents: "auto" },
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
      className={`glass-effect transition-all duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
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
            {t('header.name')}
          </motion.span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {navLinks.map(({ path, key, icon: Icon }, index) => (
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
                  <span className="text-sm">{t(key)}</span>
                </NavLink>
              </motion.li>
            ))}
          </ul>

          <div className="h-8 w-px bg-border" />

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-main hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
          </motion.button>

          {/* Custom Language Switcher */}
          <div className="relative lang-switcher">
            <motion.button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border hover:border-primary transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <HiTranslate className="text-primary w-4 h-4" />
              <span className="text-sm font-medium text-main uppercase" style={{ fontFamily: '"Fira Code", monospace' }}>
                {currentLang}
              </span>
              <motion.div
                animate={{ rotate: isLangDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-3 h-3 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isLangDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="absolute top-full right-0 mt-2 w-24 bg-surface border border-border rounded-lg shadow-xl overflow-hidden z-50 backdrop-blur-xl"
                >
                  <div className="flex flex-col py-1">
                    {["uz", "en", "ru"].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => changeLanguage(lang)}
                        className={`px-4 py-2 text-sm text-left hover:bg-primary hover:bg-opacity-10 transition-colors ${
                          i18n.language === lang ? "text-primary font-bold" : "text-main"
                        }`}
                        style={{ fontFamily: '"Fira Code", monospace' }}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <DownloadButton />
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-main hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>

          {/* Mobile Language Switcher */}
          <div className="relative lang-switcher">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-2 px-2 py-1 rounded-lg bg-surface border border-border"
            >
              <HiTranslate className="text-primary w-4 h-4" />
              <span className="text-xs font-medium text-main uppercase" style={{ fontFamily: '"Fira Code", monospace' }}>
                {currentLang}
              </span>
            </button>
            <AnimatePresence>
              {isLangDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="absolute top-full right-0 mt-2 w-20 bg-surface border border-border rounded-lg shadow-xl overflow-hidden z-50"
                >
                  <div className="flex flex-col py-1">
                    {["uz", "en", "ru"].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => changeLanguage(lang)}
                        className={`px-3 py-2 text-xs text-left hover:bg-primary hover:bg-opacity-10 transition-colors ${
                          i18n.language === lang ? "text-primary font-bold" : "text-main"
                        }`}
                        style={{ fontFamily: '"Fira Code", monospace' }}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="p-2 rounded-lg text-main hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all duration-300"
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
              {navLinks.map(({ path, key, icon: Icon }, index) => (
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
                    <span>{t(key)}</span>
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
                {contacts.map(({ img, key, link }, i) => (
                  <motion.a
                    key={i}
                    href={link}
                    target={link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-surface border border-border hover:border-primary transition-all duration-300"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={img} alt={t(key)} className="w-8 h-8 object-contain" />
                    <span 
                      className="text-xs text-muted"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {t(key)}
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