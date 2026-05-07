import { motion } from 'framer-motion';
import { FaCode, FaArrowRight, FaTelegramPlane, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GoPeople, GoClock } from "react-icons/go";
import { PiMedalThin } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import profileImg from '../assets/sidebarImg/ozm.jpg';

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
            icon: <FaCode />,
            number: '4+',
            label: 'home.stats.projects',
        },
        {
            icon: <GoPeople />,
            number: '2+',
            label: 'home.stats.clients',
        },
        {
            icon: <PiMedalThin />,
            number: t('home.stats.expValue'),
            label: 'home.stats.experience',
        },
        {
            icon: <GoClock />,
            number: '24/7',
            label: 'home.stats.workingHours',
        },
    ];

    const techStack = ['React', 'Next.js', 'React Native'];
    const socialLinks = [
        { icon: <FaGithub />, link: 'https://github.com/asadbekumarov', label: 'GitHub' },
        { icon: <FaLinkedin />, link: 'https://linkedin.com/in/asadbekumarov', label: 'LinkedIn' },
        { icon: <FaInstagram />, link: 'https://instagram.com/asad_umarov', label: 'Instagram' },
    ];

    return (
        <section className="bg-background text-main min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">
            <SEO title={t('nav.home')} />
            
            <div className="max-w-[1200px] mx-auto w-full flex-1 flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                    
                    {/* Left Column: Text Content */}
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={containerStagger}
                        className="order-2 lg:order-1"
                    >
                        {/* 1. Availability Badge */}
                        <motion.div 
                            variants={fadeIn(0.1)}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-bold tracking-wide">Ishga tayyor</span>
                        </motion.div>

                        {/* 2. Tech Stack Tags */}
                        <motion.div 
                            variants={fadeIn(0.2)}
                            className="flex flex-wrap gap-2 mb-6"
                        >
                            {techStack.map((tech) => (
                                <span 
                                    key={tech}
                                    className="px-3 py-1 rounded-full bg-surface border border-border text-[10px] font-bold uppercase tracking-wider text-muted"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        {/* 3. Main Heading */}
                        <motion.h1 
                            variants={titleFade}
                            className="text-5xl sm:text-6xl lg:text-8xl font-black mb-4 tracking-tight leading-none"
                            style={{ fontFamily: '"Fira Code", monospace' }}
                        >
                            Men <span className="text-primary">Umarov Asadbek</span>
                        </motion.h1>

                        {/* 4. Subtitle */}
                        <motion.p 
                            variants={fadeIn(0.3)}
                            className="text-lg sm:text-xl text-muted font-medium mb-8"
                            style={{ fontFamily: '"Fira Code", monospace' }}
                        >
                            Web dasturchi & Mobile developer
                        </motion.p>

                        {/* 5. Short Bio */}
                        <motion.p 
                            variants={fadeIn(0.4)}
                            className="text-base sm:text-lg text-muted max-w-lg leading-relaxed mb-10"
                        >
                            Zamonaviy va samarali veb-echimlar va mobile-echimlar yaratishga ixtisoslashganman. 
                            Foydalanuvchi tajribasini yaxshilash va sifatli mahsulotlar ishlab chiqish mening ustuvor vazifamdir.
                        </motion.p>

                        {/* 6. CTA Buttons */}
                        <motion.div 
                            variants={fadeIn(0.5)}
                            className="flex flex-wrap gap-4 mb-8"
                        >
                            <Link to="/projects">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-2 transition-all"
                                >
                                    Loyihalar <FaArrowRight size={14} />
                                </motion.button>
                            </Link>
                            <a href="https://t.me/asad_umarov" target="_blank" rel="noreferrer">
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(var(--primary), 0.1)' }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border-2 border-border text-main font-bold px-8 py-[14px] rounded-2xl flex items-center gap-2 transition-all"
                                >
                                    <FaTelegramPlane size={18} /> Telegram
                                </motion.button>
                            </a>
                        </motion.div>

                        {/* 7. Social Icons */}
                        <motion.div 
                            variants={fadeIn(0.6)}
                            className="flex gap-4"
                        >
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -3, color: 'rgb(var(--primary))' }}
                                    className="p-3 rounded-xl bg-surface border border-border text-muted transition-all"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Profile Image */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 relative flex justify-center"
                    >
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
                            {/* Circular Image Wrapper */}
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-border p-2 bg-surface/50 backdrop-blur-sm">
                                <img 
                                    src={profileImg} 
                                    alt="Umarov Asadbek" 
                                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>

                            {/* Floating Stat Cards */}
                            {/* Top-Left: Experience */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -left-4 sm:top-4 sm:-left-8 bg-surface border border-border p-4 rounded-2xl shadow-2xl backdrop-blur-md"
                            >
                                <p className="text-[10px] uppercase font-bold text-muted tracking-widest mb-1">Tajriba</p>
                                <p className="text-sm font-black text-primary">1+ yil</p>
                            </motion.div>

                            {/* Bottom-Right: Projects */}
                            <motion.div 
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -right-4 sm:bottom-4 sm:-right-8 bg-surface border border-border p-4 rounded-2xl shadow-2xl backdrop-blur-md"
                            >
                                <p className="text-[10px] uppercase font-bold text-muted tracking-widest mb-1">Loyihalar</p>
                                <p className="text-sm font-black text-primary">4+ ta</p>
                            </motion.div>
                            
                            {/* Decorative Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[100px] -z-10" />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom: Stats Bar */}
                <motion.div 
                    variants={cardFadeUp}
                    initial="hidden"
                    animate="visible"
                    className="w-full bg-surface border border-border rounded-[2.5rem] p-6 lg:p-10 flex flex-wrap justify-around items-center gap-8 lg:gap-4 shadow-2xl"
                >
                    {stats.map(({ icon, number, label }, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                            <div className="text-2xl text-primary group-hover:scale-110 transition-transform">
                                {icon}
                            </div>
                            <div>
                                <h3 className="text-xl lg:text-2xl font-black">{number}</h3>
                                <p className="text-[10px] uppercase font-bold text-muted tracking-widest">{t(label)}</p>
                            </div>
                            {i < stats.length - 1 && (
                                <div className="hidden lg:block w-px h-10 bg-border ml-8" />
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Home;
