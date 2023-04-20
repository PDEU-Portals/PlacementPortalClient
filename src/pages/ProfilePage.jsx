import React from "react";
import Footer from "../components/Footer";
import StudentHeader from "../components/Header/StudentHeader.jsx";
import ProfileHeader from "../components/ProfilePageComponent/ProfileHeader.jsx";
import "../components/ProfilePageComponent/Css/ProfilePage.css";
import ProfileSkills from "../components/ProfilePageComponent/ProfileSkills";
import ProfileWorkExperience from "../components/ProfilePageComponent/ProfileWorkExperience";
import FilesUpload from "../components/ProfilePageComponent/FilesUpload";
import axios from "axios";

export const ProfilePage = () => {

  const [profile,setProfile] = React.useState(null)

  React.useEffect(() => {
    const fetchProfile = async() => {
      const response = await axios.get(`http://localhost:5000/api/v1/getInfo/${localStorage.getItem('studentId')}`)
      console.log(response)
      setProfile(response.data)
    }
    fetchProfile()
  },[])

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
