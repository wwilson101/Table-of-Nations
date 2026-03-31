import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import OurWork from './pages/OurWork'
import GetInvolved from './pages/GetInvolved'
import Give from './pages/Give'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/give" element={<Give />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
