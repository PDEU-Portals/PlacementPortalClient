import React from 'react'
import Header from '../components/Header/Header'
import Article from "../components/HomePage/Article"
import Hero from "../components/HomePage/Hero"
import InfoPage from "../components/HomePage/InfoPage"
import PortalInfo from "../components/HomePage/PortalInfo"
import Footer from "../components/Footer"


const HomePage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <InfoPage />
        <Article />
        <PortalInfo />
        <Footer />
    </div>
  )
}

export default HomePage