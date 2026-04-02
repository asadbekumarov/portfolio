import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './pages/About';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import Project from './components/Project';
import Blog from './components/Blog';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <HelmetProvider>
      <div className='w-full mx-auto' >
          <div className="bg-background  text-main min-h-screen">
            <ScrollProgress />
            <CustomCursor />
            <Header setSidebarToggle={setIsSidebarOpen} />
            <div className="lg:flex lg:items-start">
              <Sidebar className="lg:w-[360px]" isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
              <main className="w-full lg:w-[1300px] mx-auto bg-background">
                <AnimatePresence mode="wait">
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                    <Route path="/home" element={<PageTransition><Home /></PageTransition>} />
                    <Route path="/aboutMe" element={<PageTransition><About /></PageTransition>} />
                    <Route path="/projects" element={<PageTransition><Project /></PageTransition>} />
                    <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
                    <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                  </Routes>
                </AnimatePresence>
              </main>
            </div>
          </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
