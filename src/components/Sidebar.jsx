  // import { motion, AnimatePresence } from "framer-motion";
  // import { useState, useEffect } from "react";
  // import {
  //   Mail,
  //   Phone,
  //   Github,
  //   Send,
  //   Briefcase,
  //   Users,
  //   Calendar,
  //   ChevronLeft,
  //   ChevronRight,
  //   MapPin,
  //   Code,
  //   Award,
  //   Clock,
  // } from "lucide-react";

  // const socialMedias = [
  //   { icon: Mail, link: "mailto:asadbekumarov922@gmail.com", alt: "Gmail" },
  //   { icon: Phone, link: "tel:+998949011202", alt: "Telefon" },
  //   { icon: Github, link: "https://github.com/asadbekumarov", alt: "GitHub" },
  //   { icon: Send, link: "https://t.me/asad_umarov", alt: "Telegram" },
  // ];

  // const stats = [
  //   { icon: Briefcase, value: "24", label: "Loyihalar" },
  //   { icon: Users, value: "12", label: "Mijozlar" },
  //   { icon: Calendar, value: "3+", label: "Yillik" },
  // ];

  // const info = [
  //   { icon: MapPin, label: "Joylashuv", value: "Toshkent, O'zbekiston" },
  //   { icon: Code, label: "Mutaxassislik", value: "Frontend Developer" },
  //   { icon: Clock, label: "Ish vaqti", value: "24/7 Online" },
  //   { icon: Award, label: "Tajriba", value: "3+ yil" },
  // ];

  // export default function Sidebar() {
  //   const [isOpen, setIsOpen] = useState(true);
  //   const [vh, setVh] = useState(typeof window !== "undefined" ? window.innerHeight : 800);
  //   const [vw, setVw] = useState(typeof window !== "undefined" ? window.innerWidth : 1280);
  //   const [headerH, setHeaderH] = useState(80);

  //   useEffect(() => {
  //     const measure = () => {
  //       setVh(window.innerHeight);
  //       setVw(window.innerWidth);
  //       const el = document.querySelector("header");
  //       setHeaderH(el ? el.offsetHeight : 80);
  //     };
  //     measure();
  //     window.addEventListener("resize", measure);
  //     return () => window.removeEventListener("resize", measure);
  //   }, []);

  //   const isCompact = vh <= 768;
  //   const isSmall = vw < 1024;

  //   const padding = isCompact ? "p-4" : "p-6";
  //   const avatarSize = isOpen ? (isCompact ? "w-24 h-24 text-3xl" : "w-28 h-28 text-4xl") : "w-14 h-14 text-xl";
  //   const togglePadding = isCompact ? "px-2 py-1.5" : "px-3 py-2";
  //   const cardPadding = isOpen ? "p-3" : "p-2";
  //   const statNumberSize = isOpen ? (isCompact ? "text-lg" : "text-xl") : "text-base";
  //   const socialItemH = isOpen ? (isCompact ? "h-16" : "h-20") : "h-12 w-12 mx-auto";
  //   const socialIconSize = isOpen ? (isCompact ? "w-6 h-6" : "w-7 h-7") : "w-5 h-5";

  //   const fadeIn = {
  //     hidden: { opacity: 0, x: -20 },
  //     visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  //   };

  //   const fadeUp = {
  //     hidden: { opacity: 0, y: 15 },
  //     visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  //   };

  //   const containerStagger = {
  //     hidden: { opacity: 0 },
  //     visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  //   };

  //   const cardFadeUp = {
  //     hidden: { opacity: 0, y: 10 },
  //     visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  //   };

  //   const openWidth = isSmall ? 300 : 340;
  //   const closedWidth = 72;

  //   return (
  //     <div
  //       className="px-3 overflow-hidden"
  //       style={{ position: isSmall ? "static" : "sticky", top: headerH + (isCompact ? 8 : 16) }}
  //     >
  //       <motion.aside
  //         className={`border border-border bg-surface rounded-3xl shadow-none transition-all duration-500 ease-in-out ${padding} flex-shrink-0`}
  //         style={{
  //           width: isOpen ? `${openWidth}px` : `${closedWidth}px`,
  //           minWidth: isOpen ? `${openWidth}px` : `${closedWidth}px`,
  //           height: isSmall ? "auto" : Math.max(320, vh - headerH - (isCompact ? 16 : 24)),
  //           overflow: "hidden",
  //         }}
  //         initial="hidden"
  //         animate="visible"
  //         variants={fadeIn}
  //       >
  //         <div className="flex flex-col items-center font-mono">
  //           {/* Toggle Button */}
  //           <motion.button
  //             onClick={() => setIsOpen(!isOpen)}
  //             className={`flex items-center gap-2 ${togglePadding} rounded-lg border border-border text-muted hover:text-primary hover:border-primary transition-all duration-300 mb-4 self-start`}
  //             whileHover={{ scale: 1.05 }}
  //             whileTap={{ scale: 0.95 }}
  //             aria-label={isOpen ? "Yopish" : "Ochish"}
  //           >
  //             {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
  //             <AnimatePresence>
  //               {isOpen && (
  //                 <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} exit={{ opacity: 0, width: 0 }} className="text-xs font-medium overflow-hidden">
  //                   Yopish
  //                 </motion.span>
  //               )}
  //             </AnimatePresence>
  //           </motion.button>

  //           {/* Avatar */}
  //           <motion.div className={`rounded-2xl bg-primary flex items-center justify-center text-white font-bold ${avatarSize} mb-5`} variants={fadeUp} whileHover={{ scale: 1.05, rotate: 3 }} transition={{ duration: 0.3 }}>
  //             AU
  //           </motion.div>

  //           {/* Profile Info */}
  //           <AnimatePresence>
  //             {isOpen && (
  //               <>
  //                 <motion.h2 initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-2xl font-bold text-main mb-3 overflow-hidden">
  //                   Umarov Asadbek
  //                 </motion.h2>

  //                 <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex flex-col gap-1 mb-6 overflow-hidden text-center text-sm text-muted">
  //                   <p>Frontend Developer</p>
  //                   <p>Copywriting</p>
  //                   <p>SEO Specialist</p>
  //                 </motion.div>
  //               </>
  //             )}
  //           </AnimatePresence>

  //           {/* Stats */}
  //           <motion.div className="w-full pt-5 border-t border-border mb-5" variants={fadeUp}>
  //             <div className={`flex ${isOpen ? "justify-around" : "flex-col gap-4"}`}>
  //               {stats.map(({ icon: Icon, value, label }, i) => (
  //                 <motion.div key={i} className="flex flex-col items-center" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
  //                   <div className={`text-main font-bold mb-1 ${statNumberSize}`}>{value}</div>
  //                   <div className="flex items-center gap-1 text-muted text-xs">
  //                     <Icon size={12} />
  //                     <AnimatePresence>
  //                       {isOpen && (
  //                         <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} exit={{ opacity: 0, width: 0 }} className="overflow-hidden">
  //                           {label}
  //                         </motion.span>
  //                       )}
  //                     </AnimatePresence>
  //                   </div>
  //                 </motion.div>
  //               ))}
  //             </div>
  //           </motion.div>

  //           {/* Info */}
  //           <motion.div className="w-full mb-6" variants={fadeUp}>
  //             <AnimatePresence>
  //               {isOpen && (
  //                 <motion.h3 initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-sm font-bold text-main mb-3 overflow-hidden">
  //                   Ma&apos;lumotlar
  //                 </motion.h3>
  //               )}
  //             </AnimatePresence>
  //             <div className={`${isOpen ? "space-y-3" : "flex flex-col gap-3"}`}>
  //               {info.map(({ icon: Icon, label, value }, i) => (
  //                 <motion.div
  //                   key={i}
  //                   className={`flex items-start gap-3 rounded-lg bg-background border border-border hover:border-primary transition-all duration-300 cursor-pointer group ${cardPadding} ${isOpen ? "" : "justify-center"}`}
  //                   whileHover={{ x: isOpen ? 4 : 0, scale: isOpen ? 1 : 1.1 }}
  //                   title={isOpen ? "" : `${label}: ${value}`}
  //                 >
  //                   <Icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
  //                   <AnimatePresence>
  //                     {isOpen && (
  //                       <motion.div initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} exit={{ opacity: 0, width: 0 }} className="flex-1 min-w-0 overflow-hidden">
  //                         <p className="text-xs text-muted mb-1">{label}</p>
  //                         <p className="text-xs text-main font-medium group-hover:text-primary transition-colors">{value}</p>
  //                       </motion.div>
  //                     )}
  //                   </AnimatePresence>
  //                 </motion.div>
  //               ))}
  //             </div>
  //           </motion.div>

  //           {/* Availability Badge */}
  //           <motion.div className={`w-full rounded-lg bg-primary bg-opacity-10 border border-primary mb-6 ${cardPadding}`} variants={fadeUp}>
  //             <div className="flex items-center justify-center gap-2">
  //               <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
  //               <AnimatePresence>
  //                 {isOpen && (
  //                   <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} exit={{ opacity: 0, width: 0 }} className="text-xs text-primary font-medium overflow-hidden">
  //                     Yangi loyihalar uchun ochiq
  //                   </motion.span>
  //                 )}
  //               </AnimatePresence>
  //             </div>
  //           </motion.div>

  //           {/* Social Icons */}
  //           <motion.div className={`w-full ${isOpen ? "grid grid-cols-2 gap-3" : "flex flex-col gap-3"}`} initial="hidden" animate="visible" variants={containerStagger}>
  //             {socialMedias.map(({ icon: Icon, link, alt }, i) => (
  //               <motion.a
  //                 key={i}
  //                 href={link}
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 className={`flex items-center justify-center rounded-2xl border border-border bg-surface transition-all duration-300 group cursor-pointer ${socialItemH}`}
  //                 variants={cardFadeUp}
  //                 whileHover={{ y: -4, borderColor: "#0284C7", transition: { duration: 0.3 } }}
  //                 whileTap={{ scale: 0.95 }}
  //                 aria-label={alt}
  //                 title={alt}
  //               >
  //                 <Icon className={`text-muted group-hover:text-primary transition-colors duration-300 ${socialIconSize}`} />
  //               </motion.a>
  //             ))}
  //           </motion.div>
  //         </div>
  //       </motion.aside>
  //     </div>
  //   );
  // }

"use client";

import { motion } from "framer-motion";
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

/* ================= DATA ================= */

const socials = [
  { icon: Mail, link: "mailto:asadbekumarov922@gmail.com", label: "Email" },
  { icon: Phone, link: "tel:+998772687865", label: "Phone" },
  { icon: Github, link: "https://github.com/asadbekumarov", label: "GitHub" },
  { icon: Send, link: "https://t.me/asad_umarov", label: "Telegram" },
];

const stats = [
  { icon: Briefcase, value: "24+", label: "Loyihalar" },
  { icon: Users, value: "12", label: "Mijozlar" },
  { icon: Calendar, value: "3+", label: "Yil tajriba" },
];

const info = [
  { icon: MapPin, label: "Joylashuv", value: "Toshkent, O‘zbekiston" },
  { icon: Code, label: "Yo‘nalish", value: "Frontend Developer" },
  { icon: Clock, label: "Ish vaqti", value: "24/7 Online" },
  { icon: Award, label: "Daraja", value: "Junior+" },
];

/* ================= COMPONENT ================= */

export default function ProfileCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        w-full max-w-[360px]
        rounded-3xl
        border border-border
        bg-white/70 dark:bg-black/40
        backdrop-blur-xl
        p-6
        space-y-6
      "
    >
      {/* ===== HEADER ===== */}
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

      {/* ===== STATS ===== */}
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

      {/* ===== INFO ===== */}
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

      {/* ===== AVAILABILITY ===== */}
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

      {/* ===== SOCIALS ===== */}
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
  );
}
