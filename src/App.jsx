import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceSection />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  )
}

export default App