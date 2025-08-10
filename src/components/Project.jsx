import { FiGithub } from "react-icons/fi"
import { motion } from "framer-motion"

// Import all images
import projectImg from '../assets/projectsImg/image.png';
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
        title: "Online store",
        tag: "E-commerce",
        img: projectImg,
        desc: "To'lov integratsiyasi va foydalanuvchilarni boshqarish bilan to'liq xususiyatli elektron tijorat platformasi",
        stack: ["React.js", "TailwindCSS", "PHP", "MySQL"],
        live: "#",
        github: "#"
    },
    {
        title: "Portfolio website",
        tag: "Frontend",
        img: projectImg,
        desc: "Shaxsiy portfolio va blog platformasi, zamonaviy dizayn va responsive UI bilan",
        stack: ["Next.js", "TailwindCSS", "Framer Motion"],
        live: "#",
        github: "#"
    },
    {
        title: "Weather App",
        tag: "Utility",
        img: projectImg,
        desc: "Shaharlar bo'yicha real vaqt ob-havo ma'lumotlarini ko'rsatadigan React ilova",
        stack: ["React.js", "API", "TailwindCSS"],
        live: "#",
        github: "#"
    }
]

function Project() {
    return (
        <section className="px-6 py-12 min-h-screen text-white">
            <div className="max-w-7xl w-full mx-auto">

                {/* Title */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn(0)}
                    className="mb-16 text-start"
                >
                    <motion.h2
                        className="text-5xl font-extrabold mb-2 tracking-tight"
                        variants={titleFade}
                    >
                        Aloqa
                    </motion.h2>
                    <motion.div
                        className="w-32 h-2 rounded-full bg-green-500 mb-10"
                        variants={lineGrow}
                    ></motion.div>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={containerStagger}
                    initial="hidden"
                    animate="visible"
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            variants={cardFadeUp}
                            whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.4)" }}
                            className="flex flex-col gap-4 bg-[#1B1B1B] p-5 rounded-xl shadow-lg transition duration-300"
                        >
                            {/* Image */}
                            <div className="overflow-hidden rounded-lg w-full">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="object-cover w-full h-48"
                                    src={project.img}
                                    alt={project.title}
                                />
                            </div>

                            {/* Title & Tag */}
                            <motion.div
                                variants={fadeInLeft}
                                className="flex items-center justify-between w-full mt-2"
                            >
                                <p className="text-lg font-bold">{project.title}</p>
                                <p className="text-xs font-semibold bg-green-500 text-white px-2 py-1 rounded-full">
                                    {project.tag}
                                </p>
                            </motion.div>

                            {/* Desc */}
                            <p className="text-zinc-300 text-sm leading-relaxed flex-grow">
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
                                        className="bg-gray-100 text-black text-xs font-medium px-3 py-1 rounded-full shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>

                            {/* Buttons */}
                            <div className="flex items-center gap-4 mt-4">
                                <motion.a
                                    {...hoverScale}
                                    href={project.live}
                                    className="bg-green-500 flex-1 text-center hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium shadow-md transition duration-300"
                                >
                                    Ko‘rish
                                </motion.a>
                                <motion.a
                                    {...hoverScale}
                                    href={project.github}
                                    className="flex items-center gap-2 text-gray-700 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300"
                                >
                                    <FiGithub size={20} /> GitHub
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
                    className="flex justify-between items-center mt-20 p-6 bg-[#1B1B1B] border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    <div className="flex items-center gap-6">
                        <motion.div
                            initial={{ rotate: -15 }}
                            animate={{ rotate: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="flex rounded-lg w-36 h-36 items-center justify-center"
                        >
                            <img
                                src={telegramImg}
                                alt="telegram"
                                className="w-36 h-36 object-contain"
                            />
                        </motion.div>

                        <motion.div variants={fadeInLeft} className="flex flex-col gap-3">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">
                                Telegram kanal
                            </h3>
                            <p className="text-zinc-300 max-w-md text-sm sm:text-base">
                                Barcha loyihalarimni Telegram kanalimda ham kuzatib borishingiz mumkin!
                            </p>
                            <motion.a
                                {...hoverScale}
                                href="#"
                                className="text-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium shadow-md transition duration-300 text-sm sm:text-base"
                            >
                                Ta’shrif buyurish
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
                            className="absolute -top-7 -left-28 w-44 h-44 object-contain"
                        />
                        <motion.img
                            whileHover={{ rotate: 10, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 150 }}
                            src={megaphoneImg}
                            alt="megaphone"
                            className="w-28 h-28 sm:w-40 sm:h-40 object-contain relative z-10"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Project
