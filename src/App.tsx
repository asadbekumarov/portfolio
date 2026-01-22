import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Hero from './new/Hero'
import About from './new/About'
import Skills from './new/Skills'
import Projects from './new/Projects'
import Contact from './new/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}> 
        <Route index element={(
          <div>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        )} />
      </Route>
    </Routes>
  )
}
