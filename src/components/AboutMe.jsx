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
    hoverScale,
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

function AboutMe() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 min-h-screen">
            <div className="max-w-7xl mx-auto">

                {/* About section */}
                <motion.div
                    className="mb-12 sm:mb-16 max-w-3xl"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 text-white tracking-tight"
                        variants={titleFade}
                    >
                        Men haqimda
                    </motion.h2>
                    <motion.div
                        className="w-24 sm:w-32 h-2 rounded-full bg-green-500 mb-4 sm:mb-6"
                        variants={lineGrow}
                    />
                    <motion.p
                        className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
                        variants={fadeIn(0.2)}
                    >
                        Men Asadbek, 18 yoshdaman. Veb dasturchiman va zamonaviy texnologiyalar yordamida oddiy, samarali veb-loyihalar yarataman. Doim o'rganishga ochiqman va yangi bilimlarni amaliyotda qo'llashga intilaman.                                          </motion.p>
                    <Link to="/contact">
                        <motion.button
                            className="mt-6 sm:mt-8 bg-green-500 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-green-600 transition duration-300 shadow-lg text-sm sm:text-base"
                            variants={fadeIn(0.4)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Bog&apos;lanish
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Stats section */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center mb-16 sm:mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerStagger}
                >
                    {[{
                        icon: <FaCode className="mx-auto text-green-500 text-3xl sm:text-4xl md:text-5xl mb-2" />,
                        number: '4+',
                        label: 'Loyihalar',
                    }, {
                        icon: <GoPeople className="mx-auto text-green-500 text-3xl sm:text-4xl md:text-5xl mb-2" />,
                        number: '2+',
                        label: 'Mijozlar',
                    }, {
                        icon: <PiMedalThin className="mx-auto text-green-500 text-3xl sm:text-4xl md:text-5xl mb-2" />,
                        number: '1+ yil',
                        label: 'Tajriba',
                    }, {
                        icon: <GoClock className="mx-auto text-green-500 text-3xl sm:text-4xl md:text-5xl mb-2" />,
                        number: '24/7',
                        label: 'Ish vaqti',
                    }].map(({ icon, number, label }, i) => (
                        <motion.div
                            key={i}
                            variants={cardFadeUp}
                            className="bg-[#1B1B1B] rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default"
                        >
                            {icon}
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{number}</h3>

                            <p className="text-gray-400 mt-1 text-xs sm:text-sm md:text-base">{label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tools section */}
                <motion.div
                    className="mb-16 sm:mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerStagger}
                >
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white tracking-tight"
                        variants={titleFade}
                    >
                        Asbob uskunalari
                    </motion.h2>
                    <motion.div
                        className="w-20 sm:w-28 h-2 rounded-full bg-green-500 mb-6 sm:mb-8"
                        variants={lineGrow}
                    />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                variants={cardFadeUp}
                                className="relative bg-[#1B1B1B] border border-gray-600 rounded-xl cursor-pointer overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 flex items-center justify-center h-24 sm:h-32 md:h-36"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                whileHover={hoverScale.whileHover}
                                whileTap={hoverScale.whileTap}
                            >
                                <motion.img
                                    src={tool.img}
                                    alt={tool.name}
                                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                                    animate={{ opacity: hoveredIndex === index ? 0 : 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="absolute text-white font-semibold text-sm sm:text-lg md:text-xl select-none text-center px-2"
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
                    className="mb-16 sm:mb-20 max-w-6xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerStagger}
                >
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white tracking-tight"
                        variants={titleFade}
                    >
                        Men nimalar qila olaman
                    </motion.h2>
                    <motion.div
                        className="w-20 sm:w-28 h-2 rounded-full bg-green-500 mb-8 sm:mb-10"
                        variants={lineGrow}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {[{
                            img: seoImg,
                            title: "Seo",
                            desc: "Qidiruv tizimining natijalarida sayt reytingini yaxshilash",
                        }, {
                            img: designImg,
                            title: "Dizayn",
                            desc: "Veb-saytlar va ilovalar uchun zamonaviy dizayn yaratish",
                        }, {
                            img: qualityImg,
                            title: "Sifat",
                            desc: "Veb-saytlar va ilovalar uchun yuqori sifatli kontent yaratish",
                        }, {
                            img: fastImg,
                            title: "Tezkor",
                            desc: "Veb-saytlar va ilovalar uchun tezkor yechimlar taklif qilish",
                        }].map(({ img, title, desc }, i) => (
                            <motion.div
                                key={i}
                                variants={cardFadeUp}
                                className="flex items-start gap-3 sm:gap-5 bg-[#1B1B1B] border border-gray-600 rounded-xl p-4 sm:p-6 shadow hover:shadow-lg transition-shadow duration-300"
                            >
                                <img src={img} alt={title} className="w-12 h-12 sm:w-16 sm:h-16 object-contain flex-shrink-0" />
                                <div className="min-w-0">
                                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{title}</h4>
                                    <p className="text-gray-400 mt-1 text-sm sm:text-base">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Clients */}
                <motion.div
                    className="mb-16 sm:mb-20 max-w-4xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerStagger}
                >
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white tracking-tight"
                        variants={titleFade}
                    >
                        Mijozlar
                    </motion.h2>
                    <motion.div
                        className="w-20 sm:w-28 h-2 rounded-full bg-green-500 mb-6 sm:mb-8"
                        variants={lineGrow}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {[1, 2].map((_, i) => (
                            <motion.div
                                key={i}
                                variants={cardFadeUp}
                                whileHover={hoverScale.whileHover}
                                className="bg-[#1B1B1B] rounded-xl py-8 sm:py-10 border border-gray-600 flex items-center justify-center cursor-pointer shadow hover:shadow-lg transition-shadow duration-300"
                            >
                                <img className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain' src={milliyImg} alt="Milliy Mijoz" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default AboutMe;
