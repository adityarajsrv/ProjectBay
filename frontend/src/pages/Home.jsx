import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="bg-black">
        <Navbar />
        <Hero />
        <HowItWorks />
    </div>
  )
}

export default Home