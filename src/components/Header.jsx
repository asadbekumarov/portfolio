import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const linkClasses = ({ isActive }) =>
        `pb-1 border-b-2 transition-colors duration-300 ${isActive
            ? 'border-green-500 text-green-500'
            : 'border-transparent hover:border-green-500'
        }`;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-zinc-800 text-white border-b border-[#4b4b4b] sticky top-0 z-50">
            <div className="flex justify-between items-center p-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    <NavLink to="/" className="hover:text-green-500 transition-colors">
                        Umarov Asadbek
                    </NavLink>
                </h1>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-4 lg:space-x-6">
                        <li>
                            <NavLink to="/" className={linkClasses}>
                                Bosh sahifa
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutMe" className={linkClasses}>
                                Haqida
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" className={linkClasses}>
                                Loyihalar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={linkClasses}>
                                Bog&apos;lanish
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-green-500 transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <motion.nav
                    className="md:hidden bg-zinc-700 border-t border-[#4b4b4b]"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="flex flex-col space-y-0">
                        <li>
                            <NavLink 
                                to="/" 
                                className={`block px-4 py-3 hover:bg-zinc-600 transition-colors ${linkClasses}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Bosh sahifa
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/aboutMe" 
                                className={`block px-4 py-3 hover:bg-zinc-600 transition-colors ${linkClasses}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Haqida
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/projects" 
                                className={`block px-4 py-3 hover:bg-zinc-600 transition-colors ${linkClasses}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Loyihalar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/contact" 
                                className={`block px-4 py-3 hover:bg-zinc-600 transition-colors ${linkClasses}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Bog&apos;lanish
                            </NavLink>
                        </li>
                    </ul>
                </motion.nav>
            )}
        </header>
    );
}

export default Header;
