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

  /* ── positioning: scroll yo‘q — kontent ixcham, overflow yashirin ── */
  const sectionCls = isOpen
    ? "fixed left-0 z-50 w-[min(calc(100vw-1rem),320px)] max-w-[320px] overflow-hidden shadow-2xl " +
      "top-[var(--header-height)] h-[calc(100dvh-var(--header-height))] max-h-[calc(100dvh-var(--header-height))] " +
      "pb-[env(safe-area-inset-bottom,0px)]"
    : "hidden lg:flex lg:flex-col lg:fixed lg:left-0 lg:z-40 lg:w-[320px] lg:max-w-[320px] " +
      "lg:top-[var(--header-height)] lg:h-[calc(100dvh-var(--header-height))] lg:max-h-[calc(100dvh-var(--header-height))] " +
      "lg:overflow-hidden lg:min-h-0";

  return (
    <>
      {/* ── Spacer: keeps main content out from under the fixed sidebar ── */}
      <div
        className="hidden lg:block lg:w-[320px] lg:flex-shrink-0"
        aria-hidden="true"
      />

      {/* ── Sidebar panel ── */}
      <section
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

        <div className="flex h-full min-h-0 flex-col gap-2 overflow-hidden px-3 py-3 sm:px-4">
          {/* ────────────────── Profile ────────────────── */}
          <div className="flex flex-col items-center text-center shrink-0">
            <motion.div
              whileHover={{ scale: 1.03, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative group mb-1.5"
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary to-indigo-500
                              rounded-xl blur-sm opacity-25 group-hover:opacity-45
                              transition duration-500 pointer-events-none"
              />
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 border-surface overflow-hidden shadow-md">
                <img
                  src={logo}
                  alt="Asadbek Umarov"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full
                              bg-emerald-500 border-2 border-surface"
              >
                <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-50 animate-ping" />
              </div>
            </motion.div>

            <h2
              className="text-sm sm:text-base font-black tracking-tight text-main leading-tight"
              style={{ fontFamily: '"Fira Code", monospace' }}
            >
              {t("header.name")}
            </h2>

            <div className="inline-flex items-center gap-1 mt-1 py-0.5 px-2 rounded-full bg-primary/10 border border-primary/20 max-w-full">
              <Code size={10} className="text-primary shrink-0" />
              <p className="text-[9px] sm:text-[10px] font-bold text-primary uppercase tracking-wide truncate">
                {t("sidebar.info.directionValue")}
              </p>
            </div>
          </div>

          {/* ────────────────── Stats ────────────────── */}
          <div className="grid grid-cols-3 gap-1.5 shrink-0">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div
                key={i}
                className="group relative rounded-xl border border-border bg-background/60 px-1 py-2 text-center hover:border-primary/40 transition-colors"
              >
                <div className="flex justify-center mb-0.5">
                  <Icon className="text-primary w-3.5 h-3.5" strokeWidth={2} />
                </div>
                <div className="font-black text-sm text-main leading-none">{value}</div>
                <div className="mt-0.5 text-[8px] font-bold text-muted uppercase leading-tight px-0.5">
                  {t(label)}
                </div>
              </div>
            ))}
          </div>

          {/* ────────────────── Info List ────────────────── */}
          <div className="space-y-0.5 shrink-0">
            {info.map(({ icon: Icon, label, value }, i) => (
              <div
                key={i}
                className="group flex items-center gap-2 px-1 py-1 rounded-lg hover:bg-primary/5 transition-colors cursor-default"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-md bg-background border border-border flex items-center justify-center text-muted group-hover:text-primary group-hover:border-primary/30">
                  <Icon size={12} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[8px] font-black text-muted uppercase tracking-wide leading-none mb-0.5">
                    {t(label)}
                  </p>
                  <p
                    className="text-[11px] sm:text-xs font-bold text-main truncate leading-snug"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {t(value)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ────────────────── Skills ────────────────── */}
          <div className="rounded-xl border border-border bg-background/50 p-2 shrink-0">
            <p className="text-[8px] font-black text-muted uppercase tracking-widest mb-1.5">
              Top Skills
            </p>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-1.5 py-0.5 rounded-md border border-border bg-surface text-[9px] sm:text-[10px] font-bold text-muted leading-tight"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ────────────────── Open for Projects ────────────────── */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="relative group rounded-xl p-px bg-gradient-to-r from-emerald-500/60 via-teal-400/40 to-emerald-500/60 shrink-0"
          >
            <div className="bg-surface rounded-[11px] py-1.5 px-2 flex items-center justify-center gap-1.5">
              <div className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </div>
              <span
                className="text-[10px] sm:text-xs font-black text-emerald-600 text-center leading-tight"
                style={{ fontFamily: '"Fira Code", monospace' }}
              >
                {t("sidebar.openForProjects")}
              </span>
            </div>
          </motion.div>

          {/* ────────────────── Social Links — faqat ikonka (joy tejaymiz) ────────────────── */}
          <div className="grid grid-cols-4 gap-1.5 shrink-0">
            {socials.map(({ icon: Icon, link, label }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                aria-label={label}
                className="flex items-center justify-center py-2 rounded-xl border border-border bg-background/50 text-muted hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </section>

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
