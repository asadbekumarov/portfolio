import { Outlet } from 'react-router-dom'
import Navbar from '../new/Navbar'
import Footer from '../new/Footer'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
