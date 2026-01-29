import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import Project from './components/Project';
import { div } from 'framer-motion/client';

// Rasmni import qilamiz

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
 <div className='w-full mx-auto' >
     <div className="bg-background  text-main min-h-screen">
      <Header setSidebarToggle={setIsSidebarOpen} />
      <div className="lg:flex lg:items-start">
        <Sidebar className="lg:w-[360px]" isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        {/* <ParticlesBackground /> */}
        <main className="w-full lg:w-[1300px] mx-auto bg-background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutMe" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
 </div>
  );
}

export default App;
