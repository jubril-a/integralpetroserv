import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Team from "./components/Team"
import Footer from "./components/Footer"

const page = () => {
  return (
    <>
      <span id="top"></span>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Footer />
    </>
  )
}

export default page