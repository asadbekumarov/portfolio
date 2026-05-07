import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import SEO from './SEO';
import { fadeIn, fadeUp, titleFade } from '../utils/animations';

const blogPosts = [
    {
        id: 'reactQuery',
        date: '2024-03-15',
        readTime: '5 min',
        category: 'React',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60'
    },
    {
        id: 'tailwindPremium',
        date: '2024-03-10',
        readTime: '8 min',
        category: 'UI/UX',
        image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60'
    },
    {
        id: 'cleanCode',
        date: '2024-03-05',
        readTime: '10 min',
        category: 'Architecture',
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60'
    }
];

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-main mb-6 uppercase tracking-tighter">Maqola topilmadi</h2>
                <button 
                    onClick={() => navigate('/blog')} 
                    className="text-primary font-bold text-lg hover:underline transition-all"
                >
                    {t('blog.backToBlog', 'Orqaga qaytish')}
                </button>
            </div>
        );
    }

    const content = t(`blog.posts.${id}.content`, { returnObjects: true });
    const contentArray = Array.isArray(content) ? content : [content];

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: t(`blog.posts.${id}.title`),
                url: window.location.href,
            });
        }
    };

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen">
            <SEO title={`${t(`blog.posts.${id}.title`)} | Blog`} />
            <div className="max-w-[800px] mx-auto">
                {/* Back Button */}
                <motion.div 
                    initial="hidden" 
                    animate="visible" 
                    variants={fadeIn(0)} 
                    className="mb-10"
                >
                    <Link 
                        to="/blog" 
                        className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors font-bold text-sm uppercase tracking-widest"
                        style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                        <ArrowLeft className="w-5 h-5" />
                        {t('blog.backToBlog', 'Orqaga qaytish')}
                    </Link>
                </motion.div>

                {/* Header Section */}
                <motion.div 
                    initial="hidden" 
                    animate="visible" 
                    variants={fadeUp} 
                    className="mb-10"
                >
                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-primary uppercase tracking-widest mb-6">
                        <span className="bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full shadow-sm shadow-primary/10">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-muted bg-surface border border-border px-3 py-1.5 rounded-full">
                            <Calendar className="w-4 h-4" /> {post.date}
                        </div>
                        <div className="flex items-center gap-1.5 text-muted bg-surface border border-border px-3 py-1.5 rounded-full">
                            <Clock className="w-4 h-4" /> {post.readTime}
                        </div>
                    </div>
                    
                    <h1 
                        className="text-3xl sm:text-5xl md:text-6xl font-black text-main leading-tight tracking-tighter mb-8"
                        style={{ fontFamily: '"Fira Code", monospace' }}
                    >
                        {t(`blog.posts.${id}.title`)}
                    </h1>
                </motion.div>

                {/* Hero Image */}
                <motion.div 
                    initial="hidden" 
                    animate="visible" 
                    variants={fadeIn(0.2)} 
                    className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden mb-12 border border-border shadow-2xl shadow-black/10 group"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50 z-10" />
                    <img 
                        src={post.image} 
                        alt={t(`blog.posts.${id}.title`)} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                </motion.div>

                {/* Content Section */}
                <motion.div 
                    initial="hidden" 
                    animate="visible" 
                    variants={fadeIn(0.3)} 
                    className="relative"
                >
                    {/* Decorative element */}
                    <div className="hidden lg:block absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/20 to-transparent" />
                    
                    <div className="prose prose-lg dark:prose-invert max-w-none text-muted font-medium">
                        {contentArray.map((paragraph, index) => (
                            <p 
                                key={index} 
                                className="mb-6 leading-relaxed text-lg sm:text-xl"
                                style={{ fontFamily: '"Fira Code", monospace' }}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </motion.div>

                {/* Footer Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-main uppercase tracking-widest text-sm" style={{ fontFamily: '"Fira Code", monospace' }}>
                            Ulashish:
                        </span>
                        <button 
                            onClick={handleShare}
                            className="p-3 bg-surface border border-border rounded-xl text-muted hover:text-primary hover:border-primary/50 transition-all duration-300"
                        >
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogDetail;