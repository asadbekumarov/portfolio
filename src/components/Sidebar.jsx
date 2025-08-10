import React from 'react';
import { motion } from 'framer-motion';

import profileImg from '../assets/sidebarImg/ozm.jpg';
import gmailImg from '../assets/sidebarImg/gmail.png';
import githubImg from '../assets/sidebarImg/github.png';
import telegramImg from '../assets/sidebarImg/telegram.png';
import telefonImg from '../assets/sidebarImg/telefon.png';

import {
    fadeIn,
    fadeUp,
    containerStagger,
    cardFadeUp,
    hoverScale,
} from '../utils/animations'; 

function Sidebar() {
    const contacts = [
        {
            img: gmailImg,
            title: 'E-pochta',
            value: 'asadbekumarov922@gmail.com',
            link: 'https://mail.google.com/mail/?view=cm&fs=1&to=asadbekumarov922@gmail.com',
        },

        {
            img: githubImg,
            title: 'Github',
            value: 'github.com/asadbekumarov',
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
            title: 'Telefon raqam',
            value: '+998 94 901 12 02',
            link: 'tel:+998949011202',
        },
    ];

    return (
        <motion.aside
            className="bg-zinc-800 p-4 sticky max-w-[320px] w-full overflow-y-auto"
            style={{ top: '73px', height: 'calc(100vh - 73px)' }}
            initial="hidden"
            animate="visible"
            variants={fadeIn()}
        >
            <div className="flex flex-col items-start text-start">
                {/* Profil rasmi */}
                <motion.img
                    className="rounded-xl w-full object-cover mb-2"
                    src={profileImg}
                    alt="Profile"
                    variants={fadeUp}
                />
                <motion.h2
                    className="text-xl font-bold text-white"
                    variants={fadeUp}
                >
                    Umarov Asadbek
                </motion.h2>
                <motion.div
                    className="flex flex-col gap-1 mt-1"
                    variants={fadeUp}
                >
                    <p className="text-gray-400">Veb dasturchi</p>
                    <p className="text-gray-400">Frontend va Backend dasturchi</p>
                    <p className="text-gray-400">Copywriting</p>
                    <p className="text-gray-400">SEO</p>
                </motion.div>

                <hr className="my-2 border-gray-600 w-full" />

                {/* Kontakt ma'lumotlari */}
                <motion.div
                    className="flex flex-col w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerStagger}
                >
                    {contacts.map(({ img, title, value, link }, i) => (
                        <motion.a
                            key={i}
                            href={link}
                            target={link.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:bg-zinc-700 p-2 rounded-lg transition-colors duration-200"
                            variants={cardFadeUp}
                            whileHover={hoverScale.whileHover}
                            whileTap={hoverScale.whileTap}
                        >
                            <img src={img} alt={title} className="w-8 h-8" />
                            <div className="text-left">
                                <h3 className="text-lg font-bold text-white">{title}</h3>
                                <p className="text-white break-all">{value}</p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </motion.aside>
    );
}

export default Sidebar;
