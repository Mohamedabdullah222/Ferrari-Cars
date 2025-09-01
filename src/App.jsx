import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import MenuCars from './components/MenuCars'
import Customer from './components/Customer'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Gallery />
      <MenuCars />
      <Customer />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
