import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import Project from './components/Project';

// Rasmni import qilamiz

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-background text-main min-h-screen">
      <Header setSidebarToggle={setIsSidebarOpen} />
      <div className="lg:flex lg:items-stretch">
        <Sidebar className="w-[360px] h-full" isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        {/* <ParticlesBackground /> */}
        <main className="w-full mx-auto bg-background">
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
  );
}

export default App;
