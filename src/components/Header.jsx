import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const linkClasses = ({ isActive }) =>
        `pb-1 border-b-2 transition-colors duration-300 ${isActive
            ? 'border-green-500 text-green-500'
            : 'border-transparent hover:border-green-500'
        }`;

    return (
        <header className="bg-zinc-800 text-white border-b border-[#4b4b4b] sticky top-0 z-50">
            <div className="flex justify-between items-center p-4">
                <h1 className="text-4xl font-bold">
                    <NavLink to="/" className="hover:text-green-500 transition-colors">
                        Umarov Asadbek
                    </NavLink>
                </h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <NavLink to="/" className={linkClasses}>
                                Bosh sahifa
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutme" className={linkClasses}>
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
                                Bog’lanish
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
