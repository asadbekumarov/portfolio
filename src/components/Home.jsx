import { motion } from 'framer-motion';
import { FaCode } from "react-icons/fa";
import { GoPeople, GoClock } from "react-icons/go";
import { PiMedalThin } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { Player } from "@lottiefiles/react-lottie-player";
import SEO from './SEO';

import {
    containerStagger,
    cardFadeUp,
    titleFade,
    fadeIn,
} from '../utils/animations';

function Home() {
    const { t } = useTranslation();
    const stats = [
        {
            icon: <FaCode className="text-primary text-4xl md:text-5xl mb-3" />,
            number: '4+',
            label: 'home.stats.projects',
        },
        {
            icon: <GoPeople className="text-primary text-4xl md:text-5xl mb-3" />,
            number: '2+',
            label: 'home.stats.clients',
        },
        {
            icon: <PiMedalThin className="text-primary text-4xl md:text-5xl mb-3" />,
            number: t('home.stats.expValue'),
            label: 'home.stats.experience',
        },
        {
            icon: <GoClock className="text-primary text-4xl md:text-5xl mb-3" />,
            number: '24/7',
            label: 'home.stats.workingHours',
        },
    ];

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen overflow-hidden">
            <SEO title={t('nav.home')} />
            <div className="max-w-[1300px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <div className="mb-12">
                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-main mb-6 leading-tight"
                                style={{ fontFamily: '"Fira Code", monospace' }}
                                initial="hidden"
                                animate="visible"
                                variants={titleFade}
                            >
                                {t('home.greeting')}{' '}
                                <span className="text-primary">{t('home.name')}</span>
                            </motion.h1>

                            <motion.p
                                className="text-base sm:text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
                                style={{ fontFamily: '"Fira Code", monospace' }}
                                initial="hidden"
                                animate="visible"
                                variants={fadeIn(0.3)}
                            >
                                {t('home.description')}
                            </motion.p>
                        </div>

                        <motion.div
                            className="grid grid-cols-2 gap-4 md:gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerStagger}
                        >
                            {stats.map(({ icon, number, label }, i) => (
                                <motion.div
                                    key={i}
                                    variants={cardFadeUp}
                                    className="premium-card p-6 md:p-8 flex flex-col items-center justify-center group"
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
                                        className="text-muted text-sm md:text-base group-hover:text-primary transition-colors duration-300 text-center"
                                        style={{ fontFamily: '"Fira Code", monospace' }}
                                    >
                                        {t(label)}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Lottie Animation for Home */}
                    <motion.div 
                        className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="w-full max-w-[1000px]">
                            <Player
                                autoplay
                                loop
                                src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
                                style={{ height: 'auto', width: '100%' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Home;