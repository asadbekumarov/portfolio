import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import gmailImg from '../assets/sidebarImg/gmail.png';
import githubImg from '../assets/sidebarImg/github.png';
import telegramImg from '../assets/sidebarImg/telegram.png';
import telefonImg from '../assets/sidebarImg/telefon.png';
import logo from '../assets/headerImg/logo.jpg';
import { HiHome, HiUser, HiFolder, HiMail } from 'react-icons/hi';


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navIcons = [<HiHome />, <HiUser />, <HiFolder />, <HiMail />];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const linkClasses = ({ isActive }) =>
        `relative flex items-center gap-2 px-3 font-jetbrains py-2 rounded-lg font-medium transition-colors duration-300
    ${isActive ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-white hover:text-emerald-400 hover:border-b-2 hover:border-emerald-400'}`;


    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const contacts = [
        {
            img: gmailImg,
            title: 'Gmail',
            value: 'asadbekumarov922@gmail.com',
            link: 'https://mail.google.com/mail/?view=cm&fs=1&to=asadbekumarov922@gmail.com',
        },
        {
            img: githubImg,
            title: 'GitHub',
            value: 'asadbekumarov',
            link: 'https://github.com/asadbekumarov',
        },
        {
            img: telegramImg,
            title: 'Telegram',
            value: '@asad_umarov',
            link: 'https://t.me/asad_umarov',
        },
        {
            img: telefonImg,
            title: 'Telefon',
            value: '+998949011202',
            link: 'tel:+998949011202',
        },
    ];

    const menuVariants = {
        closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
        open: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } }
    };

    const itemVariants = {
        closed: { x: -20, opacity: 0 },
        open: (i) => ({ x: 0, opacity: 1, transition: { delay: i * 0.1, duration: 0.3 } })
    };

    return (
        <motion.header
            className={`sticky top-0 z-50 ${isScrolled ? 'bg-[#1b1b1b] ' : 'bg-[#1b1b1b]'} border-b border-gray-700 transition-all duration-300`}
        >
            <div className="relative flex justify-between items-center px-4 sm:px-6 lg:px-8 py-[19px]">
                {/* Logo */}
                <motion.h1
                    className="flex items-center gap-3 font-code sm:text-2xl md:text-3xl font-bold text-white cursor-pointer group"
                    // whileHover={{ scale: 1.05 }} // umumiy kattalashish
                    transition={{ duration: 0.25 }}
                >
                    {/* Logo */}
                    <motion.img
                        src={logo}
                        alt="Logo"
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-emerald-400 object-cover
                   transition-all duration-300 group-hover:border-[4px] group-hover:shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                    />

                    {/* Text */}
                    <NavLink
                        to="/"
                        className="transition-colors duration-300 group-hover:text-emerald-400 group-hover:text-glow"
                    >
                        Umarov Asadbek
                    </NavLink>

                </motion.h1>


                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center justify-center gap-6">
                    <ul className="flex items-center gap-4 lg:gap-6">
                        {['/', '/aboutMe', '/projects', '/certificates', '/contact'].map((path, index) => {
                            const labels = ['Bosh sahifa', 'Haqida', 'Loyihalar', 'Bog\'lanish'];
                            return (
                                <motion.li
                                    key={path}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <NavLink to={path} className={linkClasses}>
                                        {navIcons[index]}
                                        {labels[index]}
                                    </NavLink>
                                </motion.li>
                            );
                        })}
                    </ul>

                    {/* Vertical separator */}
                    <div className="h-6 w-px bg-gray-600 mx-3"></div>

                    {/* Gradient CV Button */}
                    <motion.a
                        href="/Asadbek Umarov Resume.pdf" // CV fayling yo'li
                        download="Umarov-Asadbek-CV.pdf"
                        className="px-6 py-2 rounded-lg font-medium text-white 
           bg-gradient-to-r from-emerald-500 to-green-400 
           shadow-[0_0_10px_rgba(16,185,129,0.5)]
           transition-all duration-300
           hover:from-green-400 hover:to-emerald-500
           hover:shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        CV
                    </motion.a>
                </nav>


                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden p-2 rounded-lg text-white hover:text-emerald-400 transition-all duration-300"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isMenuOpen ? 'close' : 'open'}
                            initial={{ rotate: 0, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </motion.div>
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        className="md:hidden border-t border-emerald-500/20"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <ul className="flex flex-col">
                            {['/', '/aboutMe', '/projects', '/contact'].map((path, index) => {
                                const labels = ['Bosh sahifa', 'Haqida', 'Loyihalar', 'Bog\'lanish'];
                                return (
                                    <motion.li
                                        key={path}
                                        variants={itemVariants}
                                        initial="closed"
                                        animate="open"
                                        custom={index}
                                    >
                                        <NavLink
                                            to={path}
                                            className="block px-6 py-4 text-gray-300 hover:text-emerald-400 transition-all duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {labels[index]}
                                        </NavLink>
                                    </motion.li>
                                );
                            })}
                        </ul>

                        {/* Contacts */}
                        <motion.div
                            className="p-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                        >
                            <h3 className="text-emerald-400 font-semibold mb-3 text-center">Bog'lanish</h3>
                            <div className="flex justify-evenly text-center">
                                {contacts.map(({ img, title, value, link }, i) => (
                                    <motion.a
                                        key={i}
                                        href={link}
                                        target={link.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-lg  hover:bg-gray-700 transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <img src={img} alt={title} className="w-16 h-w-16 mb-2" />
                                        <span className="text-sm text-white">{title}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default Header;
