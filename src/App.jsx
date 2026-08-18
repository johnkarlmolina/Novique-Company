import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import IntroSplash from './components/IntroSplash'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Partners from './pages/Partners'
import About from './pages/About'
import GetStarted from './pages/GetStarted'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <IntroSplash />
      <ScrollToTop />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(200,155,60,0.08),transparent_40%),radial-gradient(circle_at_82%_12%,rgba(23,42,58,0.06),transparent_35%)]" />
      <Navbar />
      <main className="w-full px-6 pb-16 pt-10 sm:px-10 lg:px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
