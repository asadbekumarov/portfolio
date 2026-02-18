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
            number: '1yil',
            label: 'Tajriba',
        },
        {
            icon: <GoClock className="text-primary text-4xl md:text-5xl mb-3" />,
            number: '24/7',
            label: 'Ish vaqti',
        },
    ];

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen">
            <div className="max-w-[1300px] mx-auto">
                <div className="mb-16 md:mb-20">
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-main mb-6 leading-tight"
                        style={{ fontFamily: '"Fira Code", monospace' }}
                        initial="hidden"
                        animate="visible"
                        variants={titleFade}
                    >
                        Assalomu alaykum, Men{' '}
                        <span className="text-primary">Umarov Asadbek</span>                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-muted max-w-3xl leading-relaxed"
                        style={{ fontFamily: '"Fira Code", monospace' }}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn(0.3)}
                    >
                        Veb dasturchi va dizayner sifatida, samarali va natijaga yo&apos;naltirilgan yechimlar yaratishga intilaman. Veb-saytlar hamda veb-ilovalarni ishlab chiqish va boshqarish orqali, foydalanuvchi tajribasini mukammallashtirish va mahsulot muvaffaqiyatini ta&apos;minlash mening asosiy maqsadimdir.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
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
            </div>
        </section>
    );
}

export default Home;