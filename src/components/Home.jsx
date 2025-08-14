import { motion } from 'framer-motion';
import { FaCode } from "react-icons/fa";
import { GoPeople, GoClock } from "react-icons/go";
import { PiMedalThin } from "react-icons/pi";

import {
    containerStagger,
    cardFadeUp,
    titleFade,
    fadeIn,
} from '../utils/animations';

function Home() {
    const stats = [
        {
            icon: <FaCode className="mx-auto text-green-500 text-3xl sm:text-4xl md:text-5xl mb-2" />,
            number: '4+',
            label: 'Loyihalar',
        },
        {
            icon: <GoPeople className="mx-auto text-green-500 text-3xl sm:text-4xl md:text-5xl mb-2" />,
            number: '2+',
            label: 'Mijozlar',
        },
        {
            icon: <PiMedalThin className="mx-auto text-green-500 text-3xl sm:text-4xl md:text-5xl mb-2" />,
            number: '1+ yil',
            label: 'Tajriba',
        },
        {
            icon: <GoClock className="mx-auto text-green-500 text-3xl sm:text-4xl md:text-5xl mb-2" />,
            number: '24/7',
            label: 'Ish vaqti',
        },
    ];

    return (
        <div className="flex items-center justify-center min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center p-4 sm:p-6 md:p-8 rounded-lg max-w-3xl w-full">

                {/* Sarlavha */}
                <motion.h1
                    className="text-2xl font-code sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-snug px-2 "
                    initial="hidden"
                    animate="visible"
                    variants={titleFade}
                >
                    Assalomu alaykum, Men <span className="text-green-500">Umarov Asadbek</span>man
                </motion.h1>

                {/* Tavsif */}
                <motion.p
                    className="text-sm font-code sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-10 px-2 leading-relaxed "
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn(0.3)}
                >
                    Veb dasturchi va dizayner sifatida, samarali va natijaga yo'naltirilgan yechimlar yaratishga intilaman. Veb-saytlar hamda veb-ilovalarni ishlab chiqish va boshqarish orqali, foydalanuvchi tajribasini mukammallashtirish va mahsulot muvaffaqiyatini ta'minlash mening asosiy maqsadimdir.
                </motion.p>

                {/* Statistik kartalar */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerStagger}
                >
                    {stats.map(({ icon, number, label }, i) => (
                        <motion.div
                            key={i}
                            variants={cardFadeUp}
                            className="bg-[#1B1B1B] rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center shadow-md hover:shadow-green-500/30 transition duration-300 cursor-default"
                        >
                            {icon}
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{number}</h3>
                            <p className="text-gray-400 mt-1 text-xs sm:text-sm md:text-base">{label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Home;
