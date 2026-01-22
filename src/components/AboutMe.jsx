import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode } from "react-icons/fa";
import { GoPeople, GoClock } from "react-icons/go";
import { PiMedalThin } from "react-icons/pi";

// Import all images
import htmlImg from '../assets/aboutmeImg/html.svg';
import cssImg from '../assets/aboutmeImg/css.svg';
import jsImg from '../assets/aboutmeImg/js.svg';
import scssImg from '../assets/aboutmeImg/scss.png';
import reactImg from '../assets/aboutmeImg/react.svg';
import tailwindImg from '../assets/aboutmeImg/tailwind.svg';
import nextImg from '../assets/aboutmeImg/next.jpg';
import typescriptImg from '../assets/aboutmeImg/typescript.svg';
import reduxImg from '../assets/aboutmeImg/redux.svg';
import bootstrapImg from '../assets/aboutmeImg/bootstrap.png';
import androidImg from '../assets/aboutmeImg/and.svg';
import reactQueryImg from '../assets/aboutmeImg/reactquery.webp';
import seoImg from '../assets/aboutmeImg/seo.png';
import designImg from '../assets/aboutmeImg/dizayn.png';
import qualityImg from '../assets/aboutmeImg/sifat.png';
import fastImg from '../assets/aboutmeImg/tezkor.png';
import milliyImg from '../assets/aboutmeImg/milliy.png';

import {
    fadeIn,
    fadeUp,
    containerStagger,
    cardFadeUp,
    titleFade,
    lineGrow,
} from '../utils/animations';
import { Link } from 'react-router-dom';

const tools = [
    { img: htmlImg, name: 'HTML' },
    { img: cssImg, name: 'CSS' },
    { img: jsImg, name: 'JavaScript' },
    { img: scssImg, name: 'SCSS' },
    { img: reactImg, name: 'React' },
    { img: tailwindImg, name: 'Tailwind' },
    { img: nextImg, name: 'Next.js' },
    { img: typescriptImg, name: 'TypeScript' },
    { img: reduxImg, name: 'Redux' },
    { img: bootstrapImg, name: 'Bootstrap' },
    { img: androidImg, name: 'Android' },
    { img: reactQueryImg, name: 'React Query' },
];

const stats = [
    {
        icon: <FaCode className="text-primary text-4xl md:text-5xl mb-3" />,
        number: '4+',
        label: 'Loyihalar',
    },
    {
        icon: <GoPeople className="text-primary text-4xl md:text-5xl mb-3" />,
        number: '2+',
        label: 'Mijozlar',
    },
    {
        icon: <PiMedalThin className="text-primary text-4xl md:text-5xl mb-3" />,
        number: '1+ yil',
        label: 'Tajriba',
    },
    {
        icon: <GoClock className="text-primary text-4xl md:text-5xl mb-3" />,
        number: '24/7',
        label: 'Ish vaqti',
    }
];

const capabilities = [
    {
        img: seoImg,
        title: "Seo",
        desc: "Qidiruv tizimining natijalarida sayt reytingini yaxshilash",
    },
    {
        img: designImg,
        title: "Dizayn",
        desc: "Veb-saytlar va ilovalar uchun zamonaviy dizayn yaratish",
    },
    {
        img: qualityImg,
        title: "Sifat",
        desc: "Veb-saytlar va ilovalar uchun yuqori sifatli kontent yaratish",
    },
    {
        img: fastImg,
        title: "Tezkor",
        desc: "Veb-saytlar va ilovalar uchun tezkor yechimlar taklif qilish",
    }
];

function AboutMe() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen">
            <div className="max-w-7xl mx-auto">

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
                        Men haqimda
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
                        Men Asadbek, 18 yoshdaman. Veb dasturchiman va zamonaviy texnologiyalar yordamida oddiy, samarali veb-loyihalar yarataman. Doim o&apos;rganishga ochiqman va yangi bilimlarni amaliyotda qo&apos;llashga intilaman.
                    </motion.p>
                    <Link to="/contact">
                        <motion.button
                            className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                            style={{ fontFamily: '"Fira Code", monospace' }}
                            variants={fadeIn(0.4)}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Bog&apos;lanish
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
                            whileHover={{
                                y: -8,
                                borderColor: '#0284C7',
                                transition: { duration: 0.3 }
                            }}
                            className="bg-surface border border-border rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer group"
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
                                {label}
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
                        Asbob uskunalari
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
                                className="relative bg-surface border border-border rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 flex items-center justify-center h-32 md:h-36 group"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                whileHover={{
                                    y: -6,
                                    borderColor: '#0284C7',
                                    transition: { duration: 0.3 }
                                }}
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
                        Men nimalar qila olaman
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
                                whileHover={{
                                    y: -6,
                                    borderColor: '#0284C7',
                                    transition: { duration: 0.3 }
                                }}
                                className="flex items-start gap-5 bg-surface border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-pointer group"
                            >
                                <motion.img
                                    src={img}
                                    alt={title}
                                    className="w-14 h-14 md:w-16 md:h-16 object-contain flex-shrink-0"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="min-w-0">
                                    <h4
                                        className="text-xl md:text-2xl font-semibold text-main mb-2 group-hover:text-primary transition-colors duration-300"
                                        style={{ fontFamily: '"Fira Code", monospace' }}
                                    >
                                        {title}
                                    </h4>
                                    <p
                                        className="text-muted text-sm md:text-base leading-relaxed"
                                        style={{ fontFamily: '"Fira Code", monospace' }}
                                    >
                                        {desc}
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
                        Mijozlar
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-primary mb-10"
                        variants={lineGrow}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl">
                        {[1, 2].map((_, i) => (
                            <motion.div
                                key={i}
                                variants={cardFadeUp}
                                whileHover={{
                                    y: -6,
                                    borderColor: '#0284C7',
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-surface rounded-2xl py-12 md:py-16 border border-border flex items-center justify-center cursor-pointer transition-all duration-300"
                            >
                                <img
                                    className='w-20 h-20 md:w-24 md:h-24 object-contain'
                                    src={milliyImg}
                                    alt="Milliy Mijoz"
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
