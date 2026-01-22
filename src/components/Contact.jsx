import { useState } from 'react';
import { motion } from 'framer-motion';

// Import all images
import gmailIcon from '../assets/contactImg/gmail.svg';
import telegramIcon from '../assets/contactImg/telegram.svg';
import phoneIcon from '../assets/contactImg/telefon.svg';

const contacts = [
    {
        icon: gmailIcon,
        title: "E-pochta",
        value: "asadbekumarov922@gmail.com",
        link: "mailto:asadbekumarov922@gmail.com"
    },
    {
        icon: telegramIcon,
        title: "Telegram",
        value: "t.me/asad_umarov",
        link: "https://t.me/asad_umarov"
    },
    {
        icon: phoneIcon,
        title: "Telefon raqam",
        value: "+998 (77) 267-78-65",
        link: "tel:+998772677865"
    },
];

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const titleFade = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const lineGrow = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const cardFadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const containerStagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
        if (errors[e.target.id]) {
            setErrors(prev => ({ ...prev, [e.target.id]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Ism kiritilishi shart";
        if (!formData.email.trim()) {
            newErrors.email = "Email kiritilishi shart";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) newErrors.email = "Yaroqli email kiriting";
        }
        if (!formData.message.trim()) newErrors.message = "Xabar bo'sh bo'lishi mumkin emas";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form ma'lumotlari:", formData);
            setFormData({ name: '', email: '', message: '' });
            alert("Xabaringiz uchun rahmat!");
        }
    };

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen">
            <div className="max-w-7xl mx-auto">

                {/* Contact Cards Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={titleFade}
                    className="mb-16 md:mb-20"
                >
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-main mb-4"
                        style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                        Aloqa
                    </h2>
                    <motion.div
                        className="w-20 h-1 bg-primary mb-10"
                        variants={lineGrow}
                    />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-20 md:mb-28"
                    initial="hidden"
                    animate="visible"
                    variants={containerStagger}
                >
                    {contacts.map((contact, index) => (
                        <motion.a
                            key={index}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 md:p-8 bg-surface border border-border rounded-2xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer group"
                            variants={cardFadeUp}
                            whileHover={{
                                y: -8,
                                borderColor: '#0284C7',
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.img
                                src={contact.icon}
                                alt={contact.title}
                                className="w-12 h-12 md:w-14 md:h-14 mb-4"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            />
                            <h3
                                className="text-lg md:text-xl font-semibold text-main mb-2 group-hover:text-primary transition-colors duration-300"
                                style={{ fontFamily: '"Fira Code", monospace' }}
                            >
                                {contact.title}
                            </h3>
                            <p
                                className="text-muted text-sm md:text-base"
                                style={{ fontFamily: '"Fira Code", monospace' }}
                            >
                                {contact.value}
                            </p>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Form Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={titleFade}
                    className="mb-10"
                >
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-main mb-4"
                        style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                        So&apos;rov yuborish
                    </h2>
                    <motion.div
                        className="w-20 h-1 bg-primary"
                        variants={lineGrow}
                    />
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-surface border border-border p-6 md:p-8 rounded-2xl max-w-4xl"
                    variants={formVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    noValidate
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label
                                className="block mb-2 font-medium text-main text-sm md:text-base"
                                style={{ fontFamily: '"Fira Code", monospace' }}
                                htmlFor="name"
                            >
                                Ismingiz*
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Ismingizni kiriting"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.name ? 'border-red-500' : 'border-border'} focus:border-primary outline-none transition-colors duration-300 text-main placeholder-muted`}
                                style={{ fontFamily: '"Fira Code", monospace' }}
                                aria-describedby="name-error"
                            />
                            {errors.name && (
                                <p
                                    id="name-error"
                                    className="text-red-500 mt-2 text-xs md:text-sm"
                                    style={{ fontFamily: '"Fira Code", monospace' }}
                                >
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                className="block mb-2 font-medium text-main text-sm md:text-base"
                                style={{ fontFamily: '"Fira Code", monospace' }}
                                htmlFor="email"
                            >
                                Manzilingiz*
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="misol@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.email ? 'border-red-500' : 'border-border'} focus:border-primary outline-none transition-colors duration-300 text-main placeholder-muted`}
                                style={{ fontFamily: '"Fira Code", monospace' }}
                                aria-describedby="email-error"
                            />
                            {errors.email && (
                                <p
                                    id="email-error"
                                    className="text-red-500 mt-2 text-xs md:text-sm"
                                    style={{ fontFamily: '"Fira Code", monospace' }}
                                >
                                    {errors.email}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mb-6">
                        <label
                            className="block mb-2 font-medium text-main text-sm md:text-base"
                            style={{ fontFamily: '"Fira Code", monospace' }}
                            htmlFor="message"
                        >
                            Xabaringiz*
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Xabaringizni kiriting"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.message ? 'border-red-500' : 'border-border'} focus:border-primary outline-none resize-none transition-colors duration-300 text-main placeholder-muted`}
                            style={{ fontFamily: '"Fira Code", monospace' }}
                            aria-describedby="message-error"
                        />
                        {errors.message && (
                            <p
                                id="message-error"
                                className="text-red-500 mt-2 text-xs md:text-sm"
                                style={{ fontFamily: '"Fira Code", monospace' }}
                            >
                                {errors.message}
                            </p>
                        )}
                    </div>

                    <motion.button
                        type="submit"
                        className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                        style={{ fontFamily: '"Fira Code", monospace' }}
                        whileHover={{ scale: 1.05, y: -2 }}
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