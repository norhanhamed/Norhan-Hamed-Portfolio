import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Servicses from './Services'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Servicses />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}
