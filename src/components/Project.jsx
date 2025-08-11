import { FiGithub } from "react-icons/fi"
import { motion } from "framer-motion"

// Import all images
import milliy from '../assets/projectsImg/milliy.jpg';
import abdullohsayfidinov from '../assets/projectsImg/abdullohsayfidinov.jpg';
import autoquiz from '../assets/projectsImg/autoquiz.jpg';

import telegramImg from '../assets/projectsImg/telegram.png';
import windImg from '../assets/projectsImg/wind.png';
import megaphoneImg from '../assets/projectsImg/megaphone.png';

import {
    titleFade,
    lineGrow,
    containerStagger,
    cardFadeUp,
    fadeInLeft,
    fadeIn,
    hoverScale
} from '../utils/animations'

const projects = [
    {
        title: "Milliy It center",
        tag: "Marketing agency",
        img: milliy,
        desc: "Marketing agentligi — brendlaringizni rivojlantirish, raqamli strategiyalar yaratish va mijozlarga samarali marketing xizmatlarini taqdim etishga ixtisoslashgan mutaxassislar jamoasi.",
        stack: ["React.js", "TailwindCSS", "PHP", "MySQL"],
        live: "https://milliyitcenter.uz/",
        github: "https://github.com/asadbekumarov/Milliy-IT-center"
    },
    {
        title: "Abdulloh Sayfuddinov",
        tag: "Personal brand website",
        img: abdullohsayfidinov,
        desc: "Shaxsiy portfolio va blog platformasi, zamonaviy dizayn va responsive UI bilan",
        stack: ["React.tsx", "TailwindCSS", "Aos animation"],
        live: "https://abdullohsayfuddinov.vercel.app/",
        github: "https://abdullohsayfuddinov.vercel.app/"
    },
    {
        title: "AutoQuiz",
        tag: "Edtech ",
        img: autoquiz,
        desc: "AutoQuiz platforma — o'qituvchilarga testlar yaratish va boshqarish imkonini beruvchi innovatsion ta'lim vositasi",
        stack: ["React.js", "TailwindCSS"],
        live: "https://auto-quiz-liard.vercel.app/",
        github: "https://github.com/asadbekumarov/autoQuiz"
    }
]

function Project() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 min-h-screen text-white">
            <div className="max-w-7xl w-full mx-auto">

                {/* Title */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn(0)}
                    className="mb-12 sm:mb-16 text-start"
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-tight"
                        variants={titleFade}
                    >
                        Loyihalar
                    </motion.h2>
                    <motion.div
                        className="w-24 sm:w-32 h-2 rounded-full bg-green-500 mb-8 sm:mb-10"
                        variants={lineGrow}
                    ></motion.div>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={containerStagger}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            variants={cardFadeUp}
                            whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.4)" }}
                            className="flex flex-col gap-4 bg-[#1B1B1B] p-4 sm:p-5 rounded-xl shadow-lg transition duration-300"
                        >
                            {/* Image */}
                            <div className="overflow-hidden rounded-lg w-full">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="object-cover w-full h-40 sm:h-48"
                                    src={project.img}
                                    alt={project.title}
                                />
                            </div>

                            {/* Title & Tag */}
                            <motion.div
                                variants={fadeInLeft}
                                className="flex items-center justify-between w-full mt-2"
                            >
                                <p className="text-base sm:text-lg font-bold">{project.title}</p>
                                <p className="text-xs font-semibold bg-green-500 text-white px-2 py-1 rounded-full">
                                    {project.tag}
                                </p>
                            </motion.div>

                            {/* Desc */}
                            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed flex-grow">
                                {project.desc}
                            </p>

                            {/* Stack */}
                            <motion.div
                                className="flex flex-wrap gap-2"
                                variants={fadeIn(0.1)}
                            >
                                {project.stack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 text-black text-xs font-medium px-2 sm:px-3 py-1 rounded-full shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4">
                                <motion.a
                                    {...hoverScale}
                                    href={project.live}
                                    className="bg-green-500 w-full sm:flex-1 text-center hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium shadow-md transition duration-300 text-sm sm:text-base"
                                >
                                    Ko'rish
                                </motion.a>
                                <motion.a
                                    {...hoverScale}
                                    href={project.github}
                                    className="flex items-center justify-center gap-2 text-gray-700 bg-gray-100 w-full sm:w-auto px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300 text-sm sm:text-base"
                                >
                                    <FiGithub size={18} className="sm:w-5 sm:h-5" /> GitHub
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
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row justify-between items-center mt-16 sm:mt-20 p-4 sm:p-6 bg-[#1B1B1B] border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 gap-6 sm:gap-8"
                >
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                        <motion.div
                            initial={{ rotate: -15 }}
                            animate={{ rotate: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="flex rounded-lg w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 items-center justify-center"
                        >
                            <img
                                src={telegramImg}
                                alt="telegram"
                                className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 object-contain"
                            />
                        </motion.div>

                        <motion.div variants={fadeInLeft} className="flex flex-col gap-2 sm:gap-3">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                                Telegram kanal
                            </h3>
                            <p className="text-zinc-300 max-w-md text-xs sm:text-sm lg:text-base">
                                Barcha loyihalarimni Telegram kanalimda ham kuzatib borishingiz mumkin!
                            </p>
                            <motion.a
                                {...hoverScale}
                                href="https://t.me/Choyxona_IT"
                                className="text-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium shadow-md transition duration-300 text-sm sm:text-base w-full sm:w-auto"
                            >
                                Ta'shrif buyurish
                            </motion.a>
                        </motion.div>
                    </div>

                    <div className="hidden sm:flex items-center relative">
                        <motion.img
                            initial={{ rotate: -10, opacity: 0 }}
                            whileInView={{ rotate: 0, opacity: 0.8 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                            src={windImg}
                            alt="wind"
                            className="absolute -top-7 -left-20 sm:-left-28 w-32 h-32 sm:w-44 sm:h-44 object-contain"
                        />
                        <motion.img
                            whileHover={{ rotate: 10, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 150 }}
                            src={megaphoneImg}
                            alt="megaphone"
                            className="w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 object-contain relative z-10"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Project
