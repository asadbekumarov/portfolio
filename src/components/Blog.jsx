import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import SEO from './SEO';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { titleFade, lineGrow, containerStagger, cardFadeUp, fadeIn } from '../utils/animations';

const Blog = () => {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');

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

    const filteredPosts = blogPosts.filter(post => 
        t(`blog.posts.${post.id}.title`).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(`blog.posts.${post.id}.desc`).toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen">
            <SEO title={t('blog.title')} />
            <div className="max-w-[1300px] mx-auto">
                {/* Title Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn(0)}
                    className="mb-12"
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-main mb-4"
                        style={{ fontFamily: '"Fira Code", monospace' }}
                        variants={titleFade}
                    >
                        {t('blog.title')}
                    </motion.h2>
                    <motion.div className="w-20 h-1 bg-primary" variants={lineGrow} />
                </motion.div>

                {/* Search Bar */}
                <motion.div 
                    className="relative mb-12 max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
                    <input
                        type="text"
                        placeholder={t('blog.searchPlaceholder')}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-surface border border-border focus:border-primary outline-none transition-all duration-300 text-main"
                        style={{ fontFamily: '"Fira Code", monospace' }}
                    />
                </motion.div>

                {/* Blog Grid */}
                <motion.div
                    variants={containerStagger}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredPosts.map((post) => (
                        <motion.article
                            key={post.id}
                            variants={cardFadeUp}
                            className="premium-card overflow-hidden group flex flex-col h-full"
                        >
                            {/* Image Wrapper */}
                            <div className="relative h-48 overflow-hidden">
                                <motion.img
                                    src={post.image}
                                    alt={t(`blog.posts.${post.id}.title`)}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-primary/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-muted mb-4" style={{ fontFamily: '"Fira Code", monospace' }}>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h3 
                                    className="text-xl font-bold text-main mb-3 group-hover:text-primary transition-colors duration-300"
                                    style={{ fontFamily: '"Fira Code", monospace' }}
                                >
                                    {t(`blog.posts.${post.id}.title`)}
                                </h3>

                                <p 
                                    className="text-muted text-sm leading-relaxed mb-6 flex-grow"
                                    style={{ fontFamily: '"Fira Code", monospace' }}
                                >
                                    {t(`blog.posts.${post.id}.desc`)}
                                </p>

                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider"
                                    style={{ fontFamily: '"Fira Code", monospace' }}
                                >
                                    {t('blog.readMore')}
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {filteredPosts.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-muted text-xl" style={{ fontFamily: '"Fira Code", monospace' }}>
                            {t('blog.noResults')}
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Blog;
