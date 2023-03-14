import React from 'react'
import { AcademicDetails } from '../components/Profile Page Component/AcademicDetails';
import { Projects } from '../components/Profile Page Component/Projects';
import { About } from '../components/Profile Page Component/About';
import { Skills } from '../components/Profile Page Component/Skills';
import { SocialMedia } from '../components/Profile Page Component/SocialMedia';
import { Profile } from '../components/Profile Page Component/Profile';
import Footer from "../components/Footer"
import StudentHeader from '../components/Header/StudentHeader.jsx';

export const ProfilePage = () => {
  return (
    <div>
      <StudentHeader />
      <Profile />
      <AcademicDetails />
      <About />
      <Skills />
      {/* <Clubs /> */}
      <SocialMedia />
      <Projects />
      {/* <CreateTable /> */}
      <Footer />
    </div>
  )
}
export default ProfilePage;
