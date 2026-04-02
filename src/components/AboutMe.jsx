import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { GoPeople, GoClock } from "react-icons/go";
import { PiMedalThin } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import SEO from "./SEO";

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
      number: t('home.stats.expValue'),
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
       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen">
      <SEO title={t('nav.about')} />
      <div className="max-w-[1300px] mx-auto">
        {/* About section */}
        <motion.div
          className="mb-20 md:mb-28 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-main mb-4"
            style={{ fontFamily: '"Fira Code", monospace' }}
            variants={titleFade}
          >
            {t('aboutme.title')}
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mb-6"
            variants={lineGrow}
          />
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted leading-relaxed mb-8"
            style={{ fontFamily: '"Fira Code", monospace' }}
            variants={fadeIn(0.2)}
          >
            {t('aboutme.description')}
          </motion.p>
          <Link to="/contact">
            <motion.button
              className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              style={{ fontFamily: '"Fira Code", monospace' }}
              variants={fadeIn(0.4)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('aboutme.contactBtn')}
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24 md:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          {stats.map(({ icon, number, label }, i) => (
            <motion.div
              key={i}
              variants={cardFadeUp}
              className="premium-card p-6 md:p-8 flex flex-col items-center justify-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {icon}
              </motion.div>
              <h3
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-main mb-2"
                style={{ fontFamily: '"Fira Code", monospace' }}
              >
                {number}
              </h3>
              <p
                className="text-muted text-sm md:text-base group-hover:text-primary transition-colors duration-300"
                style={{ fontFamily: '"Fira Code", monospace' }}
              >
                {t(label)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools section */}
        <motion.div
          className="mb-24 md:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-main mb-4"
            style={{ fontFamily: '"Fira Code", monospace' }}
            variants={titleFade}
          >
            {t('aboutme.toolsTitle')}
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mb-10"
            variants={lineGrow}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={cardFadeUp}
                className="relative premium-card overflow-hidden flex items-center justify-center h-32 md:h-36 group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={tool.img}
                  alt={tool.name}
                  className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  animate={{ opacity: hoveredIndex === index ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute text-main font-semibold text-base md:text-lg select-none text-center px-2"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
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
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-main mb-4"
            style={{ fontFamily: '"Fira Code", monospace' }}
            variants={titleFade}
          >
            {t('aboutme.capabilitiesTitle')}
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mb-10"
            variants={lineGrow}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {capabilities.map(({ img, title, desc }, i) => (
              <motion.div
                key={i}
                variants={cardFadeUp}
                className="flex items-start gap-5 premium-card p-6 md:p-8 group"
              >
                <motion.img
                  src={img}
                  alt={t(title)}
                  className="w-14 h-14 md:w-16 md:h-16 object-contain flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="min-w-0">
                  <h4
                    className="text-xl md:text-2xl font-semibold text-main mb-2 group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {t(title)}
                  </h4>
                  <p
                    className="text-muted text-sm md:text-base leading-relaxed"
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
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-main mb-4"
            style={{ fontFamily: '"Fira Code", monospace' }}
            variants={titleFade}
          >
            {t('experience.title')}
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mb-12"
            variants={lineGrow}
          />
          <div className="space-y-12">
            {['softturtkul', 'edu'].map((id, idx) => (
              <motion.div
                key={id}
                variants={cardFadeUp}
                className="relative pl-8 border-l-2 border-primary/20 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/10 group-hover:scale-125 transition-transform" />
                
                <div className="premium-card p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 
                      className="text-xl md:text-2xl font-bold text-main"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {t(`experience.items.${id}.title`)}
                    </h3>
                    <span 
                      className="text-primary font-bold text-sm bg-primary/10 px-4 py-1 rounded-full"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {t(`experience.items.${id}.date`)}
                    </span>
                  </div>
                  <h4 
                    className="text-lg font-semibold text-primary mb-3"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {t(`experience.items.${id}.company`)}
                  </h4>
                  <p 
                    className="text-muted leading-relaxed"
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
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-main mb-4"
            style={{ fontFamily: '"Fira Code", monospace' }}
            variants={titleFade}
          >
            {t('aboutme.clientsTitle')}
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mb-10"
            variants={lineGrow}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl">
            {[1].map((_, i) => (
              <motion.div
                key={i}
                variants={cardFadeUp}
                className="premium-card py-12 md:py-16 flex items-center justify-center"
              >
                <img
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                  src={milliyImg}
                  alt={t('aboutme.clientLabel')}
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
