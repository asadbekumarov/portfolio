import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

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
    const [isOpen, setIsOpen] = useState(false);

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
        <>

            <motion.aside
                className="hidden lg:block border-r border-gray-700 bg-[#1b1b1b] p-4 sticky top-[73px] max-w-[320px] w-full overflow-y-auto"
                style={{ height: 'calc(100vh - 73px)' }}
                initial="hidden"
                animate="visible"
                variants={fadeIn()}
            >
                <div className="flex flex-col items-start text-start">
                    <motion.img
                        className="rounded-xl w-full object-cover mb-2"
                        src={profileImg}
                        alt="Profile"
                        variants={fadeUp}
                    />
                    <motion.h2
                        className="text-lg sm:text-xl font-bold text-white"
                        variants={fadeUp}
                    >
                        Umarov Asadbek
                    </motion.h2>
                    <motion.div
                        className="flex flex-col gap-1 mt-1"
                        variants={fadeUp}
                    >
                        <p className="text-sm sm:text-base text-gray-400">Veb dasturchi</p>
                        <p className="text-sm sm:text-base text-gray-400">Copywriting</p>
                        <p className="text-sm sm:text-base text-gray-400">SEO</p>
                    </motion.div>

                    <hr className="my-2 border-gray-600 w-full" />

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
                                className="flex text-xs items-center gap-3 hover:bg-zinc-700 p-2 rounded-lg transition-colors duration-200"
                                variants={cardFadeUp}
                                whileHover={hoverScale.whileHover}
                                whileTap={hoverScale.whileTap}
                            >
                                <img
                                    src={img}
                                    alt={title}
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                />
                                <div className="text-left min-w-0">
                                    <h3 className="text-xs sm:text-sm font-bold text-white truncate">
                                        {title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-white  break-all">
                                        {value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </motion.aside>
        </>
    );
}

export default Sidebar;

