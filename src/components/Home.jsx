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
            icon: <FaCode className="mx-auto text-green-500 text-5xl mb-2" />,
            number: '4+',
            label: 'Loyihalar',
        },
        {
            icon: <GoPeople className="mx-auto text-green-500 text-5xl mb-2" />,
            number: '2+',
            label: 'Mijozlar',
        },
        {
            icon: <PiMedalThin className="mx-auto text-green-500 text-5xl mb-2" />,
            number: '1+ yil',
            label: 'Tajriba',
        },
        {
            icon: <GoClock className="mx-auto text-green-500 text-5xl mb-2" />,
            number: '24/7',
            label: 'Ish vaqti',
        },
    ];

    return (
        <div className="flex items-center justify-center min-h-screen max-w-7xl mx-auto px-4">
            <div className="text-center p-6 sm:p-8 rounded-lg max-w-3xl">

                {/* Sarlavha */}
                <motion.h1
                    className="text-3xl sm:text-5xl font-bold mb-4 text-white leading-snug"
                    initial="hidden"
                    animate="visible"
                    variants={titleFade}
                >
                    Assalomu alaykum, Men <span className="text-green-500">Umarov Asadbek</span>man
                </motion.h1>

                {/* Tavsif */}
                <motion.p
                    className="text-base sm:text-lg text-gray-300 mb-10"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn(0.3)}
                >
                    Veb dasturchi va dizayner sifatida, samarali va natijaga yo‘naltirilgan yechimlar yaratishga intilaman. Veb-saytlar hamda veb-ilovalarni ishlab chiqish va boshqarish orqali, foydalanuvchi tajribasini mukammallashtirish va mahsulot muvaffaqiyatini ta’minlash mening asosiy maqsadimdir.
                </motion.p>

                {/* Statistik kartalar */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerStagger}
                >
                    {stats.map(({ icon, number, label }, i) => (
                        <motion.div
                            key={i}
                            variants={cardFadeUp}
                            className="bg-[#1B1B1B] rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center shadow-md hover:shadow-green-500/30 transition duration-300 cursor-default"
                        >
                            {icon}
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">{number}</h3>
                            <p className="text-gray-400 mt-1 text-sm sm:text-base">{label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Home;
