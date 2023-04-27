import React from 'react'
import Nav from '../../Components/Nav'
import HeroSection from '../../Components/HeroSection'
import About from '../../Components/About'
import Cards from '../../Components/Cards'
import Footer from '../../Components/Footer'
import MoreCards from '../../Components/MoreCards'
export default function Home() {
  return (
   <>
     <Nav />
      <HeroSection />
      <About />
      <Cards />
      <MoreCards/>
      <Footer/>
    
   </>
  )
}
