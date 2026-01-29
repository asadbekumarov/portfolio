"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { HiX } from "react-icons/hi";
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
const socials = [
  { icon: Mail, link: "mailto:asadbekumarov922@gmail.com", label: "Email" },
  { icon: Phone, link: "tel:+998772687865", label: "Phone" },
  { icon: Github, link: "https://github.com/asadbekumarov", label: "GitHub" },
  { icon: Send, link: "https://t.me/asad_umarov", label: "Telegram" },
];
const stats = [
  { icon: Briefcase, value: "4+", label: "Loyihalar" },
  { icon: Users, value: "2+", label: "Mijozlar" },
  { icon: Calendar, value: "1", label: "Yil tajriba" },
];
const info = [
  { icon: MapPin, label: "Joylashuv", value: "Toshkent, O‘zbekiston" },
  { icon: Code, label: "Yo‘nalish", value: "Frontend Developer" },
  { icon: Clock, label: "Ish vaqti", value: "24/7 Online" },
  { icon: Award, label: "Daraja", value: "Junior+" },
];
export default function Sidebar({ className, isOpen, setIsOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        w-[85vw] lg:w-full max-w-[360px]
        rounded
        border border-border
        ${isScrolled ? "bg-white/80 dark:bg-black/50 shadow-lg" : "bg-white/70 dark:bg-black/40"}
        backdrop-blur-xl
        p-6
        space-y-6
        transition-all duration-300
        ${isOpen ? 'fixed left-0 top-[72px] z-50 h-[calc(100vh-72px)] lg:static' : 'hidden lg:block lg:sticky lg:top-24'}
        ${className || ""}
      `}
    >
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/20 text-white hover:bg-black/40 transition-colors"
          aria-label="Close sidebar"
        >
          <HiX size={24} />
        </button>
      )}
       <div className="flex flex-col items-center text-center">
        <motion.div
          whileHover={{ scale: 1.08, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="
            w-28 h-28
            rounded-2xl
            bg-gradient-to-br from-sky-500 to-indigo-600
            flex items-center justify-center
            text-white text-3xl font-bold
          "
        >
          AU
        </motion.div>
        <h2 className="mt-4 text-xl font-bold">
          Umarov Asadbek
        </h2>
        <p className="text-sm text-muted-foreground">
          Frontend Developer · UI Engineer
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            className="
              rounded-xl
              border border-border
              bg-background
              p-3
              text-center
            "
          >
            <Icon className="mx-auto mb-1 text-primary" size={16} />
            <div className="font-bold text-sm">{value}</div>
            <div className="text-[11px] text-muted-foreground">
              {label}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="space-y-3">
        {info.map(({ icon: Icon, label, value }, i) => (
          <div
            key={i}
            className="
              flex items-start gap-3
              rounded-xl
              border border-border
              bg-background
              p-3
            "
          >
            <Icon size={16} className="text-primary mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground">
                {label}
              </p>
              <p className="text-sm font-medium">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="
          rounded-xl
          border border-emerald-500/30
          bg-emerald-500/10
          p-3
          flex items-center justify-center gap-2
        "
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-sm text-emerald-600 font-medium">
          Yangi loyihalar uchun ochiq
        </span>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {socials.map(({ icon: Icon, link, label }, i) => (
          <motion.a
            key={i}
            href={link}
            target="_blank"
            title={label}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="
              h-12
              rounded-xl
              border border-border
              flex items-center justify-center
              hover:bg-primary hover:text-white
              transition-colors
            "
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </div>
    </motion.section>
    {isOpen && (
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
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
