import { FiGithub, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import manhome from "../assets/projectsImg/manhome.png";
import autoquiz from "../assets/projectsImg/autoquiz.jpg";
import darrow from "../assets/projectsImg/darrov.png";
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
const FILTERS = [
  { label: "Barcha", value: "all" },
  { label: "Real loyihalar", value: "production" },
  { label: "Amalyot loyihalar", value: "personal" },
];
const projects = [
  {
    title: "Mann Home",
    tag: "Online Furniture Store",
    type: "production",
    img: manhome,
    desc: "Mann Home – zamonaviy onlayn mebel do‘koni. Sayt orqali turli mebellarni ko‘rish, tanlash va xavfsiz xarid qilish mumkin. Foydalanuvchi uchun qulay interfeys va to‘liq ishlaydigan e-commerce funksiyalari mavjud.",
    stack: ["Next.tsx", "TailwindCSS", "TypeScript"],
    live: "https://mann-home.vercel.app/uz",
    github: "https://github.com/",
  },

  {
    title: "Darrov",
    tag: "Delivery & Services App",
    type: "production",
    img: darrow,
    desc: "Darrov — Telegram va web platformasida ishlaydigan xizmatlar ilovasi. Foydalanuvchilar ovqat yetkazib berish, texnik xizmatlar va boshqa service xizmatlarini osongina buyurtma qilishlari mumkin.",
    stack: ["React.tsx", "TailwindCSS", "TypeScript"],
    live: "https://darrov.softturtkul.uz/",
    github: "https://github.com/your-username/darrov",
  },
  {
    title: "PUBG Tournament",
    tag: "Gaming / Platform",
    type: "production",
    img: pubg,
    desc: "PUBG Tournament – 12 viloyat ishtirokchilarini qamrab olgan onlayn turnir sayti. Foydalanuvchilar turnir jadvali, natijalar va qatnashish imkoniyatlarini sayt orqali kuzatishlari mumkin.",
    stack: ["Next.tsx", "TailwindCSS", "TypeScript"],
    live: "https://pubg-tournament-frontend.vercel.app/uz",
    github: "https://github.com/",
  },
  {
    title: "AutoQuiz",
    tag: "Education Technology",
    type: "personal",
    img: autoquiz,
    desc: "AutoQuiz platforma — o'qituvchilarga testlar yaratish va boshqarish imkonini beruvchi innovatsion ta'lim vositasi",
    stack: ["React.js", "TailwindCSS", "Javascript"],
    live: "https://auto-quiz-liard.vercel.app/",
    github: "https://github.com/asadbekumarov/autoQuiz",
  },
  {
    title: "VocabApp",
    tag: "EdTech • Mobile",
    type: "personal",
    img: vocabAppImg,
    images: [vocabAppImg, addword, newword, vocab, vocab1, quiz, complated],
    desc: "VocabApp — xorijiy tillarni o'rganuvchilar uchun shaxsiy lug'at boyligini oshirishga mo'ljallangan mobil ilova. Foydalanuvchilar o'z so'zlarini tezkor kiritish (batch-entry), ularni kunlik tartibda ko'rib chiqish va aqlli, randomizatsiya qilingan testlar orqali xotirasini mustahkamlashlari mumkin.",
    stack: ["React Native", "Expo", "AsyncStorage", "TypeScript"],
    live: "APK yuklab olish linki (ixtiyoriy)",
    github: "https://github.com/asadbekumarov/placeholder",
  },
];

function Project() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
            Loyihalar
          </motion.h2>
          <motion.div className="w-20 h-1 bg-primary" variants={lineGrow} />
          <div className="flex flex-wrap gap-3 mt-8 mb-12">
            {FILTERS.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-[8px] text-sm font-medium transition-all
        ${
          activeFilter === filter.value
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
              whileHover={{
                y: -8,
                borderColor: "#0284C7",
                transition: { duration: 0.3 },
              }}
              className="flex flex-col bg-surface border border-border p-4 rounded-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div
                className={`overflow-hidden rounded-xl mb-4 ${
                  project.title === "VocabApp" ? "bg-white/5 p-2" : ""
                }`}
              >
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className={`${
                    project.title === "VocabApp"
                      ? "object-contain"
                      : "object-cover"
                  } w-full h-48 md:h-52`}
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
                  href={project.title === "VocabApp" ? "#" : project.live}
                  onClick={(e) => {
                    if (project.title === "VocabApp") {
                      e.preventDefault();
                      openGallery(project);
                    }
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 text-center bg-primary hover:bg-primary-hover text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                  target={project.title === "VocabApp" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
                  Ko&apos;rish
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
                Telegram kanal
              </h3>
              <p
                className="text-muted max-w-lg text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: '"Fira Code", monospace' }}
              >
                Barcha loyihalarimni Telegram kanalimda ham kuzatib borishingiz
                mumkin!
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
                Ta&apos;shrif buyurish
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
