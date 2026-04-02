import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import {
  Mail,
  Phone,
  Github,
  Send,
  MapPin,
  Code,
  Award,
  Clock,
  Briefcase,
  Users,
  Calendar,
} from "lucide-react";
import logo from "../assets/headerImg/logo.jpg";

const socials = [
  { icon: Mail, link: "mailto:asadbekumarov922@gmail.com", label: "Email" },
  { icon: Phone, link: "tel:+998772687865", label: "Phone" },
  { icon: Github, link: "https://github.com/asadbekumarov", label: "GitHub" },
  { icon: Send, link: "https://t.me/asad_umarov", label: "Telegram" },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React Native",
  "JavaScript",
];

export default function Sidebar({ className, isOpen, setIsOpen }) {
  const { t } = useTranslation();

  const stats = [
    { icon: Briefcase, value: "4+", label: "sidebar.stats.projects" },
    { icon: Users, value: "2+", label: "sidebar.stats.clients" },
    { icon: Calendar, value: "1", label: "sidebar.stats.experience" },
  ];

  const info = [
    {
      icon: MapPin,
      label: "sidebar.info.location",
      value: "sidebar.info.locationValue",
    },
    {
      icon: Code,
      label: "sidebar.info.direction",
      value: "sidebar.info.directionValue",
    },
    {
      icon: Clock,
      label: "sidebar.info.workingHours",
      value: "sidebar.info.workingHoursValue",
    },
    {
      icon: Award,
      label: "sidebar.info.level",
      value: "sidebar.info.levelValue",
    },
  ];

  /* ── positioning class ───────────────────────────────────── */
  const sectionCls = isOpen
    ? /* mobile overlay */
      "fixed left-0 top-[72px] z-50 w-[85vw] max-w-[360px] h-[calc(100vh-72px)] overflow-y-auto shadow-2xl"
    : /* desktop fixed panel */
      "hidden lg:block lg:fixed lg:left-0 lg:top-[72px] lg:bottom-0 lg:w-[360px] lg:overflow-hidden";

  return (
    <>
      {/* ── Spacer: keeps main content out from under the fixed sidebar ── */}
      <div
        className="hidden lg:block lg:w-[360px] lg:flex-shrink-0"
        aria-hidden="true"
      />

      {/* ── Sidebar panel ── */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`${sectionCls} bg-surface border-r border-border ${className ?? ""}`}
      >
        {/* Close — mobile only */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden absolute top-4 right-4 z-20 p-2 rounded-xl
                       bg-background border border-border text-muted
                       hover:text-primary hover:border-primary/30 transition-all"
            aria-label="Close sidebar"
          >
            <HiX size={18} />
          </button>
        )}

        <div className="px-5 pt-10 pb-5 space-y-5">
          {/* ────────────────── Profile ────────────────── */}
          <div className="flex flex-col items-center text-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative group mb-3"
            >
              {/* Glow ring */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-primary to-indigo-500
                              rounded-2xl blur-sm opacity-30 group-hover:opacity-55
                              transition duration-500 pointer-events-none"
              />
              {/* Avatar */}
              <div className="relative w-20 h-20 rounded-2xl border-[3px] border-surface overflow-hidden shadow-lg">
                <img
                  src={logo}
                  alt="Asadbek Umarov"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Online dot */}
              <div
                className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full
                              bg-emerald-500 border-2 border-surface shadow"
              >
                <span
                  className="absolute inset-0 rounded-full bg-emerald-400
                                 opacity-60 animate-ping"
                />
              </div>
            </motion.div>

            <h2
              className="text-lg font-black tracking-tight text-main"
              style={{ fontFamily: '"Fira Code", monospace' }}
            >
              {t("header.name")}
            </h2>

            <div
              className="inline-flex items-center gap-1.5 mt-1.5 py-1 px-3
                            rounded-full bg-primary/10 border border-primary/20"
            >
              <Code size={11} className="text-primary" />
              <p className="text-[11px] font-bold text-primary uppercase tracking-wider">
                {t("sidebar.info.directionValue")}
              </p>
            </div>
          </div>

          {/* ────────────────── Stats ────────────────── */}
          <div className="grid grid-cols-3 gap-2">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="group relative rounded-2xl border border-border
                           bg-background/60 p-3 text-center overflow-hidden
                           hover:border-primary/40 transition-all duration-300"
              >
                <div
                  className="absolute inset-0 bg-primary/5 opacity-0
                                group-hover:opacity-100 transition-opacity
                                pointer-events-none rounded-2xl"
                />
                <div className="relative">
                  <div className="flex justify-center mb-1">
                    <Icon
                      className="text-primary group-hover:scale-110 transition-transform"
                      size={16}
                    />
                  </div>
                  <div className="font-black text-lg text-main leading-none">
                    {value}
                  </div>
                  <div
                    className="mt-0.5 text-[9px] font-bold text-muted
                                  uppercase tracking-wider leading-tight"
                  >
                    {t(label)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ────────────────── Info List ────────────────── */}
          <div className="space-y-0.5">
            {info.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 + 0.2 }}
                whileHover={{ x: 3 }}
                className="group flex items-center gap-3 px-2.5 py-2
                           rounded-xl hover:bg-primary/5 transition-all
                           duration-200 cursor-default"
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-lg
                                bg-background border border-border
                                flex items-center justify-center text-muted
                                group-hover:text-primary group-hover:border-primary/30
                                group-hover:bg-primary/5 transition-all duration-300"
                >
                  <Icon size={14} />
                </div>
                <div className="min-w-0">
                  <p
                    className="text-[9px] font-black text-muted uppercase
                                tracking-[0.12em] leading-none mb-0.5"
                  >
                    {t(label)}
                  </p>
                  <p
                    className="text-sm font-bold text-main truncate leading-tight"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {t(value)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ────────────────── Skills ────────────────── */}
          <div className="rounded-2xl border border-border bg-background/50 p-3.5">
            <p
              className="text-[9px] font-black text-muted uppercase
                          tracking-[0.15em] mb-3"
            >
              Top Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl border border-border
                             bg-surface text-xs font-bold text-muted
                             hover:border-primary/40 hover:text-primary
                             hover:bg-primary/5 transition-all duration-200"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ────────────────── Open for Projects ────────────────── */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="relative group rounded-2xl p-[1.5px]
                       bg-gradient-to-r from-emerald-500/60 via-teal-400/40
                       to-emerald-500/60 overflow-hidden"
          >
            <div
              className="bg-surface rounded-[calc(1rem-1.5px)] py-2.5 px-4
                            flex items-center justify-center gap-2
                            group-hover:bg-emerald-500/5 transition-colors duration-300"
            >
              <div className="relative flex h-2 w-2 flex-shrink-0">
                <span
                  className="animate-ping absolute inline-flex h-full w-full
                                 rounded-full bg-emerald-400 opacity-75"
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2
                                 bg-emerald-500"
                />
              </div>
              <span
                className="text-sm font-black text-emerald-600"
                style={{ fontFamily: '"Fira Code", monospace' }}
              >
                {t("sidebar.openForProjects")}
              </span>
            </div>
          </motion.div>

          {/* ────────────────── Social Links (one color) ────────────────── */}
          <div className="grid grid-cols-4 gap-2">
            {socials.map(({ icon: Icon, link, label }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: i * 0.07 + 0.45,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.88 }}
                className="flex flex-col items-center justify-center gap-1
                           py-2.5 rounded-2xl border border-border
                           bg-background/50 text-muted
                           hover:bg-primary/10 hover:border-primary/40
                           hover:text-primary transition-all duration-300"
              >
                <Icon size={17} />
                <span className="text-[9px] font-black uppercase tracking-wider">
                  {label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}
    </>
  );
}

Sidebar.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
