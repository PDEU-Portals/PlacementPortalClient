import { useState, useEffect } from "react";
import StudentHeader from "../components/Header/StudentHeader";
import './ExperiencePage.css';
import axios from "axios";

function ExperiencePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [experiences, setExperiences] = useState([]);
  // const [userData, setUserData] = useState({});

  // Assume that user data is retrieved from backend and stored in this object
  const userData = {
    name: "John",
    email: "john@example.com"
  };


  // This code to fetch user's data from backend
  // useEffect(() => {
  //   async function fetchUserData() {
  //     try {
  //       const response = await axios.get("/api/v1/user");
  //       setUserData(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchUserData();
  // }, []);

  const handleShare = () => {
    
    console.log('Button is clicked')
    const newExperience = { title, description };
    setExperiences([...experiences, newExperience]);
    setTitle("");
    setDescription("");
  };

  // This code will fetch all experiences stored in Database
  // useEffect(() => {
  //   const fetchExperiences = async () => {
  //     try {
  //       const { data } = await axios.get("http://localhost:5000/api/v1/experiences");
  //       setExperiences(data.experiences);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchExperiences();
  // }, []);


  // This code will send data given by user into back-end.
  // const handleShare = async (event) => {
    // event.preventDefault();

    // try {
    //   const { data } = await axios.post("http://localhost:5000/api/v1/experiences", {
    //     title,
    //     description
    //   });
    //   setExperiences([...experiences, data.experience]);
    //   setTitle("");
    //   setDescription("");
    // } catch (error) {
    //   console.log(error);
    // }
  // };

  return (
    <>
    <StudentHeader />
    <div className="container">
  <div className="form">
    <h1 className="title">Share your experience</h1>
    <div className="form-group">
      <label htmlFor="title" className="label">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input"
        placeholder="Enter a catchy title"
        required 
      />
    </div>
    <div className="form-group">
      <label htmlFor="description" className="label">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="textarea"
        placeholder="Write about your experience"
        required
      ></textarea>
    </div>
    <div className="form-group">
      <button onClick={handleShare} className="button">Share</button>
    </div>
  </div>
  {experiences.length > 0 && (
    <div className="shared-experiences">
      <h2 className="shared-experiences-title">Shared experiences:</h2>
      {experiences.map((experience, index) => (
        <>
        <div key={index} className="shared-experience">
          <h3 className="shared-experience-title">{experience.title}</h3>
          <p className="shared-experience-description">{experience.description}</p>
          <br />
        <hr />
          <div className="shared-by"> <p className="shared-by-info"> <a href={`/students/${experience.userId}`} target="_blank"> Shared by:  {userData.name} ({userData.email}) </a> </p> </div>
        </div>
        </>
      ))}
    </div>
  )}
</div>

</>
  );
}

export default ExperiencePage;