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
} from "lucide-react";
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
      value: "asadbekumarov922@gmail.com",
      link: "mailto:asadbekumarov922@gmail.com",
      gradientFrom: "from-red-500/10",
      gradientTo: "to-orange-500/10",
      borderHover: "hover:border-red-400/40",
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
        const response = await fetch("http://localhost:3000/api/contact", {
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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn(0)}
          className="mb-16"
        >
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
            className="w-24 h-1.5 bg-primary rounded-full"
            variants={lineGrow}
          />
        </motion.div>

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
              className={`group relative overflow-hidden bg-surface border border-border ${contact.borderHover} rounded-[2rem] p-8 flex flex-col items-center text-center transition-colors duration-500`}
            >
              {/* Gradient bg on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${contact.gradientFrom} ${contact.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative flex flex-col items-center">
                {/* Icon box */}
                <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mb-5 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-300">
                  <img
                    src={contact.icon}
                    alt={t(contact.title)}
                    className="w-8 h-8"
                  />
                </div>

                <h3
                  className="text-sm font-black text-main mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight uppercase"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {t(contact.title)}
                </h3>

                <p
                  className="text-muted text-xs sm:text-sm font-medium break-all"
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
            <h2
              className="text-3xl md:text-4xl font-black text-main mb-5 tracking-tight"
              style={{ fontFamily: '"Fira Code", monospace' }}
            >
              {t("contact.formTitle")}
            </h2>

            <div className="w-16 h-1.5 bg-primary rounded-full mb-6" />

            {/* Info tiles */}
            <div className="space-y-3 mb-6">
              {[
                {
                  label: t("sidebar.info.workingHoursValue"),
                  desc: t("sidebar.info.workingHours"),
                },
                {
                  label: t("sidebar.info.levelValue"),
                  desc: t("sidebar.info.level"),
                },
                {
                  label: t("sidebar.info.locationValue"),
                  desc: t("sidebar.info.location"),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <div>
                    <p
                      className="text-main font-black text-sm"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-muted text-xs uppercase tracking-widest mt-0.5"
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
            {submitted ? (
              /* ── Success State ── */
              <div className="bg-surface border border-primary/30 rounded-[2rem] p-12 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>

                <h3
                  className="text-2xl font-black text-main mb-3 tracking-tight"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {t("contact.alerts.success")}
                </h3>

                <motion.button
                  onClick={() => setSubmitted(false)}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-8 bg-primary text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-hover transition-colors duration-300 shadow-xl shadow-primary/25"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {t("contact.form.submitBtn")} →
                </motion.button>
              </div>
            ) : (
              /* ── Contact Form ── */
              <form
                onSubmit={handleSubmit}
                className="bg-surface border border-border rounded-[2rem] p-8 md:p-10 space-y-7"
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
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder={t("contact.form.namePlaceholder")}
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-2xl bg-background border ${
                        errors.name ? "border-red-500" : "border-border"
                      } focus:border-primary outline-none transition-colors duration-300 text-main placeholder-muted font-medium`}
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
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder={t("contact.form.emailPlaceholder")}
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-2xl bg-background border ${
                        errors.email ? "border-red-500" : "border-border"
                      } focus:border-primary outline-none transition-colors duration-300 text-main placeholder-muted font-medium`}
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
                  </label>
                  <textarea
                    id="message"
                    rows="7"
                    placeholder={t("contact.form.messagePlaceholder")}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-2xl bg-background border ${
                      errors.message ? "border-red-500" : "border-border"
                    } focus:border-primary outline-none resize-none transition-colors duration-300 text-main placeholder-muted font-medium`}
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
