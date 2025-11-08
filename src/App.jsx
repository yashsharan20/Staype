import './App.css'
import Faq from './components/Faq'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import Top from './components/Top'
import HowItWorks from "./components/HowItWorks";

import React from 'react'
import ServicesCarousel from './components/ServiceCarousel'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
     <div className="min-h-screen flex flex-col">
        <Top/>
        <Navbar/>
        <HeroSection/>
        <HowItWorks/>
         <FeaturesSection/>
         <ServicesCarousel/>
        <Faq/>
        <Footer/>
     </div>
    </>
  )
}

export default App
