import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Project from './components/project';
import Contact from './components/Contact';

function App() {
  return (
    <div 
    >
      <Header />
      <div className="flex flex-row min-h-screen">
        <Sidebar />
        <main
          style={{
            backgroundImage: "url('/src/assets/homeImg/bodybg.png')"
          }}
          className="w-full">
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
