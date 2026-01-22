import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

// Import all images
import manhome from "../assets/projectsImg/manhome.png";
import autoquiz from "../assets/projectsImg/autoquiz.jpg";
import darrow from "../assets/projectsImg/darrov.png";
import pubg from "../assets/projectsImg/pubg.png";

import telegramImg from "../assets/projectsImg/telegram.png";
import windImg from "../assets/projectsImg/wind.png";
import megaphoneImg from "../assets/projectsImg/megaphone.png";

import {
  titleFade,
  lineGrow,
  containerStagger,
  cardFadeUp,
  fadeIn,
} from "../utils/animations";

const projects = [
  {
    title: "Mann Home",
    tag: "Online Furniture Store",
    img: manhome,
    desc: "Mann Home – zamonaviy onlayn mebel do‘koni. Sayt orqali turli mebellarni ko‘rish, tanlash va xavfsiz xarid qilish mumkin. Foydalanuvchi uchun qulay interfeys va to‘liq ishlaydigan e-commerce funksiyalari mavjud.",
    stack: ["Next.tsx", "TailwindCSS", "TypeScript"],
    live: "https://mann-home.vercel.app/uz",
    github: "https://github.com/",
  },

{
    title: "Darrov",
    tag: "Delivery & Services App",
    img: darrow,
    desc: "Darrov — Telegram va web platformasida ishlaydigan xizmatlar ilovasi. Foydalanuvchilar ovqat yetkazib berish, texnik xizmatlar va boshqa service xizmatlarini osongina buyurtma qilishlari mumkin.",
    stack: ["React.tsx", "TailwindCSS", "TypeScript"],
    live: "https://darrov.softturtkul.uz/",
    github: "https://github.com/your-username/darrov"
},
{
    title: "PUBG Tournament",
    tag: "Gaming / Tournament Platform",
    img: pubg, 
    desc: "PUBG Tournament – 12 viloyat ishtirokchilarini qamrab olgan onlayn turnir sayti. Foydalanuvchilar turnir jadvali, natijalar va qatnashish imkoniyatlarini sayt orqali kuzatishlari mumkin.",
    stack: ["Next.tsx", "TailwindCSS"],
    live: "https://pubg-tournament.vercel.app/",
    github: "https://github.com/"
},
  {
    title: "AutoQuiz",
    tag: "Edtech",
    img: autoquiz,
    desc: "AutoQuiz platforma — o'qituvchilarga testlar yaratish va boshqarish imkonini beruvchi innovatsion ta'lim vositasi",
    stack: ["React.js", "TailwindCSS"],
    live: "https://auto-quiz-liard.vercel.app/",
    github: "https://github.com/asadbekumarov/autoQuiz",
  },

];

function Project() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
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
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-20 md:mb-28"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardFadeUp}
              whileHover={{
                y: -8,
                borderColor: "#0284C7",
                transition: { duration: 0.3 },
              }}
              className="flex flex-col bg-surface border border-border p-5 rounded-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-4">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className="object-cover w-full h-48 md:h-52"
                  src={project.img}
                  alt={project.title}
                />
              </div>

              {/* Title & Tag */}
              <div className="flex items-center justify-between mb-3">
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
                  href={project.live}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 text-center bg-primary hover:bg-primary-hover text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300"
                  style={{ fontFamily: '"Fira Code", monospace' }}
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
