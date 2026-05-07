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
import img1 from "../assets/projectsImg/1.jpg";
import img2 from "../assets/projectsImg/2.jpg";
import img3 from "../assets/projectsImg/3.jpg";
import img4 from "../assets/projectsImg/4.jpg";
import img5 from "../assets/projectsImg/5.jpg";
import img6 from "../assets/projectsImg/6.jpg";
import imgsentences6 from "../assets/sentences/img1.jpg";

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
        github: "https://github.com/asadbekumarov/mann-home",
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
        github: "https://github.com/asadbekumarov/darrov",
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
        github: "https://github.com/asadbekumarov/pubg-tournament",
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
        img: img1,
        images: [img1, img2, img3, img4, img5, img6],
        desc: t("project.items.vocabapp.desc"),
        stack: ["React Native", "Expo", "AsyncStorage", "TypeScript"],
        live: "#",
        github: "https://github.com/asadbekumarov/placeholder",
      },
      {
        id: 6,
        title: t("project.items.sentences.title"),
        tag: t("project.items.sentences.tag"),
        type: "personal",
        img: imgsentences6,
        desc: t("project.items.sentences.desc"),
        stack: ["Deno", "TypeScript", "Grammy"],
        live: "https://t.me/tences_umarov_bot",
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
  /** Skrinshot kartochkada to‘liq ko‘rinsin (kesilmasin) — Vocab, Darrov, Tences */
  const usesContainScreenshot = (project) =>
    isVocabApp(project) || isDarrov(project) || project.id === 6;

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
            <p style={{fontFamily: '"Fira Code", monospace'}} className="text-xs text-muted/50 tracking-widest mb-2">// my_work</p>
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest"
              variants={fadeIn(0.1)}
            >
              <FiLayout size={12} />
              {t("project.title")}
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-5xl lg:text-7xl font-black text-main mb-4 sm:mb-6 tracking-tighter"
              style={{ fontFamily: '"Fira Code", monospace' }}
              variants={titleFade}
            >
              {t("project.title")}
            </motion.h2>

            <motion.div
              className="w-16 sm:w-24 h-1.5 bg-primary rounded-full mb-6 sm:mb-8"
              variants={lineGrow}
            />

            <motion.p
              className="text-muted text-base leading-[1.7] sm:leading-[1.75] max-w-md mb-8 sm:mb-10"
              style={{ fontFamily: '"Fira Code", monospace' }}
              variants={fadeIn(0.2)}
            >
              {t("project.telegram.desc")}
            </motion.p>

            {/* Filter Buttons */}
            <motion.div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide" variants={fadeIn(0.3)}>
              {FILTERS.map((filter) => {
                const Icon = filter.icon;
                const isActive = activeFilter === filter.value;
                const dotColor = filter.value === "all" ? "bg-gray-400" : filter.value === "production" ? "bg-green-500" : "bg-blue-500";
                
                return (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300
                      ${
                        isActive
                          ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                          : "bg-background text-muted hover:bg-border/50 border border-border"
                      }`}
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full inline-block mr-1 ${dotColor}`} />
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
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 w-full rounded-[2rem] bg-gradient-to-br from-surface to-background border border-border/50 overflow-hidden flex items-center justify-center p-4">
              <Player
                autoplay
                loop
                src="https://assets4.lottiefiles.com/packages/lf20_fcfjwiyb.json"
                style={{ height: "320px", width: "100%" }}
              />
            </div>
          </div>
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
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 }}
                variants={cardFadeUp}
                className="group relative flex flex-col bg-surface border border-border rounded-[2rem] overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-t-[2rem]" />
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Image Container */}
                <div className="relative h-56 overflow-hidden m-4 rounded-[1.5rem] bg-background border border-border/50">
                  {/* Project number badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary text-white text-[10px] font-black px-2.5 py-1 rounded-full tabular-nums">
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
                    className={`w-full h-full transition-all duration-700 object-center
                      ${
                        usesContainScreenshot(project)
                          ? "object-contain p-4 sm:p-6 group-hover:scale-100"
                          : "object-cover group-hover:scale-110"
                      }
                      ${loadedImages[project.id] ? "opacity-100" : "opacity-0"}`}
                  />

                  {/* Tag Badge */}
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black/70 backdrop-blur text-white/80 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-5 sm:p-6 md:p-8 pt-2 flex flex-col flex-grow">
                  {project.type === "production" ? (
                    <span className="flex items-center gap-1.5 text-[10px] font-mono text-green-400/80 uppercase tracking-widest mb-1"> 
                      <span className="relative flex h-1.5 w-1.5"> 
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> 
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span> 
                      </span> 
                      live 
                    </span> 
                  ) : (
                    <span className="text-[10px] font-mono text-blue-400/70 uppercase tracking-widest mb-1 block">
                      ◆ personal
                    </span>
                  )}
                  
                  <h3
                    className="text-xl font-black text-main mb-3 group-hover:text-primary transition-colors duration-300 tracking-tight"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-6 flex-grow line-clamp-4 font-sans">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold text-primary/80 bg-primary/8 border border-primary/20 px-2.5 py-1 rounded-lg uppercase tracking-wider"
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
                      className="flex-[2] flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl font-black text-sm uppercase tracking-[0.15em] hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/20"
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
                      className="flex-1 flex items-center justify-center h-[52px] bg-surface border border-border rounded-2xl text-main hover:border-primary/40 hover:text-primary transition-all duration-300 group relative"
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
          <div className="flex flex-col items-center justify-center py-8 text-center -mt-12 mb-24">
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
          </div>
        )}

        {/* ── Gallery Modal ─────────────────────────────────────────── */}
        <AnimatePresence>
          {isGalleryOpen && selectedProject && (
            <motion.div
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-xl"
            >
              <button
                type="button"
                onClick={closeGallery}
                className="absolute top-[max(1rem,env(safe-area-inset-top,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] sm:top-8 sm:right-8 text-white bg-white/10 p-3 sm:p-4 rounded-full hover:bg-white/20 transition-all z-[110] border border-white/10"
              >
                <FiX size={24} />
              </button>

              <div className="w-full max-w-7xl">
                <div className="text-center mb-6">
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-mono mb-1">
                    // gallery
                  </p>
                  <h3 className="text-xl font-black text-white tracking-tight"
                      style={{fontFamily: '"Fira Code", monospace'}}>
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 scrollbar-hide px-4">
                  {selectedProject.images.map((image, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-full md:w-[500px] snap-center flex flex-col items-center gap-6"
                    >
                      <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                        <img
                          src={image}
                          alt={`${selectedProject.title} ${idx + 1}`}
                          className="h-[60vh] w-auto object-contain bg-white/5"
                        />
                      </div>
                      <span className="bg-white/10 border border-white/20 text-white/60 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">
                        {idx + 1} / {selectedProject.images.length}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {selectedProject.stack.map((tech, i) => (
                    <span key={i} className="text-[10px] font-bold text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Telegram CTA ──────────────────────────────────────────── */}
        <motion.div
          variants={fadeIn(0.3)}
          initial="hidden"
          animate="visible"
          className="relative group overflow-hidden rounded-3xl md:rounded-[3rem] p-1 bg-gradient-to-r from-primary/20 via-indigo-500/20 to-primary/20"
        >
          <div className="relative bg-surface rounded-[1.4rem] md:rounded-[2.9rem] p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />

            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

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
                <p className="text-primary/50 text-[10px] uppercase tracking-[0.3em] font-mono mb-2">
                  // stay_connected
                </p>
                <h3
                  className="text-3xl md:text-5xl font-black text-main tracking-tighter uppercase"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {t("project.telegram.title")}
                </h3>
                <p
                  className="text-muted text-lg leading-[1.75] font-medium"
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
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  {t("project.telegram.btn")}
                  <FiExternalLink size={18} />
                </motion.a>
              </div>
            </div>

            <div className="hidden lg:flex items-center relative">
              <img
                src={megaphoneImg}
                alt="megaphone"
                className="w-48 h-48 object-contain relative z-10"
              />
              <img
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
