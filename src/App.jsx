

import About from "./components/About"
import Billing from "./components/Billing"
import Brands from "./components/Brands"
import Business from "./components/Business"
import CTA from "./components/CTA"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"


function App() {
  return (
    <div className="bg-[#00040F] scroll-smooth flex flex-col ">
      <Navbar/>
      <Hero/>
      <Stats/>
      <Features/>
      <Billing/>
      <Business/>
      <About/>
      <Brands/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App
