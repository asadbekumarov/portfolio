import { motion } from 'framer-motion';
import { FaCode, FaArrowRight, FaTelegramPlane } from "react-icons/fa";
import { GoPeople, GoClock } from "react-icons/go";
import { PiMedalThin } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from 'react-router-dom';
import SEO from './SEO';

import {
    containerStagger,
    cardFadeUp,
    titleFade,
    fadeIn,
    lineGrow,
} from '../utils/animations';

function Home() {
    const { t } = useTranslation();
    const stats = [
        {
            icon: <FaCode className="text-primary text-3xl mb-2" />,
            number: '4+',
            label: 'home.stats.projects',
        },
        {
            icon: <GoPeople className="text-primary text-3xl mb-2" />,
            number: '2+',
            label: 'home.stats.clients',
        },
        {
            icon: <PiMedalThin className="text-primary text-3xl mb-2" />,
            number: t('home.stats.expValue'),
            label: 'home.stats.experience',
        },
        {
            icon: <GoClock className="text-primary text-3xl mb-2" />,
            number: '24/7',
            label: 'home.stats.workingHours',
        },
    ];

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen overflow-hidden flex items-center">
            <SEO title={t('nav.home')} />
            <div className="max-w-[1300px] mx-auto w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/* Text Content */}
                    <div className="w-full lg:w-[55%] order-2 lg:order-1">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerStagger}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest"
                                variants={fadeIn(0.1)}
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                {t('nav.home')}
                            </motion.div>

                            <motion.h1
                                className="text-4xl sm:text-5xl lg:text-7xl font-black text-main mb-8 leading-[1.18] sm:leading-[1.15] tracking-tight"
                                style={{ fontFamily: '"Fira Code", monospace' }}
                                variants={titleFade}
                            >
                                {t('home.greeting')}{' '}
                                <span className="text-primary block sm:inline">{t('home.name')}</span>
                            </motion.h1>

                            <motion.div
                                className="w-24 h-1.5 bg-primary rounded-full mb-10"
                                variants={lineGrow}
                            />

                            <motion.p
                                className="text-lg md:text-xl text-muted max-w-2xl leading-[1.75] mb-12 font-medium"
                                style={{ fontFamily: '"Fira Code", monospace' }}
                                variants={fadeIn(0.3)}
                            >
                                {t('home.description')}
                            </motion.p>

                            <motion.div 
                                className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-5 mb-16 w-full [&_a]:w-full sm:[&_a]:w-auto"
                                variants={fadeIn(0.5)}
                            >
                                <Link to="/projects">
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-primary text-white font-black px-10 py-5 rounded-2xl shadow-xl shadow-primary/25 flex items-center gap-3 group transition-all duration-300"
                                        style={{ fontFamily: '"Fira Code", monospace' }}
                                    >
                                        {t('project.title')}
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </Link>
                                <a href="https://t.me/asad_umarov" target="_blank" rel="noreferrer">
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(var(--primary), 0.1)' }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border-2 border-primary/30 text-primary font-black px-10 py-[18px] rounded-2xl flex items-center gap-3 transition-all duration-300"
                                        style={{ fontFamily: '"Fira Code", monospace' }}
                                    >
                                        <FaTelegramPlane size={20} />
                                        Telegram
                                    </motion.button>
                                </a>
                            </motion.div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {stats.map(({ icon, number, label }, i) => (
                                    <motion.div
                                        key={i}
                                        variants={cardFadeUp}
                                        className="premium-card p-6 flex flex-col items-center justify-center group hover:border-primary/50 transition-all duration-500"
                                    >
                                        <div className="group-hover:scale-110 transition-transform duration-300">
                                            {icon}
                                        </div>
                                        <h3 className="text-2xl font-black text-main tracking-tighter">
                                            {number}
                                        </h3>
                                        <p className="text-[10px] text-muted uppercase font-bold tracking-widest text-center mt-1">
                                            {t(label)}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Lottie Animation */}
                    <div className="w-full lg:w-[40%] order-1 lg:order-2 relative">
                        {/* Static Glow Effects (Always visible without animation) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
                        
                        <div className="w-full max-w-[600px] mx-auto relative z-10">
                            <Player
                                autoplay
                                loop
                                src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
                                style={{ height: 'auto', width: '100%' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;