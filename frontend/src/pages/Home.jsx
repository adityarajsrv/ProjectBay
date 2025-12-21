import Contact from "../components/Contact"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="bg-black">
        <Navbar />
        <Hero />
        <HowItWorks />
        <Features />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home