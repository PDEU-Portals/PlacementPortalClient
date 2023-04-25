import React from "react";
import Footer from "../components/Footer";
import StudentHeader from "../components/Header/StudentHeader.jsx";
import ProfileHeader from "../components/ProfilePageComponent/ProfileHeader.jsx";
import "../components/ProfilePageComponent/Css/ProfilePage.css";
import ProfileSkills from "../components/ProfilePageComponent/ProfileSkills";
import ProfileWorkExperience from "../components/ProfilePageComponent/ProfileWorkExperience";
import FilesUpload from "../components/ProfilePageComponent/FilesUpload";
import AcademicDetails from "../components/ProfilePageComponent/AcademicDetails";
import About from "../components/ProfilePageComponent/About.jsx";
import { SocialMedia } from "../components/ProfilePageComponent/SocialMedia";

export const ProfilePage = () => {
  return (
    <div className="final-profile-page">
      <StudentHeader />
      <ProfileHeader />
      <AcademicDetails />
      <About />
      <SocialMedia />
      <ProfileSkills />
      <ProfileWorkExperience />
      <FilesUpload />
      <Footer />
    </div>
  );
};
export default ProfilePage;
