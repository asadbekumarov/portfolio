// import { motion } from 'framer-motion';

// // Import all images
// import gmailIcon from '../assets/contactImg/gmail.svg';
// import telegramIcon from '../assets/contactImg/telegram.svg';
// import phoneIcon from '../assets/contactImg/telefon.svg';

// function Contact() {
//     const contacts = [
//         {
//             icon: gmailIcon,
//             title: "E-pochta",
//             value: "asadbekumarov@gmail.com",
//             link: "mailto:asadbekumarov@gmail.com"
//         },
//         {
//             icon: telegramIcon,
//             title: "Telegram",
//             value: "t.me/asadbekumarov",
//             link: "https://t.me/asadbekumarov"
//         },
//         {
//             icon: phoneIcon,
//             title: "Telefon raqam",
//             value: "+998 (94) 901-12-02",
//             link: "tel:+998949011202"
//         },
//     ];

//     // Animatsiya variantlari
//     const cardVariants = {
//         hidden: { opacity: 0, y: 50 },
//         visible: (i) => ({
//             opacity: 1,
//             y: 0,
//             transition: { delay: i * 0.2, duration: 0.5 }
//         })
//     };

//     const formVariants = {
//         hidden: { opacity: 0, scale: 0.9 },
//         visible: {
//             opacity: 1,
//             scale: 1,
//             transition: { delay: 0.3, duration: 0.5 }
//         }
//     };

//     return (
//         <section className="px-6 py-12 min-h-screen text-white">
//             <div className="max-w-7xl mx-auto w-full">
//                 {/* Aloqa bo‘limi */}
//                 <motion.h2
//                     className="text-5xl font-extrabold mb-2 tracking-tight"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     Aloqa
//                 </motion.h2>
//                 <motion.div
//                     className="w-32 h-2 rounded-full bg-green-500 mb-10"
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: 1 }}
//                     transition={{ duration: 0.5 }}
//                 ></motion.div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//                     {contacts.map((contact, index) => (
//                         <motion.a
//                             key={index}
//                             href={contact.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="p-6 bg-[#1B1B1B] border border-gray-700 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center hover:border-green-500"
//                             variants={cardVariants}
//                             initial="hidden"
//                             animate="visible"
//                             custom={index}
//                         >
//                             <img
//                                 src={contact.icon}
//                                 alt={contact.title}
//                                 className="w-12 h-12 mb-4"
//                             />
//                             <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
//                             <p className="text-zinc-300">{contact.value}</p>
//                         </motion.a>
//                     ))}
//                 </div>

//                 {/* So‘rov yuborish bo‘limi */}
//                 <motion.h2
//                     className="text-5xl font-extrabold mb-2 tracking-tight"
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     So’rov yuborish
//                 </motion.h2>
//                 <motion.div
//                     className="w-32 h-2 rounded-full bg-green-500 mb-10"
//                     initial={{ scaleX: 0 }}
//                     whileInView={{ scaleX: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                 ></motion.div>

//                 <motion.form
//                     className="space-y-6 bg-[#1B1B1B] border border-gray-700 p-6 rounded-xl shadow-lg"
//                     variants={formVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                 >
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                         <div>
//                             <label className="block mb-2 font-medium" htmlFor="name">Ismingiz*</label>
//                             <input
//                                 id="name"
//                                 type="text"
//                                 placeholder="Ismingizni kiriting"
//                                 className="w-full p-3 rounded-lg bg-[#0F0F0F] border border-gray-700 focus:border-green-500 outline-none"
//                             />
//                         </div>

//                         <div>
//                             <label className="block mb-2 font-medium" htmlFor="email">Manzilingiz*</label>
//                             <input
//                                 id="email"
//                                 type="email"
//                                 placeholder="misol@gmail.com"
//                                 className="w-full p-3 rounded-lg bg-[#0F0F0F] border border-gray-700 focus:border-green-500 outline-none"
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <label className="block mb-2 font-medium" htmlFor="message">Xabaringiz*</label>
//                         <textarea
//                             id="message"
//                             rows="4"
//                             placeholder="Xabaringizni kiriting"
//                             className="w-full p-3 rounded-lg bg-[#0F0F0F] border border-gray-700 focus:border-green-500 outline-none resize-none"
//                         ></textarea>
//                     </div>

//                     <motion.button
//                         type="submit"
//                         className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition duration-300 w-full sm:w-auto"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         Yuborish
//                     </motion.button>
//                 </motion.form>
//             </div>
//         </section>
//     );
// }

// export default Contact;
import React, { useState } from 'react';
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
            value: "asadbekumarov922@gmail.com",
            link: "mailto:asadbekumarov922@gmail.com"
        },
        {
            icon: telegramIcon,
            title: "Telegram",
            value: "t.me/asadbekumarov",
            link: "https://t.me/asadbekumarov"
        },
        {
            icon: phoneIcon,
            title: "Telefon raqam",
            value: "+998 (94) 901-12-02",
            link: "tel:+998949011202"
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

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Validation error state
    const [errors, setErrors] = useState({});

    // Input o‘zgarishini boshqarish
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    // Formani tekshirish (validation)
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Ism kiritilishi shart";
        if (!formData.email.trim()) newErrors.email = "Email kiritilishi shart";
        else {
            // Oddiy email regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) newErrors.email = "Yaroqli email kiriting";
        }
        if (!formData.message.trim()) newErrors.message = "Xabar bo‘sh bo‘lishi mumkin emas";
        return newErrors;
    };

    // Formani yuborish
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            // Ma'lumotni yuborish uchun kod shu yerga yoziladi
            console.log("Form ma'lumotlari:", formData);

            // Yuborilgandan keyin forma tozalash
            setFormData({ name: '', email: '', message: '' });
            alert("Xabaringiz uchun rahmat!");
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
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-[#1B1B1B] border border-gray-700 p-6 rounded-xl shadow-lg"
                    variants={formVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    noValidate
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 font-medium" htmlFor="name">Ismingiz*</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Ismingizni kiriting"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full p-3 rounded-lg bg-[#0F0F0F] border ${errors.name ? 'border-red-500' : 'border-gray-700'} focus:border-green-500 outline-none`}
                                aria-describedby="name-error"
                            />
                            {errors.name && <p id="name-error" className="text-red-500 mt-1 text-sm">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block mb-2 font-medium" htmlFor="email">Manzilingiz*</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="misol@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full p-3 rounded-lg bg-[#0F0F0F] border ${errors.email ? 'border-red-500' : 'border-gray-700'} focus:border-green-500 outline-none`}
                                aria-describedby="email-error"
                            />
                            {errors.email && <p id="email-error" className="text-red-500 mt-1 text-sm">{errors.email}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 font-medium" htmlFor="message">Xabaringiz*</label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Xabaringizni kiriting"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-lg bg-[#0F0F0F] border ${errors.message ? 'border-red-500' : 'border-gray-700'} focus:border-green-500 outline-none resize-none`}
                            aria-describedby="message-error"
                        ></textarea>
                        {errors.message && <p id="message-error" className="text-red-500 mt-1 text-sm">{errors.message}</p>}
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
