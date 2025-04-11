import Navbar from "../components/Navbar"
import PageHeading from "../components/PageHeading"
import AboutContent from "../components/AboutContent"
import Mnv from "../components/Mnv"
import Footer from "../components/Footer"

const page = () => {
  
  return (
    <>
      <Navbar />
      <PageHeading>
        <h1>About Us</h1>
        <p>Incorporated in Nigeria in 2019 with offices in Lagos and Houston</p>
      </PageHeading>
      <AboutContent />
      <Mnv />
      <Footer />
    </>
  )
}

export default page