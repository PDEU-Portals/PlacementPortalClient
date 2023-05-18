import React, { useEffect } from "react";
import StudentHeader from "../components/Header/StudentHeader";
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
        console.log(response.data)
        setProfile(response.data)
      }
      fetchProfile()
    },[])

    if(profile){
        return ( 
            <>
                <StudentHeader />
                <ViewOnlyProfileHeader sname={profile.name} semail={profile.email} swebsite={profile.website} sdesc={profile.description} ssdesc={profile.shortDescription}/>
                <ViewOnlyAcademicDetails />
                <ViewOnlyAbout sbout={profile.about}/>
                <ViewOnlySkills sg={profile.github} sl={profile.linkedin} st={profile.twitter} />
                <ViewOnlyProfileWorkExperience />
                <ViewOnlyFilesUpload />
                <Footer />
            </>
         );
    }
}
 
export default ViewOnlyStudentProfile;