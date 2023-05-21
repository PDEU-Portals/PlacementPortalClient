import React, { useEffect } from "react";
import AdminHeader from "../components/Header/AdminHeader";
import ViewOnlyAcademicDetails from '../components/ViewOnlyProfilePage/ViewOnlyAcademicDetails.jsx';
import ViewOnlyProfileHeader from '../components/ViewOnlyProfilePage/ViewOnlyProfileHeader.jsx';
import axios from "axios";
import { useParams } from "react-router-dom";
import ViewOnlyAbout from "../components/ViewOnlyProfilePage/ViewOnlyAbout";
import ViewOnlySkills from "../components/ViewOnlyProfilePage/ViewOnlySkills";
import ViewOnlyProfileWorkExperience from '../components/ViewOnlyProfilePage/ViewOnlyProfileWorkExperience.jsx';
import ViewOnlyFilesUpload from "../components/ViewOnlyProfilePage/ViewOnlyFileUpload";
import Footer from "../components/Footer";

const ViewOnlyStudentProfile = () => {

    const [profile,setProfile] = React.useState(null)

    const {id} = useParams()
  
    React.useEffect(() => {
      const fetchProfile = async() => {
        const response = await axios.get(`http://localhost:5000/api/v1/getInfo/${id}`)
        // console.log(response.data)
        setProfile(response.data)
      }
      fetchProfile()
    },[])

    if(profile){
        return ( 
            <>
                <AdminHeader />
                <ViewOnlyProfileHeader sname={profile.name} semail={profile.email} swebsite={profile.website} sdesc={profile.description} ssdesc={profile.shortDescription}/>
                <ViewOnlyAcademicDetails rollNo={profile.rollNo} cgpa={profile.cgpa} sbranch={profile.branch} />
                <ViewOnlyAbout sbout={profile.about}/>
                <ViewOnlySkills sg={profile.github} sl={profile.linkedin} st={profile.twitter} skills={profile.skills} />
                <ViewOnlyProfileWorkExperience we={profile.workExperience} />
                {/* <ViewOnlyFilesUpload /> */}
                <Footer />
            </>
         );
    }
}
 
export default ViewOnlyStudentProfile;