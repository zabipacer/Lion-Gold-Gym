
import AboutUs from './components/About'
import ContactUs from './components/Contactus'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Limitless from './components/Limitless'
import Navbar from './components/Navbar'
import PricingPlans from './components/Pricing'
import OurProcess from './components/process'
import WhatOurMembersSay from './components/Reviews'
import SpecializedIn from './components/Specialized'
import OurGymStats from './components/Stats'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Limitless/>
      <OurProcess/>
      <OurGymStats/>
      <AboutUs/>
      <SpecializedIn/>
      <WhatOurMembersSay/>
      <PricingPlans/>
      <ContactUs/>
      <Footer/>
      
    </>
  )
}

export default App
