import React from 'react'
import { AcademicDetails } from '../components/Profile Page Component/AcademicDetails';
import { Projects } from '../components/Profile Page Component/Projects';
import { About } from '../components/Profile Page Component/About';
import { Skills } from '../components/Profile Page Component/Skills';
import { Clubs } from '../components/Profile Page Component/Clubs';
import { SocialMedia } from '../components/Profile Page Component/SocialMedia';
import { Profile } from '../components/Profile Page Component/Profile';
import Header from "../components/Header/Header"
import Footer from "../components/Footer"


export const ProfilePage = () => {
  return (
    <div>
      <Header />
      <Profile />
      <AcademicDetails />
      <About />
      <Skills />
      <Clubs />
      <SocialMedia />
      <Projects />
      <Footer />
    </div>
  )
}
