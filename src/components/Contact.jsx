import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Player } from "@lottiefiles/react-lottie-player";
import SEO from "./SEO";
import {
  Send,
  MessageCircle,
  CheckCircle2,
  Mail,
  Phone,
  AtSign,
  Clock,
  MapPin,
} from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
import {
  titleFade,
  lineGrow,
  containerStagger,
  cardFadeUp,
  fadeIn,
} from "../utils/animations";

import gmailIcon from "../assets/contactImg/gmail.svg";
import telegramIcon from "../assets/contactImg/telegram.svg";
import phoneIcon from "../assets/contactImg/telefon.svg";

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const contacts = [
    {
      icon: gmailIcon,
      title: "contacts.emailTitle",
      value: "asadbekumarov1202@gmail.com",
      link: "mailto:asadbekumarov1202@gmail.com",
      gradientFrom: "from-red-500/10",
      gradientTo: "to-orange-500/10",
      borderHover: "hover:border-red-400/40",
      colorHover: "group-hover:text-red-400",
      accent: Mail,
    },
    {
      icon: telegramIcon,
      title: "contacts.telegram",
      value: "@asad_umarov",
      link: "https://t.me/asad_umarov",
      gradientFrom: "from-sky-500/10",
      gradientTo: "to-cyan-500/10",
      borderHover: "hover:border-sky-400/40",
      colorHover: "group-hover:text-sky-400",
      accent: AtSign,
    },
    {
      icon: phoneIcon,
      title: "contacts.phoneTitle",
      value: "+998 77 267-78-65",
      link: "tel:+998772677865",
      gradientFrom: "from-green-500/10",
      gradientTo: "to-emerald-500/10",
      borderHover: "hover:border-green-400/40",
      colorHover: "group-hover:text-green-400",
      accent: Phone,
    },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    if (errors[e.target.id])
      setErrors((prev) => ({ ...prev, [e.target.id]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim())
      newErrors.name = t("contact.errors.nameRequired");
    if (!formData.email.trim()) {
      newErrors.email = t("contact.errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.errors.emailInvalid");
    }
    if (!formData.message.trim())
      newErrors.message = t("contact.errors.messageRequired");
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000/api/contact";
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (data.success) {
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        } else {
          alert(t("contact.alerts.error") + (data.error || "Noma'lum xatolik"));
        }
      } catch (err) {
        console.error("Error:", err);
        alert(t("contact.alerts.generalError"));
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen overflow-hidden">
      <SEO title={t("nav.contact")} />
      <div className="max-w-[1300px] mx-auto">
        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn(0)}
            className="lg:col-span-7"
          >
            <p style={{fontFamily:'"Fira Code",monospace'}} 
               className="text-xs text-muted/40 tracking-[0.3em] uppercase mb-3"> 
              // get_in_touch 
            </p> 
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest"
              variants={fadeIn(0.1)}
            >
              <MessageCircle size={12} />
              {t("contact.title")}
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-main mb-6 tracking-tighter"
              style={{ fontFamily: '"Fira Code", monospace' }}
              variants={titleFade}
            >
              {t("contact.title")}
            </motion.h2>

            <motion.div
              className="w-16 sm:w-24 h-1.5 bg-primary rounded-full"
              variants={lineGrow}
            />

            <p className="text-muted text-base mt-6 max-w-xl font-medium" 
               style={{fontFamily:'"Fira Code",monospace'}}> 
              {t("contact.subtitle") || "Fikr, taklif yoki hamkorlik bo'yicha yozing."} 
            </p> 
          </motion.div>

          <motion.div 
            className="lg:col-span-5 flex flex-col gap-3"
            initial="hidden"
            animate="visible"
            variants={fadeIn(0.3)}
          >
            <div className="flex items-center gap-3 bg-surface border border-border rounded-2xl px-5 py-3 text-sm text-muted font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Hozir online
            </div>
            <div className="flex items-center gap-3 bg-surface border border-border rounded-2xl px-5 py-3 text-sm text-muted font-medium">
              <Clock size={16} className="text-primary" />
              Javob vaqti: ~1 soat
            </div>
            <div className="flex items-center gap-3 bg-surface border border-border rounded-2xl px-5 py-3 text-sm text-muted font-medium">
              <MapPin size={16} className="text-primary" />
              Toshkent, O'zbekiston
            </div>
          </motion.div>
        </div>

        {/* ── Contact Cards ───────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20"
          initial="hidden"
          animate="visible"
          variants={containerStagger}
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target={contact.link.startsWith("http") ? "_blank" : undefined}
              rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
              variants={cardFadeUp}
              className={`group relative overflow-hidden bg-surface border border-border ${contact.borderHover} rounded-[2rem] p-8 flex items-center gap-5 text-left transition-colors duration-500`}
            >
              {/* Gradient bg on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${contact.gradientFrom} ${contact.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <FiArrowRight 
                className="absolute top-5 right-5 text-muted/30 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                size={16} 
              />

              <div className="relative w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-300">
                <img
                  src={contact.icon}
                  alt={t(contact.title)}
                  className="w-8 h-8"
                />
              </div>

              <div className="relative flex flex-col">
                <h3
                  className="text-[10px] uppercase tracking-widest text-muted mb-1 font-black"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {t(contact.title)}
                </h3>

                <p
                  className={`text-base font-black text-main break-all transition-colors duration-300 ${contact.colorHover}`}
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* ── Form Section ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left – title + Lottie animation */}
          <div className="lg:col-span-2 lg:sticky lg:top-32 flex flex-col">
            <p className="text-xs text-muted/40 tracking-[0.3em] uppercase mb-6 font-mono"> 
              // send_message 
            </p> 

            {/* Info tiles */}
            <div className="space-y-3 mb-6">
              {[
                {
                  label: t("sidebar.info.workingHoursValue"),
                  desc: t("sidebar.info.workingHours"),
                  icon: <Clock size={14} className="text-primary" />,
                },
                {
                  label: t("sidebar.info.levelValue"),
                  desc: t("sidebar.info.level"),
                  icon: <CheckCircle2 size={14} className="text-primary" />,
                },
                {
                  label: t("sidebar.info.locationValue"),
                  desc: t("sidebar.info.location"),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border border-l-2 border-l-primary/20 hover:border-l-primary transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-5 h-5 mt-0.5">
                    {item.icon ? item.icon : <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </div>
                  <div>
                    <p
                      className="text-main font-black text-sm"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-muted text-[10px] uppercase tracking-widest mt-0.5 font-bold"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Lottie Animation */}
            <div className="w-full flex justify-center">
              <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_u25cckyh.json"
                style={{ height: "220px", width: "100%" }}
              />
            </div>
          </div>

          {/* Right – form / success */}
          <div className="lg:col-span-3">
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent rounded-t-[2rem] -mt-[1px]" />
            {submitted ? (
              /* ── Success State ── */
              <div className="bg-surface border border-primary/30 border-t-0 rounded-b-[2rem] rounded-t-none p-12 text-center">
                <p className="text-primary/50 text-[10px] uppercase tracking-[0.3em] font-mono mb-3"> 
                  // message_sent 
                </p> 
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>

                <h3
                  className="text-2xl font-black text-main mb-3 tracking-tight"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {t("contact.alerts.success")}
                </h3>

                <p className="text-muted text-sm mt-2 mb-8" style={{fontFamily:'"Fira Code",monospace'}}> 
                  {t("contact.alerts.successDesc") || "Tez orada javob beraman!"} 
                </p> 

                <motion.button
                  onClick={() => setSubmitted(false)}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-primary text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-hover transition-colors duration-300 shadow-xl shadow-primary/25"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {t("contact.form.submitBtn")} →
                </motion.button>
              </div>
            ) : (
              /* ── Contact Form ── */
              <form
                onSubmit={handleSubmit}
                className="bg-surface border border-border/60 border-t-0 rounded-b-[2rem] rounded-t-none p-6 sm:p-10 space-y-6 sm:space-y-7"
                noValidate
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      className="block mb-2.5 font-black text-main text-xs uppercase tracking-widest"
                      htmlFor="name"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {t("contact.form.nameLabel")}
                      <span className="text-primary ml-0.5">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder={t("contact.form.namePlaceholder")}
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-2xl bg-background border ${
                        errors.name ? "border-red-500" : "border-border/60"
                      } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-main placeholder-muted font-medium`}
                      style={{ fontFamily: '"Fira Code", monospace' }}
                      aria-describedby="name-error"
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="text-red-500 mt-2 text-xs font-bold"
                        style={{ fontFamily: '"Fira Code", monospace' }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="block mb-2.5 font-black text-main text-xs uppercase tracking-widest"
                      htmlFor="email"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {t("contact.form.emailLabel")}
                      <span className="text-primary ml-0.5">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder={t("contact.form.emailPlaceholder")}
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-2xl bg-background border ${
                        errors.email ? "border-red-500" : "border-border/60"
                      } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-main placeholder-muted font-medium`}
                      style={{ fontFamily: '"Fira Code", monospace' }}
                      aria-describedby="email-error"
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-red-500 mt-2 text-xs font-bold"
                        style={{ fontFamily: '"Fira Code", monospace' }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block mb-2.5 font-black text-main text-xs uppercase tracking-widest"
                    htmlFor="message"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {t("contact.form.messageLabel")}
                    <span className="text-primary ml-0.5">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="7"
                    placeholder={t("contact.form.messagePlaceholder")}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-2xl bg-background border ${
                      errors.message ? "border-red-500" : "border-border/60"
                    } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none transition-all duration-300 text-main placeholder-muted font-medium`}
                    style={{ fontFamily: '"Fira Code", monospace' }}
                    aria-describedby="message-error"
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="text-red-500 mt-2 text-xs font-bold"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className="w-full bg-primary hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-xl shadow-primary/25 flex items-center justify-center gap-3"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {loading ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="relative flex h-2 w-2 mr-1"> 
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span> 
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span> 
                      </span> 
                      {t("contact.form.submitBtn")}
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
