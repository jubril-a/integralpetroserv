import Navbar from "../components/Navbar"
import PageHeading from "../components/PageHeading"
import ServicesSection from "../components/ServicesSection"
import Footer from "../components/Footer"


const page = () => {
  
  return (
    <>
      <Navbar />
      <PageHeading>
        <h1>Core Services</h1>
        <p>Optimizing production, developing talent, and managing assets</p>
      </PageHeading>
      <ServicesSection />
      <Footer />
    </>
  )
}

export default page