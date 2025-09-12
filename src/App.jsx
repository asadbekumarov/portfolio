import Header from './components/Header';
import Home from './components/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import Project from './components/Project';
// import ParticlesBackground from "./ParticlesBackground";

// Rasmni import qilamiz
import bodyBg from './assets/homeImg/bg2.jpg';

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar />
        {/* <ParticlesBackground /> */}
        <main
          style={{
            backgroundImage: `url(${bodyBg})`, // import qilingan rasmni shu yerda ishlatamiz
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="w-full lg:ml-0"
        >
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
