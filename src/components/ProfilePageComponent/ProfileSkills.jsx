import React, { useState, useEffect } from "react";
import axios from "axios";
import './Css/ProfileSkills.css';

const ProfileSkills = () => {
  const [socialMedia, setSocialMedia] = useState({
    github: "",
    linkedin: "",
    twitter: "",
  });
  const [initialSocialMedia, setInitialSocialMedia] = useState({
    github: "",
    linkedin: "",
    twitter: "",
  }); // state to hold the initial values of socialMedia for cancel functionality
  const [isEditing, setIsEditing] = useState(false); // state for whether editing mode is active or not

  // This useEffect will fetch the data when page is loaded
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("api/socialMedia");
  //       setSocialMedia(response.data);
  //       setInitialSocialMedia(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  //   fetchSkills();
  // }, []);

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setSocialMedia((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    // try {
    //   await axios.post("api/socialMedia", socialMedia);
    //   setIsEditing(false);
    //   setInitialSocialMedia(socialMedia);
    // } catch (error) {
    //   console.log(error);
    // }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSocialMedia(initialSocialMedia);
  };

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const fetchSkills = async () => {
    try {
      const response = await axios.get("/api/skills");
      setSkills(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddSkill = () => {
    if (newSkill !== "") {
      const newSkills = [...skills, newSkill];
      setSkills(newSkills);
      updateSkills(newSkills);
      setNewSkill("");
    }
  };

  const handleDeleteSkill = async (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
    updateSkills(updatedSkills);
  };
  const updateSkills = async (newSkills) => {
    try {
      await axios.post("/api/skills", newSkills);
    } catch (error) {
      console.error(error);
    }
  };
  const handleNewSkillChange = (e) => {
    setNewSkill(e.target.value);
  };
  return (
    <>
      {/* <div className="social-media">
        <h2>Social Media</h2>
        {isEditing ? (
          <>
            <label>Github:</label>
            <input
              className="social-media-input"
              type="text"
              name="github"
              value={socialMedia.github}
              onChange={handleSocialMediaChange}
            />
            <label>LinkedIn:</label>
            <input
              className="social-media-input"
              type="text"
              name="linkedin"
              value={socialMedia.linkedin}
              onChange={handleSocialMediaChange}
            />
            <label>Twitter:</label>
            <input
              className="social-media-input"
              type="text"
              name="twitter"
              value={socialMedia.twitter}
              onChange={handleSocialMediaChange}
            />
            <button className="social-media-button" onClick={handleSave}>
              Save
            </button>
            <button className="social-media-button" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <p>Github: {socialMedia.github}</p>
            <p>LinkedIn: {socialMedia.linkedin}</p>
            <p>Twitter: {socialMedia.twitter}</p>
            <button className="social-media-button" onClick={handleEdit}>
              Edit
            </button>
          </>
        )}
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill}{" "}
              <button
                className="skill-button"
                onClick={() => handleDeleteSkill(index)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
        <input
          className="skill-input"
          type="text"
          value={newSkill}
          onChange={handleNewSkillChange}
        />
        <button className="skill-button" onClick={handleAddSkill}>
          Add
        </button>
      </div> */}
      <div className="social-media">
  <h2>Social Media</h2>
  {isEditing ? (
    <>
      <label>Github:</label>
      <input
        className="social-media-input"
        type="text"
        name="github"
        value={socialMedia.github}
        onChange={handleSocialMediaChange}
      />
      <label>LinkedIn:</label>
      <input
        className="social-media-input"
        type="text"
        name="linkedin"
        value={socialMedia.linkedin}
        onChange={handleSocialMediaChange}
      />
      <label>Twitter:</label>
      <input
        className="social-media-input"
        type="text"
        name="twitter"
        value={socialMedia.twitter}
        onChange={handleSocialMediaChange}
      />
      <div className="social-media-buttons">
        <button className="social-media-button" onClick={handleSave}>Save</button>
        <button className="social-media-button" onClick={handleCancel}>Cancel</button>
      </div>
    </>
  ) : (
    <>
      <p>Github: {socialMedia.github}</p>
      <p>LinkedIn: {socialMedia.linkedin}</p>
      <p>Twitter: {socialMedia.twitter}</p>
      <button className="social-media-button" onClick={handleEdit}>Edit</button>
    </>
  )}
</div>

<div className="skills">
  <h2>Skills</h2>
  <ul>
    {skills.map((skill, index) => (
      <li key={index}>
        {skill}{" "}
        <button className="skill-button" onClick={() => handleDeleteSkill(index)}>X</button>
      </li>
    ))}
  </ul>
  <div className="skill-inputs">
    <input className="skill-input" type="text" value={newSkill} onChange={handleNewSkillChange} />
    <button className="skill-button" onClick={handleAddSkill}>Add</button>
  </div>
</div>

    </>
  );
};

export default ProfileSkills;
