import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Contact from './components/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}> 
        <Route index element={(
          <div>
            <Home />
            <AboutMe />
            <Project />
            <Contact />
          </div>
        )} />
      </Route>
    </Routes>
  )
}
