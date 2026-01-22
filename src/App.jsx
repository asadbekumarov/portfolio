import Header from './components/Header';
import Home from './components/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import Project from './components/Project';

// Rasmni import qilamiz

function App() {
  return (
    <div className="bg-background text-main min-h-screen">
      <Header />
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar className="w-[500px]" />
        {/* <ParticlesBackground /> */}
        <main className="w-full lg:ml-0 bg-background">
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
