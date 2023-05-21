import React, { useState } from "react";
import axios from "axios";
import "./Css/ProfileSkills.css";

const ProfileSkills = ({sg,sl,st,sskills}) => {
  const [socialMedia, setSocialMedia] = useState([
    {
      github: "",
      linkedin: "",
      twitter: "",
    },
  ]);

  const [github,setGithub] = useState(sg)
  const [twitter,setTwitter] =useState(st)
  const [linkedin,setLinkedin] = useState(sl)
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

  // const handleSocialMediaChange = (e) => {
  //   const { name, value } = e.target;
  //   setSocialMedia((prevState) => ({ ...prevState, [name]: value }));
  // };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    // console.log(socialMedia);
    const formData = new FormData()
    formData.append("id", localStorage.getItem('studentId'))
    formData.append("github", github)
    formData.append("twitter", twitter)
    formData.append("linkedin", linkedin)
    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/updateProfile`,
        formData,
        // {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // }
      );
      console.log(response.data);
      setIsEditing(false);
      setGithub(response.data.github);
      setLinkedin(response.data.linkedin)
      setTwitter(response.data.twitter)
    } catch (error) {
      console.log(error);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSocialMedia(initialSocialMedia);
  };

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = async() => {
    if (newSkill !== "") {
      const newSkills = [...skills, newSkill];
      setSkills(newSkills);
      const addSkill = await axios.post(`${process.env.REACT_APP_URI}/addskills/${localStorage.getItem('studentId')}`,[newSkill])
      console.log(newSkill);
      console.log(addSkill);
      // window.location.reload()
      setNewSkill("");
    }
  };

  const handleDeleteSkill = async (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
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
      <div className="reach-out-page">
        <div className="social-media">
          <h2>Reach Out</h2>
          {isEditing ? (
            <>
              <div className="links-section">
                <label>Github:</label>
                <input
                  className="social-media-input"
                  type="text"
                  name="github"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                />
                <label>LinkedIn:</label>
                <input
                  className="social-media-input"
                  type="text"
                  name="linkedin"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                />
                <label>Twitter:</label>
                <input
                  className="social-media-input"
                  type="text"
                  name="twitter"
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                />
                <div className="social-media-buttons">
                  <button className="social-media-button" onClick={handleSave}>
                    Save
                  </button>
                  <button
                    className="social-media-button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="link-section">
                <a href={github} target="_blank" className="hover:cursor-pointer text-xl px-4 text-gray-500">Github</a>
                <a href={linkedin} target="_blank" className="hover:cursor-pointer text-xl px-4 text-gray-500">LinkedIn:</a>
                <a href={twitter} target="_blank" className="hover:cursor-pointer text-xl px-4 text-gray-500">Twitter:</a>
                <button className="social-media-button" onClick={handleEdit}>
                  Edit
                </button>
              </div>
            </>
          )}
        </div>

        <div className="skills">
          <h2>Skills</h2>
          <ul>
            {sskills.map((skill, index) => (
              <div className="skills-list">
                <section className="list" key={index}>
                  {skill} {" "}
                  <button
                    className="skill-button"
                    onClick={() => handleDeleteSkill(index)}
                  >
                    X
                  </button>
                </section>
              </div>
            ))}
          </ul>
          <div className="skill-inputs">
            <section className="input-section">
              <input
                className="skill-input"
                type="text"
                value={newSkill}
                onChange={handleNewSkillChange}
              />
              <button className="skill-button" onClick={handleAddSkill}>
                Add
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSkills;
