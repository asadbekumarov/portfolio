import { FiGithub, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "./SEO";

import manhome from "../assets/projectsImg/manhome.png";
import autoquiz from "../assets/projectsImg/autoquiz.jpg";
import tgbotdarrow from "../assets/projectsImg/tgbotdarrow.jpg";
import pubg from "../assets/projectsImg/pubg.png";

import telegramImg from "../assets/projectsImg/telegram.png";
import windImg from "../assets/projectsImg/wind.png";
import megaphoneImg from "../assets/projectsImg/megaphone.png";
import vocabAppImg from "../assets/projectsImg/vocabAppImg.jpg";
import addword from "../assets/projectsImg/addword.jpg";
import newword from "../assets/projectsImg/newword.jpg";
import vocab from "../assets/projectsImg/vocab.jpg";
import vocab1 from "../assets/projectsImg/vocab1.jpg";
import quiz from "../assets/projectsImg/quiz.jpg";
import complated from "../assets/projectsImg/complate.jpg";

import {
  titleFade,
  lineGrow,
  containerStagger,
  cardFadeUp,
  fadeIn,
} from "../utils/animations";

function Project() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const FILTERS = [
    { label: t("project.filters.all"), value: "all" },
    { label: t("project.filters.production"), value: "production" },
    { label: t("project.filters.personal"), value: "personal" },
  ];

  const projects = [
    {
      title: t("project.items.mannhome.title"),
      tag: t("project.items.mannhome.tag"),
      type: "production",
      img: manhome,
      desc: t("project.items.mannhome.desc"),
      stack: ["Next.tsx", "TailwindCSS", "TypeScript"],
      live: "https://mann-home.vercel.app/uz",
      github: "https://github.com/",
    },
    {
      title: t("project.items.darrov.title"),
      tag: t("project.items.darrov.tag"),
      type: "production",
      img: tgbotdarrow,
      desc: t("project.items.darrov.desc"),
      stack: ["React.tsx", "TailwindCSS", "TypeScript"],
      live: "https://darrov.softturtkul.uz/",
      github: "https://github.com/your-username/darrov",
    },
    {
      title: t("project.items.pubg.title"),
      tag: t("project.items.pubg.tag"),
      type: "production",
      img: pubg,
      desc: t("project.items.pubg.desc"),
      stack: ["Next.tsx", "TailwindCSS", "TypeScript"],
      live: "https://pubg-tournament-frontend.vercel.app/uz",
      github: "https://github.com/",
    },
    {
      title: t("project.items.autoquiz.title"),
      tag: t("project.items.autoquiz.tag"),
      type: "personal",
      img: autoquiz,
      desc: t("project.items.autoquiz.desc"),
      stack: ["React.js", "TailwindCSS", "Javascript"],
      live: "https://auto-quiz-liard.vercel.app/",
      github: "https://github.com/asadbekumarov/autoQuiz",
    },
    {
      title: t("project.items.vocabapp.title"),
      tag: t("project.items.vocabapp.tag"),
      type: "personal",
      img: vocabAppImg,
      images: [vocabAppImg, addword, newword, vocab, vocab1, quiz, complated],
      desc: t("project.items.vocabapp.desc"),
      stack: ["React Native", "Expo", "AsyncStorage", "TypeScript"],
      live: "#",
      github: "https://github.com/asadbekumarov/placeholder",
    },
  ];

  const openGallery = (project) => {
    setSelectedProject(project);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedProject(null);
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen">
      <SEO title={t('nav.projects')} />
      <div className="max-w-[1300px] mx-auto">
        {/* Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn(0)}
          className="mb-16 md:mb-20"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-main mb-4"
            style={{ fontFamily: '"Fira Code", monospace' }}
            variants={titleFade}
          >
            {t("project.title")}
          </motion.h2>
          <motion.div className="w-20 h-1 bg-primary" variants={lineGrow} />
          <div className="flex flex-wrap gap-3 mt-8 mb-12">
            {FILTERS.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-[8px] text-sm font-medium transition-all
        ${activeFilter === filter.value
                    ? "bg-primary text-white"
                    : "bg-surface text-muted"
                  }`}
                style={{ fontFamily: '"Fira Code", monospace' }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-20 md:mb-28"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardFadeUp}
              className="flex flex-col premium-card p-4 group"
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden rounded-xl mb-4 h-48 md:h-52 ${project.title === t("project.items.vocabapp.title") || project.title === t("project.items.darrov.title") ? "bg-white/5 p-2" : "bg-surface"}`}
              >
                {/* Skeleton Loader */}
                {!loadedImages[i] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-surface via-border to-surface bg-[length:200%_100%] animate-shimmer" />
                )}
                
                <motion.img
                  onLoad={() => handleImageLoad(i)}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className={`${project.title === t("project.items.vocabapp.title") || project.title === t("project.items.darrov.title")
                      ? "object-contain"
                      : "object-cover"
                    } w-full h-full transition-opacity duration-500 ${loadedImages[i] ? 'opacity-100' : 'opacity-0'}`}
                  src={project.img}
                  alt={project.title}
                />
              </div>

              {/* Title & Tag */}
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="text-lg md:text-xl font-bold text-main group-hover:text-primary transition-colors duration-300"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {project.title}
                </h3>
                <span
                  className="text-xs font-semibold bg-primary text-white px-3 py-1 rounded-full whitespace-nowrap"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {project.tag}
                </span>
              </div>

              {/* Desc */}
              <p
                className="text-muted text-sm leading-relaxed mb-4 flex-grow"
                style={{ fontFamily: '"Fira Code", monospace' }}
              >
                {project.desc}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-background border border-border text-muted text-xs px-3 py-1 rounded-lg"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <motion.a
                  href={project.title === t("project.items.vocabapp.title") ? "#" : project.live}
                  onClick={(e) => {
                    if (project.title === t("project.items.vocabapp.title")) {
                      e.preventDefault();
                      openGallery(project);
                    }
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 text-center bg-primary hover:bg-primary-hover text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                  target={project.title === t("project.items.vocabapp.title") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
                  {t("project.viewBtn")}
                </motion.a>
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05, y: -2, borderColor: "#0284C7" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 text-main bg-surface border border-border px-4 py-2.5 rounded-lg transition-all duration-300"
                >
                  <FiGithub size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Modal */}
        <AnimatePresence>
          {isGalleryOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
            >
              <button
                onClick={closeGallery}
                className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all z-[110]"
              >
                <FiX size={24} />
              </button>

              <div className="w-full max-w-6xl">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide px-4">
                  {selectedProject.images.map((image, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex-shrink-0 w-full sm:w-[400px] snap-center flex items-center justify-center"
                    >
                      <img
                        src={image}
                        alt={`${selectedProject.title} ${idx + 1}`}
                        className="h-[70vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Telegram section */}
        <motion.div
          variants={fadeIn(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            y: -6,
            borderColor: "#0284C7",
            transition: { duration: 0.3 },
          }}
          className="flex flex-col lg:flex-row justify-between items-center p-6 md:p-8 bg-surface border border-border rounded-2xl transition-all duration-300 gap-6 lg:gap-8 cursor-pointer group"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="flex-shrink-0"
            >
              <img
                src={telegramImg}
                alt="telegram"
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
              />
            </motion.div>

            <div className="flex flex-col gap-3">
              <h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-main group-hover:text-primary transition-colors duration-300"
                style={{ fontFamily: '"Fira Code", monospace' }}
              >
                {t("project.telegram.title")}
              </h3>
              <p
                className="text-muted max-w-lg text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: '"Fira Code", monospace' }}
              >
                {t("project.telegram.desc")}
              </p>
              <motion.a
                href="https://t.me/umarov_posts"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block text-center bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 w-full sm:w-auto"
                style={{ fontFamily: '"Fira Code", monospace' }}
              >
                {t("project.telegram.btn")}
              </motion.a>
            </div>
          </div>

          <div className="hidden lg:flex items-center relative">
            <motion.img
              initial={{ rotate: -10, opacity: 0, x: -20 }}
              whileInView={{ rotate: 0, opacity: 0.7, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={windImg}
              alt="wind"
              className="absolute -top-8 -left-24 w-40 h-40 object-contain"
            />
            <motion.img
              whileHover={{ rotate: 10, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 150 }}
              src={megaphoneImg}
              alt="megaphone"
              className="w-36 h-36 object-contain relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
