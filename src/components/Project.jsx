import {
  FiGithub,
  FiX,
  FiExternalLink,
  FiLayout,
  FiSmartphone,
  FiArrowRight,
} from "react-icons/fi";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
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
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const projects = useMemo(
    () => [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
    ],
    [t],
  );

  const FILTERS = useMemo(
    () => [
      { label: t("project.filters.all"), value: "all", icon: FiLayout },
      {
        label: t("project.filters.production"),
        value: "production",
        icon: FiExternalLink,
      },
      {
        label: t("project.filters.personal"),
        value: "personal",
        icon: FiSmartphone,
      },
    ],
    [t],
  );

  const filterCounts = useMemo(
    () => ({
      all: projects.length,
      production: projects.filter((p) => p.type === "production").length,
      personal: projects.filter((p) => p.type === "personal").length,
    }),
    [projects],
  );

  const openGallery = (project) => {
    setSelectedProject(project);
    setIsGalleryOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.type === activeFilter),
    [activeFilter, projects],
  );

  const isVocabApp = (project) =>
    project.title === t("project.items.vocabapp.title");
  const isDarrov = (project) =>
    project.title === t("project.items.darrov.title");

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen overflow-hidden">
      <SEO title={t("nav.projects")} />
      <div className="max-w-[1300px] mx-auto">
        {/* ── Header ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left — title + desc + filters */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn(0)}
            className="lg:col-span-7"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest"
              variants={fadeIn(0.1)}
            >
              <FiLayout size={12} />
              {t("project.title")}
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-main mb-6 tracking-tighter"
              style={{ fontFamily: '"Fira Code", monospace' }}
              variants={titleFade}
            >
              {t("project.title")}
            </motion.h2>

            <motion.div
              className="w-24 h-1.5 bg-primary rounded-full mb-8"
              variants={lineGrow}
            />

            <motion.p
              className="text-muted text-lg leading-relaxed max-w-xl mb-10"
              style={{ fontFamily: '"Fira Code", monospace' }}
              variants={fadeIn(0.2)}
            >
              {t("project.telegram.desc")}
            </motion.p>

            {/* Filter Buttons */}
            <motion.div className="flex flex-wrap gap-2" variants={fadeIn(0.3)}>
              {FILTERS.map((filter) => {
                const Icon = filter.icon;
                const isActive = activeFilter === filter.value;
                return (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300
                      ${
                        isActive
                          ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                          : "bg-surface text-muted hover:bg-border/50 border border-border"
                      }`}
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    <Icon size={15} />
                    {filter.label}
                    <span
                      className={`text-[10px] font-black px-1.5 py-0.5 rounded-full tabular-nums
                        ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-border text-muted"
                        }`}
                    >
                      {filterCounts[filter.value]}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — Lottie animation */}
          <motion.div
            className="lg:col-span-5 relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 w-full rounded-[2rem] bg-gradient-to-br from-surface to-background border border-border/50 overflow-hidden flex items-center justify-center p-4">
              <Player
                autoplay
                loop
                src="https://assets4.lottiefiles.com/packages/lf20_fcfjwiyb.json"
                style={{ height: "320px", width: "100%" }}
              />
            </div>
          </motion.div>
        </div>

        {/* ── Projects Grid ─────────────────────────────────────────── */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                variants={cardFadeUp}
                className="group relative flex flex-col bg-surface border border-border rounded-[2rem] overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden m-4 rounded-[1.5rem] bg-background border border-border/50">
                  {/* Project number badge */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {!loadedImages[project.id] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-surface via-border to-surface bg-[length:200%_100%] animate-shimmer" />
                  )}

                  <motion.img
                    onLoad={() => handleImageLoad(project.id)}
                    src={project.img}
                    alt={project.title}
                    className={`w-full h-full transition-all duration-700 group-hover:scale-110
                      ${isVocabApp(project) || isDarrov(project) ? "object-contain p-6" : "object-cover"}
                      ${loadedImages[project.id] ? "opacity-100" : "opacity-0"}`}
                  />

                  {/* Tag Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 dark:bg-black/90 backdrop-blur-md text-main text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter border border-border/50">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8 pt-2 flex flex-col flex-grow">
                  <h3
                    className="text-xl font-black text-main mb-3 group-hover:text-primary transition-colors duration-300 tracking-tight"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-muted text-sm leading-relaxed mb-6 flex-grow line-clamp-3"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold text-muted bg-background border border-border px-2.5 py-1 rounded-lg uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 mt-auto">
                    <motion.a
                      href={isVocabApp(project) ? "#" : project.live}
                      onClick={(e) => {
                        if (isVocabApp(project)) {
                          e.preventDefault();
                          openGallery(project);
                        }
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-[2] flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/20"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                      target={isVocabApp(project) ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      {t("project.viewBtn")}
                      <FiArrowRight size={16} />
                    </motion.a>

                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center h-[52px] bg-surface border border-border rounded-2xl text-main hover:border-primary/40 hover:text-primary transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Empty State ───────────────────────────────────────────── */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-8 text-center -mt-12 mb-24"
          >
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_hl5n0bwb.json"
              style={{ height: "240px", width: "240px" }}
            />
            <h3
              className="text-2xl font-black text-main mb-3 tracking-tight -mt-4"
              style={{ fontFamily: '"Fira Code", monospace' }}
            >
              {t("project.filters." + activeFilter)} — 0
            </h3>
            <p
              className="text-muted text-sm uppercase tracking-widest font-bold"
              style={{ fontFamily: '"Fira Code", monospace' }}
            >
              No projects found for this filter.
            </p>
          </motion.div>
        )}

        {/* ── Gallery Modal ─────────────────────────────────────────── */}
        <AnimatePresence>
          {isGalleryOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-xl"
            >
              <motion.button
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                onClick={closeGallery}
                className="absolute top-8 right-8 text-white bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all z-[110] border border-white/10"
              >
                <FiX size={24} />
              </motion.button>

              <div className="w-full max-w-7xl">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 scrollbar-hide px-4"
                >
                  {selectedProject.images.map((image, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex-shrink-0 w-full md:w-[500px] snap-center flex flex-col items-center gap-6"
                    >
                      <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                        <img
                          src={image}
                          alt={`${selectedProject.title} ${idx + 1}`}
                          className="h-[60vh] w-auto object-contain bg-white/5"
                        />
                      </div>
                      <span className="text-white/40 font-black text-xs uppercase tracking-widest">
                        {idx + 1} / {selectedProject.images.length}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="text-center">
                  <h3
                    className="text-3xl font-black text-white mb-2 uppercase tracking-tighter"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {selectedProject.title}
                  </h3>
                  <p className="text-white/50 text-sm tracking-widest uppercase font-bold">
                    {selectedProject.tag}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Telegram CTA ──────────────────────────────────────────── */}
        <motion.div
          variants={fadeIn(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative group overflow-hidden rounded-[3rem] p-1 bg-gradient-to-r from-primary/20 via-indigo-500/20 to-primary/20"
        >
          <div className="relative bg-surface rounded-[2.9rem] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left relative z-10">
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                <img
                  src={telegramImg}
                  alt="telegram"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain relative"
                />
              </motion.div>

              <div className="space-y-4 max-w-xl">
                <h3
                  className="text-3xl md:text-5xl font-black text-main tracking-tighter uppercase"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {t("project.telegram.title")}
                </h3>
                <p
                  className="text-muted text-lg leading-relaxed font-medium"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {t("project.telegram.desc")}
                </p>
                <motion.a
                  href="https://t.me/umarov_posts"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-hover transition-all duration-300 shadow-xl shadow-primary/25"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {t("project.telegram.btn")}
                  <FiExternalLink size={18} />
                </motion.a>
              </div>
            </div>

            <div className="hidden lg:flex items-center relative">
              <motion.img
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={megaphoneImg}
                alt="megaphone"
                className="w-48 h-48 object-contain relative z-10"
              />
              <motion.img
                animate={{ x: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={windImg}
                alt="wind"
                className="absolute -top-12 -left-20 w-56 h-56 object-contain opacity-30"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
