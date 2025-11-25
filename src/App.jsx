import './App.css'
import Footer from './components/Footer'
import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Waitlist from './components/WaitList'
import Testimonials from './components/Testimonials'
import FlatsComponent from './components/FlatsComponent'
import ChooseSection from './components/ChooseSection'
import FeatureSection from './components/FeatureSection'
import { Routes, Route } from 'react-router-dom'
import QuizSection from './components/QuizSection'
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<>
            <Navbar />
            <HeroSection />
            <div class="md:px-0 px-3">
              <FlatsComponent />
              <ChooseSection />
              <FeatureSection />
              <Testimonials />
            </div>
            <Waitlist />
            <Footer />
          </>} />
            <Route path="/quiz" element={<QuizSection/>}/>
        </Routes>


      </div>
    </>
  )
}

export default App
