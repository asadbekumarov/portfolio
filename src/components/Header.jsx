import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  HiMenu,
  HiX,
  HiHome,
  HiUser,
  HiFolder,
  HiMail,
  HiTranslate,
  HiSun,
  HiMoon,
  HiNewspaper,
  HiDownload,
  HiMenuAlt1,
} from "react-icons/hi";
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
  { path: "/contact", key: "nav.contact", icon: HiMail },
];

const contacts = [
  {
    img: gmailImg,
    key: "contacts.gmail",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=asadbekumarov1202@gmail.com",
    hoverColor: "hover:border-red-400/50 hover:bg-red-500/5",
    colorDot: "bg-red-400",
  },
  {
    img: githubImg,
    key: "contacts.github",
    link: "https://github.com/asadbekumarov",
    hoverColor: "hover:border-violet-400/50 hover:bg-violet-500/5",
    colorDot: "bg-violet-400",
  },
  {
    img: telegramImg,
    key: "contacts.telegram",
    link: "https://t.me/asad_umarov",
    hoverColor: "hover:border-sky-400/50 hover:bg-sky-500/5",
    colorDot: "bg-sky-400",
  },
  {
    img: telefonImg,
    key: "contacts.phone",
    link: "tel:+998772687865",
    hoverColor: "hover:border-emerald-400/50 hover:bg-emerald-500/5",
    colorDot: "bg-emerald-500",
  },
];

const LANGS = ["uz", "en", "ru"];
const FLAGS = { uz: "🇺🇿", en: "🇬🇧", ru: "🇷🇺" };

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const onClickOutside = (e) => {
      if (!e.target.closest(".lang-switcher")) setIsLangOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  /* ── close mobile menu on route change ── */
  const handleNavClick = () => setIsMenuOpen(false);

  const currentLang = i18n.language?.slice(0, 2).toUpperCase() ?? "UZ";

  /* ── desktop nav link classes ── */
  const linkClasses = ({ isActive }) =>
    `relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
      isActive
        ? "text-primary bg-primary/10 border border-primary/20 shadow-sm shadow-primary/10"
        : "text-muted hover:text-main hover:bg-surface border border-transparent"
    }`;

  /* ── animation variants ── */
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.28, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.28, ease: "easeInOut" },
    },
  };

  const dropdownVariants = {
    closed: { opacity: 0, y: -8, scale: 0.95, pointerEvents: "none" },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      pointerEvents: "auto",
      transition: { duration: 0.18, ease: "easeOut" },
    },
  };

  const itemVariants = {
    closed: { x: -16, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.07, duration: 0.28 },
    }),
  };

  return (
    <motion.header
      className={`glass-effect transition-all duration-300 w-full z-50 ${
        isScrolled
          ? "shadow-[0_4px_24px_-4px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)]"
          : ""
      }`}
    >
      <div className="max-w-[1300px] mx-auto w-full relative flex justify-between items-center gap-2 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8 py-[18px]">
        {/* ── Logo ── */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.08, rotate: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-400" />
            <img
              src={logo}
              alt="Logo"
              className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl border-2 border-primary/40 object-cover group-hover:border-primary transition-colors duration-300"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background animate-pulse" />
          </motion.div>
          <span
            className="text-xl sm:text-2xl font-black text-main group-hover:text-primary transition-colors duration-300 hidden sm:block tracking-tight"
            style={{ fontFamily: '"Fira Code", monospace' }}
          >
            {t("header.name")}
          </span>
        </NavLink>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-5">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ path, key, icon: Icon }, index) => (
              <motion.li
                key={path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07, duration: 0.35 }}
              >
                <NavLink
                  to={path}
                  className={linkClasses}
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {({ isActive }) => (
                    <>
                      <Icon className="w-4 h-4" />
                      <span>{t(key)}</span>
                      {isActive && (
                        <motion.span
                          layoutId="active-dot"
                          className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-3 h-0.5 bg-primary rounded-full"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          <div className="h-7 w-px bg-border" />

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl text-muted hover:text-primary hover:bg-primary/8 border border-transparent hover:border-primary/20 transition-all duration-300 relative group"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ rotate: -30, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 30, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <HiSun size={19} /> : <HiMoon size={19} />}
              </motion.div>
            </AnimatePresence>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-surface border border-border px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-muted"> 
              {theme === "dark" ? "Light mode" : "Dark mode"} 
            </span> 
          </motion.button>

          {/* Language Switcher */}
          <div className="relative lang-switcher">
            <motion.button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface border border-border hover:border-primary/40 transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm">{FLAGS[i18n.language?.slice(0, 2)]}</span>
              <span
                className="text-xs font-black text-main uppercase"
                style={{ fontFamily: '"Fira Code", monospace' }}
              >
                {currentLang}
              </span>
              <motion.svg
                className="w-3 h-3 text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isLangOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </motion.button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="absolute top-full right-0 mt-2 w-24 bg-surface border border-border rounded-2xl shadow-xl overflow-hidden z-50 backdrop-blur-xl"
                >
                  {LANGS.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className={`w-full px-4 py-2.5 text-sm text-left font-bold transition-colors hover:bg-primary/8 ${
                        i18n.language === lang
                          ? "text-primary bg-primary/5"
                          : "text-muted hover:text-main"
                      }`}
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {FLAGS[lang]} {lang.toUpperCase()}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <DownloadButton />
        </nav>

        {/* ── Mobile Controls ── */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:hidden shrink-0">
          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-muted hover:text-primary hover:bg-primary/8 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>

          {/* Lang */}
          <div className="relative lang-switcher">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-surface border border-border text-xs font-black text-main uppercase"
              style={{ fontFamily: '"Fira Code", monospace' }}
            >
              <HiTranslate className="text-primary w-3.5 h-3.5" />
              {currentLang}
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="absolute top-full right-0 mt-2 w-20 bg-surface border border-border rounded-xl shadow-xl overflow-hidden z-50"
                >
                  {LANGS.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className={`w-full px-3 py-2 text-xs text-left font-bold transition-colors hover:bg-primary/8 ${
                        i18n.language === lang ? "text-primary" : "text-muted"
                      }`}
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hamburger */}
          <motion.button
            className="p-2 rounded-xl text-muted hover:text-primary hover:bg-primary/8 border border-transparent hover:border-primary/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.93 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? "close" : "open"}
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden border-t border-border bg-surface/95 backdrop-blur-xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* User Card */}
            <motion.div
              className="mx-4 mt-4 mb-3 p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-indigo-500/10 to-primary/5 border border-primary/15 flex items-center gap-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-indigo-500 rounded-xl blur-sm opacity-40" />
                <img
                  src={logo}
                  alt="Avatar"
                  className="relative w-12 h-12 rounded-xl object-cover border-2 border-surface"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-surface" />
              </div>
              <div className="min-w-0">
                <p
                  className="text-sm font-black text-main tracking-tight truncate"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {t("header.name")}
                </p>
                <p
                  className="text-[11px] font-bold text-primary uppercase tracking-wider truncate"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {t("sidebar.info.directionValue")}
                </p>
                <p className="text-[9px] font-mono text-muted/50 uppercase tracking-widest mt-0.5"> 
                  // web developer 
                </p> 
              </div>
              <div className="ml-auto flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black text-emerald-600 uppercase tracking-wider">
                  {t("sidebar.openForProjects")}
                </span>
              </div>
            </motion.div>

            {/* Nav Links */}
            <ul className="flex flex-col px-3 pb-2">
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
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-300 mb-0.5 ${
                        isActive
                          ? "text-primary bg-primary/10 border border-primary/15"
                          : "text-muted hover:text-main hover:bg-background/60 border border-transparent"
                      }`
                    }
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {({ isActive }) => (
                      <>
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span>{t(key)}</span>
                        {isActive && (
                          <span className="ml-auto text-[9px] font-black text-primary/60 font-mono bg-primary/10 px-2 py-0.5 rounded-full"> 
                            ● 
                          </span> 
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            {/* Contacts + Download */}
            <motion.div
              className="px-4 py-4 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <p
                className="text-[10px] font-black text-muted uppercase tracking-[0.15em] mb-3 px-1"
                style={{ fontFamily: '"Fira Code", monospace' }}
              >
                Contacts
              </p>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {contacts.map(({ img, key, link, hoverColor, colorDot }, i) => (
                  <motion.a
                    key={i}
                    href={link}
                    target={link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-background border border-border transition-all duration-300 ${hoverColor}`}
                    whileHover={{ y: -3, scale: 1.04 }}
                    whileTap={{ scale: 0.94 }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${colorDot} mb-0.5`} />
                    <img
                      src={img}
                      alt={t(key)}
                      className="w-7 h-7 object-contain"
                    />
                    <span
                      className="text-[9px] font-bold text-muted uppercase tracking-wider"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {t(key)}
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="border-t border-border/50 pt-3 mt-1 flex justify-center"> 
                <DownloadButton /> 
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
