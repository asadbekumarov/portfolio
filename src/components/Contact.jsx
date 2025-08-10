import { motion } from 'framer-motion';

// Import all images
import gmailIcon from '../assets/contactImg/gmail.svg';
import telegramIcon from '../assets/contactImg/telegram.svg';
import phoneIcon from '../assets/contactImg/telefon.svg';

function Contact() {
    const contacts = [
        {
            icon: gmailIcon,
            title: "E-pochta",
            value: "pubgn9642@gmail.com",
            link: "mailto:pubgn9642@gmail.com"
        },
        {
            icon: telegramIcon,
            title: "Telegram",
            value: "t.me/mryaxyobek",
            link: "https://t.me/mryaxyobek"
        },
        {
            icon: phoneIcon,
            title: "Telefon raqam",
            value: "+998 (20) 007-77-29",
            link: "tel:+998200077729"
        },
    ];

    // Animatsiya variantlari
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.5 }
        })
    };

    const formVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.3, duration: 0.5 }
        }
    };

    return (
        <section className="px-6 py-12 min-h-screen text-white">
            <div className="max-w-7xl mx-auto w-full">
                {/* Aloqa bo‘limi */}
                <motion.h2
                    className="text-5xl font-extrabold mb-2 tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Aloqa
                </motion.h2>
                <motion.div
                    className="w-32 h-2 rounded-full bg-green-500 mb-10"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                ></motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {contacts.map((contact, index) => (
                        <motion.a
                            key={index}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 bg-[#1B1B1B] border border-gray-700 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center hover:border-green-500"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                        >
                            <img
                                src={contact.icon}
                                alt={contact.title}
                                className="w-12 h-12 mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                            <p className="text-zinc-300">{contact.value}</p>
                        </motion.a>
                    ))}
                </div>

                {/* So‘rov yuborish bo‘limi */}
                <motion.h2
                    className="text-5xl font-extrabold mb-2 tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    So’rov yuborish
                </motion.h2>
                <motion.div
                    className="w-32 h-2 rounded-full bg-green-500 mb-10"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                ></motion.div>

                <motion.form
                    className="space-y-6 bg-[#1B1B1B] border border-gray-700 p-6 rounded-xl shadow-lg"
                    variants={formVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 font-medium" htmlFor="name">Ismingiz*</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Ismingizni kiriting"
                                className="w-full p-3 rounded-lg bg-[#0F0F0F] border border-gray-700 focus:border-green-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium" htmlFor="email">Manzilingiz*</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="misol@gmail.com"
                                className="w-full p-3 rounded-lg bg-[#0F0F0F] border border-gray-700 focus:border-green-500 outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 font-medium" htmlFor="message">Xabaringiz*</label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Xabaringizni kiriting"
                            className="w-full p-3 rounded-lg bg-[#0F0F0F] border border-gray-700 focus:border-green-500 outline-none resize-none"
                        ></textarea>
                    </div>

                    <motion.button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition duration-300 w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Yuborish
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}

export default Contact;
