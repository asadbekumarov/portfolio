import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Player } from "@lottiefiles/react-lottie-player";
import SEO from "./SEO";

// Import all images
import gmailIcon from "../assets/contactImg/gmail.svg";
import telegramIcon from "../assets/contactImg/telegram.svg";
import phoneIcon from "../assets/contactImg/telefon.svg";

function Contact() {
  const { t } = useTranslation();

  const contacts = [
    {
      icon: gmailIcon,
      title: "contacts.emailTitle",
      value: "asadbekumarov922@gmail.com",
      link: "mailto:asadbekumarov922@gmail.com",
    },
    {
      icon: telegramIcon,
      title: "contacts.telegram",
      value: "t.me/asad_umarov",
      link: "https://t.me/asad_umarov",
    },
    {
      icon: phoneIcon,
      title: "contacts.phoneTitle",
      value: "+998 (77) 267-78-65",
      link: "tel:+998772677865",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const titleFade = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const lineGrow = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    if (errors[e.target.id]) {
      setErrors((prev) => ({ ...prev, [e.target.id]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('contact.errors.nameRequired');
    if (!formData.email.trim()) {
      newErrors.email = t('contact.errors.emailRequired');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email))
        newErrors.email = t('contact.errors.emailInvalid');
    }
    if (!formData.message.trim())
      newErrors.message = t('contact.errors.messageRequired');
    return newErrors;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    try {
      // Backend API ga POST yuborish
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(t('contact.alerts.success'));
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(t('contact.alerts.error') + (data.error || "Noma'lum xatolik"));
      }
    } catch (err) {
      console.error("Error sending message:", err);
      alert(t('contact.alerts.generalError'));
    }
  }
};

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen">
      <SEO title={t('nav.contact')} />
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            {/* Contact Cards Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={titleFade}
              className="mb-10"
            >
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-main mb-4"
                style={{ fontFamily: '"Fira Code", monospace' }}
              >
                {t('contact.title')}
              </h2>
              <motion.div
                className="w-20 h-1 bg-primary"
                variants={lineGrow}
              />
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
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
                  className="p-6 premium-card flex flex-col items-center text-center group"
                  variants={cardFadeUp}
                >
                  <motion.img
                    src={contact.icon}
                    alt={t(contact.title)}
                    className="w-12 h-12 mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3
                    className="text-lg font-semibold text-main mb-2 group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {t(contact.title)}
                  </h3>
                  <p
                    className="text-muted text-xs sm:text-sm break-all"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {contact.value}
                  </p>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-[450px]">
              <Player 
                 autoplay
                 loop
                 src="https://assets3.lottiefiles.com/packages/lf20_u25cckyh.json" // Email/Contact animation
                 style={{ height: 'auto', width: '100%' }}
               />
            </div>
          </motion.div>
        </div>

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
            {t('contact.formTitle')}
          </h2>
          <motion.div className="w-20 h-1 bg-primary" variants={lineGrow} />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="premium-card p-6 md:p-8 max-w-4xl"
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
                {t('contact.form.nameLabel')}
              </label>
              <input
                id="name"
                type="text"
                placeholder={t('contact.form.namePlaceholder')}
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.name ? "border-red-500" : "border-border"} focus:border-primary outline-none transition-colors duration-300 text-main placeholder-muted`}
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
                {t('contact.form.emailLabel')}
              </label>
              <input
                id="email"
                type="email"
                placeholder={t('contact.form.emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.email ? "border-red-500" : "border-border"} focus:border-primary outline-none transition-colors duration-300 text-main placeholder-muted`}
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
              {t('contact.form.messageLabel')}
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder={t('contact.form.messagePlaceholder')}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-background border ${errors.message ? "border-red-500" : "border-border"} focus:border-primary outline-none resize-none transition-colors duration-300 text-main placeholder-muted`}
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
            {t('contact.form.submitBtn')}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
