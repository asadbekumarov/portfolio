import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './pages/About';
import { Route, Routes, useLocation } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import Project from './components/Project';
import Blog from './components/Blog';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import { HelmetProvider } from 'react-helmet-async';

import BlogDetail from './components/BlogDetail';
import BackToTop from './components/BackToTop';

function App() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <div className='w-full'>
          <div className="bg-background text-main min-h-screen flex flex-col">
            <ScrollProgress />
            <CustomCursor />
            <BackToTop />
            <div className="sticky top-0 z-50 w-full">
              <Header />
            </div>
            <div className="flex min-w-0 w-full flex-1">
              <main className="min-w-0 w-full flex-1 bg-background">
                <AnimatePresence mode="wait">
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                    <Route path="/home" element={<PageTransition><Home /></PageTransition>} />
                    <Route path="/aboutMe" element={<PageTransition><About /></PageTransition>} />
                    <Route path="/projects" element={<PageTransition><Project /></PageTransition>} />
                    <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
                    <Route path="/blog/:id" element={<PageTransition><BlogDetail /></PageTransition>} />
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
