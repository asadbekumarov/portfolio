import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { GoPeople, GoClock } from "react-icons/go";
import { PiMedalThin } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import SEO from "./SEO";
import { Player } from "@lottiefiles/react-lottie-player";

// Import all images
import htmlImg from "../assets/aboutmeImg/html.svg";
import cssImg from "../assets/aboutmeImg/css.svg";
import jsImg from "../assets/aboutmeImg/js.svg";
import scssImg from "../assets/aboutmeImg/scss.png";
import reactImg from "../assets/aboutmeImg/react.svg";
import tailwindImg from "../assets/aboutmeImg/tailwind.svg";
import nextImg from "../assets/aboutmeImg/next.jpg";
import typescriptImg from "../assets/aboutmeImg/typescript.svg";
import reduxImg from "../assets/aboutmeImg/redux.svg";
import bootstrapImg from "../assets/aboutmeImg/bootstrap.png";
import androidImg from "../assets/aboutmeImg/and.svg";
import reactQueryImg from "../assets/aboutmeImg/reactquery.webp";
import seoImg from "../assets/aboutmeImg/seo.png";
import designImg from "../assets/aboutmeImg/dizayn.png";
import qualityImg from "../assets/aboutmeImg/sifat.png";
import fastImg from "../assets/aboutmeImg/tezkor.png";
import milliyImg from "../assets/aboutmeImg/milliy.png";

import {
  fadeIn,
  fadeUp,
  containerStagger,
  cardFadeUp,
  titleFade,
  lineGrow,
} from "../utils/animations";
import { Link } from "react-router-dom";

const tools = [
  { img: htmlImg, name: "HTML" },
  { img: cssImg, name: "CSS" },
  { img: jsImg, name: "JavaScript" },
  { img: scssImg, name: "SCSS" },
  { img: reactImg, name: "React" },
  { img: tailwindImg, name: "Tailwind" },
  { img: nextImg, name: "Next.js" },
  { img: typescriptImg, name: "TypeScript" },
  { img: reduxImg, name: "Redux" },
  { img: bootstrapImg, name: "Bootstrap" },
  { img: androidImg, name: "Android" },
  { img: reactQueryImg, name: "React Query" },
];

function AboutMe() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { t } = useTranslation();

  const stats = [
    {
      icon: <FaCode className="text-primary text-4xl md:text-5xl mb-3" />,
      number: "4+",
      label: "home.stats.projects",
    },
    {
      icon: <GoPeople className="text-primary text-4xl md:text-5xl mb-3" />,
      number: "2+",
      label: "home.stats.clients",
    },
    {
      icon: <PiMedalThin className="text-primary text-4xl md:text-5xl mb-3" />,
      number: t("home.stats.expValue"),
      label: "home.stats.experience",
    },
    {
      icon: <GoClock className="text-primary text-4xl md:text-5xl mb-3" />,
      number: "24/7",
      label: "home.stats.workingHours",
    },
  ];

  const capabilities = [
    {
      img: seoImg,
      title: "aboutme.capabilities.seo.title",
      desc: "aboutme.capabilities.seo.desc",
    },
    {
      img: designImg,
      title: "aboutme.capabilities.design.title",
      desc: "aboutme.capabilities.design.desc",
    },
    {
      img: qualityImg,
      title: "aboutme.capabilities.quality.title",
      desc: "aboutme.capabilities.quality.desc",
    },
    {
      img: fastImg,
      title: "aboutme.capabilities.fast.title",
      desc: "aboutme.capabilities.fast.desc",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen overflow-hidden">
      <SEO title={t("nav.about")} />
      <div className="max-w-[1300px] mx-auto">
        {/* About section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 md:mb-32 items-center">
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest"
              variants={fadeIn(0.1)}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t("nav.about")}
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-main mb-6 tracking-tighter"
              style={{ fontFamily: '"Fira Code", monospace' }}
              variants={titleFade}
            >
              {t("aboutme.title")}
            </motion.h2>
            <motion.div
              className="w-24 h-1.5 bg-primary rounded-full mb-8"
              variants={lineGrow}
            />
            <motion.p
              className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-2xl"
              style={{ fontFamily: '"Fira Code", monospace' }}
              variants={fadeIn(0.2)}
            >
              {t("aboutme.description")}
            </motion.p>
            <Link to="/contact">
              <motion.button
                className="group relative flex items-center gap-3 bg-primary text-white font-black px-10 py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-primary/25 overflow-hidden"
                style={{ fontFamily: '"Fira Code", monospace' }}
                variants={fadeIn(0.4)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{t("aboutme.contactBtn")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative flex flex-col gap-6"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            {/* Glow decorations */}
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

            {/* Lottie animation card */}
            <div className="relative z-10 rounded-[2rem] bg-gradient-to-br from-surface to-background border border-border/50 overflow-hidden flex items-center justify-center p-4">
              <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                style={{ height: "340px", width: "100%" }}
              />
            </div>

            {/* Stats row below Lottie */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
              {stats.slice(0, 4).map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex flex-col items-center justify-center p-5 rounded-2xl bg-surface border border-border hover:border-primary/40 group transition-all duration-300"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300 mb-2">
                    {stat.icon}
                  </div>
                  <span className="text-2xl font-black text-main tracking-tighter">
                    {stat.number}
                  </span>
                  <span className="text-[10px] text-muted uppercase font-bold text-center tracking-widest mt-1">
                    {t(stat.label)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools section */}
        <motion.div
          className="mb-24 md:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          <div className="flex flex-col items-center text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-6xl font-black text-main mb-4 tracking-tighter"
              style={{ fontFamily: '"Fira Code", monospace' }}
              variants={titleFade}
            >
              {t("aboutme.toolsTitle")}
            </motion.h2>
            <motion.div
              className="w-24 h-1.5 bg-primary rounded-full"
              variants={lineGrow}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={cardFadeUp}
                className="relative premium-card group overflow-hidden flex flex-col items-center justify-center p-8 aspect-square transition-all duration-500 hover:border-primary/50"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.img
                  src={tool.img}
                  alt={tool.name}
                  className="w-16 h-16 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                  animate={{
                    filter:
                      hoveredIndex === index
                        ? "grayscale(0%)"
                        : "grayscale(100%)",
                    opacity: hoveredIndex === index ? 1 : 0.6,
                  }}
                />

                <motion.span
                  className="absolute bottom-4 text-primary font-black text-[10px] uppercase tracking-[0.2em] relative z-10 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {tool.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What I can do */}
        <motion.div
          className="mb-24 md:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          <div className="flex flex-col items-center text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-6xl font-black text-main mb-4 tracking-tighter uppercase"
              style={{ fontFamily: '"Fira Code", monospace' }}
              variants={titleFade}
            >
              {t("aboutme.capabilitiesTitle")}
            </motion.h2>
            <motion.div
              className="w-24 h-1.5 bg-primary rounded-full"
              variants={lineGrow}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map(({ img, title, desc }, i) => (
              <motion.div
                key={i}
                variants={cardFadeUp}
                className="relative group premium-card p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 transition-all duration-500 hover:border-primary/50 overflow-hidden"
              >
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

                <div className="relative flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-2xl bg-background border border-border group-hover:border-primary/30 transition-colors duration-500 shadow-inner">
                  <motion.img
                    src={img}
                    alt={t(title)}
                    className="w-12 h-12 object-contain"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  />
                </div>

                <div className="flex-grow text-center sm:text-left">
                  <h4
                    className="text-2xl font-black text-main mb-3 group-hover:text-primary transition-colors duration-300 tracking-tight"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {t(title)}
                  </h4>
                  <p
                    className="text-muted text-base leading-relaxed font-medium"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {t(desc)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="mb-24 md:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          <div className="flex flex-col items-center text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-6xl font-black text-main mb-4 tracking-tighter uppercase"
              style={{ fontFamily: '"Fira Code", monospace' }}
              variants={titleFade}
            >
              {t("experience.title")}
            </motion.h2>
            <motion.div
              className="w-24 h-1.5 bg-primary rounded-full"
              variants={lineGrow}
            />
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {["softturtkul", "edu"].map((id, idx) => (
              <motion.div
                key={id}
                variants={cardFadeUp}
                className="relative pl-12 border-l-4 border-primary/10 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-14px] top-0 w-6 h-6 rounded-full bg-surface border-4 border-primary ring-8 ring-primary/5 group-hover:scale-125 transition-all duration-500" />

                <div className="premium-card p-10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                  {/* Decorative number */}
                  <span
                    className="absolute top-4 right-8 text-7xl font-black text-primary/5 select-none"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    0{idx + 1}
                  </span>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
                    <div>
                      <h3
                        className="text-2xl md:text-3xl font-black text-main tracking-tight"
                        style={{ fontFamily: '"Fira Code", monospace' }}
                      >
                        {t(`experience.items.${id}.title`)}
                      </h3>
                      <h4
                        className="text-lg font-bold text-primary mt-1"
                        style={{ fontFamily: '"Fira Code", monospace' }}
                      >
                        {t(`experience.items.${id}.company`)}
                      </h4>
                    </div>
                    <span
                      className="inline-flex items-center px-5 py-2 rounded-2xl bg-primary text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {t(`experience.items.${id}.date`)}
                    </span>
                  </div>

                  <p
                    className="text-muted text-base md:text-lg leading-relaxed font-medium relative z-10"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {t(`experience.items.${id}.desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clients */}
        <motion.div
          className="mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          <div className="flex flex-col items-center text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-6xl font-black text-main mb-4 tracking-tighter uppercase"
              style={{ fontFamily: '"Fira Code", monospace' }}
              variants={titleFade}
            >
              {t("aboutme.clientsTitle")}
            </motion.h2>
            <motion.div
              className="w-24 h-1.5 bg-primary rounded-full"
              variants={lineGrow}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1].map((_, i) => (
              <motion.div
                key={i}
                variants={cardFadeUp}
                whileHover={{ y: -10 }}
                className="premium-card py-16 flex items-center justify-center group relative overflow-hidden hover:border-primary/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  className="w-32 h-32 object-contain relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={milliyImg}
                  alt={t("aboutme.clientLabel")}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
