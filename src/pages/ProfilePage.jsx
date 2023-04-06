import React from "react";
import Footer from "../components/Footer";
import StudentHeader from "../components/Header/StudentHeader.jsx";
import ProfileHeader from "../components/ProfilePageComponent/ProfileHeader.jsx";
import "../components/ProfilePageComponent/Css/ProfilePage.css";
import ProfileSkills from "../components/ProfilePageComponent/ProfileSkills";
import ProfileWorkExperience from "../components/ProfilePageComponent/ProfileWorkExperience";

export const ProfilePage = () => {
  return (
    <div className="final-profile-page">
      <StudentHeader />
      <ProfileHeader />
      <ProfileSkills />
      <ProfileWorkExperience />
      <Footer />
    </div>
  );
};
export default ProfilePage;
