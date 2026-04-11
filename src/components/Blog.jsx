import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SEO from "./SEO";
import { Search, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import {
  titleFade,
  lineGrow,
  containerStagger,
  cardFadeUp,
  fadeIn,
} from "../utils/animations";

const Blog = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const blogPosts = [
    {
      id: "reactQuery",
      date: "2024-03-15",
      readTime: "5 min",
      category: "React",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: "tailwindPremium",
      date: "2024-03-10",
      readTime: "8 min",
      category: "UI/UX",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: "cleanCode",
      date: "2024-03-05",
      readTime: "10 min",
      category: "Architecture",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60",
    },
  ];

  const categories = ["All", ...new Set(blogPosts.map((p) => p.category))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      t(`blog.posts.${post.id}.title`)
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      t(`blog.posts.${post.id}.desc`)
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find((p) => p.featured);
  const otherPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen overflow-hidden">
      <SEO title={t("blog.title")} />
      <div className="max-w-[1300px] mx-auto">
        {/* ── Hero Header ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left — title + search + filters */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={fadeIn(0)}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest"
              variants={fadeIn(0.1)}
            >
              <BookOpen size={12} />
              {t("blog.title")}
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-main mb-6 tracking-tighter"
              style={{ fontFamily: '"Fira Code", monospace' }}
              variants={titleFade}
            >
              {t("blog.title")}
            </motion.h2>

            <motion.div
              className="w-24 h-1.5 bg-primary rounded-full mb-10"
              variants={lineGrow}
            />

            {/* Search */}
            <motion.div
              className="relative mb-5 max-w-lg"
              variants={fadeIn(0.3)}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
              <input
                type="text"
                placeholder={t("blog.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-surface border border-border focus:border-primary outline-none transition-all duration-300 text-main"
                style={{ fontFamily: '"Fira Code", monospace' }}
              />
            </motion.div>

            {/* Category filters */}
            <motion.div className="flex flex-wrap gap-2" variants={fadeIn(0.4)}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300
                    ${
                      activeCategory === cat
                        ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                        : "bg-surface text-muted hover:bg-border/50 border border-border"
                    }`}
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Lottie animation */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 w-full rounded-[2rem] bg-gradient-to-br from-surface to-background border border-border/50 overflow-hidden flex items-center justify-center p-4">
              <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_bniew9j6.json"
                style={{ height: "320px", width: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* ── Featured Post (horizontal wide card) ───── */}
        {featuredPost && (
          <article className="group relative overflow-hidden bg-surface border border-border rounded-[2rem] mb-10 hover:border-primary/50 transition-colors duration-500 cursor-pointer">
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image side */}
              <div className="relative h-72 lg:h-auto overflow-hidden m-4 rounded-[1.5rem] bg-background border border-border/50">
                <img
                  src={featuredPost.image}
                  alt={t(`blog.posts.${featuredPost.id}.title`)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                    ✦ Featured
                  </span>
                  <span className="bg-white/90 dark:bg-black/90 backdrop-blur-md text-main text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter border border-border/50">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Text side */}
              <div className="relative p-8 lg:p-12 flex flex-col justify-center">
                <div
                  className="flex items-center gap-4 text-xs text-muted mb-5"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredPost.date}
                  </div>
                  <span className="text-border">•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <h3
                  className="text-3xl md:text-4xl font-black text-main mb-5 group-hover:text-primary transition-colors duration-300 tracking-tight"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {t(`blog.posts.${featuredPost.id}.title`)}
                </h3>

                <p
                  className="text-muted text-base leading-[1.75] mb-8 line-clamp-3"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {t(`blog.posts.${featuredPost.id}.desc`)}
                </p>

                <motion.button
                  whileHover={{ x: 4 }}
                  className="self-start flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/25 hover:bg-primary-hover transition-colors duration-300"
                  style={{ fontFamily: '"Fira Code", monospace' }}
                >
                  {t("blog.readMore")}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </article>
        )}

        {/* ── Regular Posts Grid ──────────────────────── */}
        {otherPosts.length > 0 && (
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {otherPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={cardFadeUp}
                className="group relative flex flex-col bg-surface border border-border rounded-[2rem] overflow-hidden hover:border-primary/50 transition-colors duration-500 cursor-pointer"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Image */}
                <div className="relative h-52 overflow-hidden m-4 rounded-[1.5rem] bg-background border border-border/50">
                  <img
                    src={post.image}
                    alt={t(`blog.posts.${post.id}.title`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 dark:bg-black/90 backdrop-blur-md text-main text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter border border-border/50">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 pt-2 flex flex-col flex-grow">
                  <div
                    className="flex items-center gap-3 text-xs text-muted mb-4"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <span className="text-border">•</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3
                    className="text-xl font-black text-main mb-3 group-hover:text-primary transition-colors duration-300 tracking-tight"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {t(`blog.posts.${post.id}.title`)}
                  </h3>

                  <p
                    className="text-muted text-sm leading-[1.75] mb-6 flex-grow line-clamp-3"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {t(`blog.posts.${post.id}.desc`)}
                  </p>

                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest mt-auto"
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {t("blog.readMore")}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* ── No Results ──────────────────────────────── */}
        {filteredPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_hl5n0bwb.json"
              style={{ height: "260px", width: "260px" }}
            />
            <p
              className="text-muted text-xl font-black tracking-tight -mt-4"
              style={{ fontFamily: '"Fira Code", monospace' }}
            >
              {t("blog.noResults")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
