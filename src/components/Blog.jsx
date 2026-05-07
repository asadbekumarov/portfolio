import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
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
            <p style={{fontFamily:'"Fira Code",monospace'}} 
               className="text-xs text-muted/40 tracking-[0.3em] uppercase mb-3"> 
              // blog_posts 
            </p> 
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest"
              variants={fadeIn(0.1)}
            >
              <BookOpen size={12} />
              {t("blog.title")}
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-5xl lg:text-7xl font-black text-main mb-4 sm:mb-6 tracking-tighter"
              style={{ fontFamily: '"Fira Code", monospace' }}
              variants={titleFade}
            >
              {t("blog.title")}
            </motion.h2>

            <motion.div
              className="w-16 sm:w-24 h-1.5 bg-primary rounded-full mb-6"
              variants={lineGrow}
            />

            <p className="text-muted text-base leading-relaxed mb-8 max-w-lg" 
               style={{fontFamily:'"Fira Code",monospace'}}> 
              {t("blog.subtitle") || "Texnologiya, kod va dizayn haqida yozaman."} 
            </p> 

            {/* Search */}
            <motion.div
              className="relative mb-5 max-w-lg"
              variants={fadeIn(0.3)}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/50 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder={t("blog.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm text-main placeholder:text-muted/50"
                style={{ fontFamily: '"Fira Code", monospace' }}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-muted/40 font-mono bg-background border border-border px-2 py-0.5 rounded-md hidden sm:block"> 
                ⌘K 
              </span> 
            </motion.div>

            {/* Category filters */}
            <motion.div className="flex flex-wrap gap-2" variants={fadeIn(0.4)}>
              {categories.map((cat) => {
                const count = blogPosts.filter(p => cat === "All" || p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300
                      ${
                        activeCategory === cat
                          ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                          : "bg-background text-muted hover:border-primary/40 hover:text-primary border border-border"
                      }`}
                    style={{ fontFamily: '"Fira Code", monospace' }}
                  >
                    {cat}
                    <span className="text-[10px] font-black ml-1 opacity-60">({count})</span>
                  </button>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — Lottie animation */}
          <div className="lg:col-span-5 relative hidden lg:flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 w-full rounded-[2rem] bg-gradient-to-br from-surface to-background border border-border/50 overflow-hidden flex items-center justify-center p-4">
              <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_bniew9j6.json"
                style={{ height: "320px", width: "100%" }}
              />
            </div>
            <div className="flex gap-3 mt-4 justify-center flex-wrap"> 
              <span className="text-[11px] font-mono text-muted bg-surface border border-border px-3 py-1.5 rounded-full"> 
                📝 {blogPosts.length} ta maqola 
              </span> 
              <span className="text-[11px] font-mono text-muted bg-surface border border-border px-3 py-1.5 rounded-full"> 
                ⚡ Har hafta yangi 
              </span> 
            </div> 
          </div>
        </div>

        {/* ── Featured Post (horizontal wide card) ───── */}
        {featuredPost && (
          <>
            <p className="text-xs text-muted/40 tracking-[0.3em] uppercase font-mono mb-4"> 
              // featured_post 
            </p> 
            <Link to={`/blog/${featuredPost.id}`}>
              <article className="group relative overflow-hidden bg-surface border border-border rounded-[2rem] mb-10 hover:border-primary/50 transition-colors duration-500 cursor-pointer">
                {/* Card top accent line */}
                <div className="h-0.5 bg-gradient-to-r from-primary via-indigo-400 to-transparent rounded-t-[2rem]" />
                
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
                      <span className="flex items-center gap-2 bg-primary/90 backdrop-blur-md text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                        <span className="relative flex h-1.5 w-1.5"> 
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span> 
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span> 
                        </span> 
                        Featured
                      </span>
                      <span className="bg-white/90 dark:bg-black/90 backdrop-blur-md text-main text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter border border-border/50">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>

                  {/* Text side */}
                  <div className="relative p-8 lg:p-12 flex flex-col justify-center">
                    <p className="text-[10px] text-primary/50 uppercase tracking-[0.25em] font-mono mb-4">// featured</p>
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
                      className="self-start flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.15em] shadow-xl shadow-primary/25 hover:bg-primary-hover transition-colors duration-300"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {t("blog.readMore")}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </article>
            </Link>
          </>
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
                <Link to={`/blog/${post.id}`} className="flex flex-col h-full">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2rem]" />
                  
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
                    <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white/80 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"> 
                      <Clock className="w-3 h-3" /> 
                      {post.readTime} 
                    </span> 
                  </div>

                  {/* Content */}
                  <div className="relative p-6 pt-2 flex flex-col flex-grow">
                    <div
                      className="flex items-center gap-1.5 text-xs text-muted mb-4"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      <Calendar className="w-3 h-3" />
                      {post.date}
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

                    <div
                      className="border-t border-border/50 pt-4 mt-4 flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest group/btn"
                      style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                      {t("blog.readMore")}
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
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
