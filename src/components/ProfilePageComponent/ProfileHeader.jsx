import React, { useState, useEffect } from "react";
import "./Css/ProfileHeader.css";
import dummyphoto from "./Dummy-Profile.jpg";
import axios from "axios";

function ProfilePage() {
  // Set initial state for user profile information
  const [name, setName] = useState("John Doe");
  const [shortDescription, setShortDescription] = useState(
    "Web Developer | Explorer | problem solver"
  );
  const [email, setEmail] = useState("John.dce21@sot.pdpu.ac.in")
  const [website, setWebsite] = useState("https://www.example.com");
  const [photo, setPhoto] = useState(dummyphoto);
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  );
  // Set initial state for editing status
  const [isEditing, setIsEditing] = useState(false);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  useEffect(() => {
    // Load initial data from API endpoint
    axios
      .get(`http://localhost:5000/api/v1/getInfo`)
      .then((response) => {
        console.log(response.data.resume[0].secure_url);
        setName(response.data.name);
        // setShortDescription(response.data.shortDescription);
        setWebsite(response.data.website);
        // setPhoto(dummyphoto);
        setDescription(response.data.description);
        setInitialDataLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  // Handle form submit to update user profile information
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);

    // Prepare data to send to API
    const formData = new FormData();
    formData.append("name", name);
    formData.append("shortDescription", shortDescription);
    formData.append("website", website);
    formData.append("photo", photo);
    formData.append("description", description);

    // Send data to API endpoint
    axios
      .post("https://dummyapi.com/profile", formData)
      .then((response) => {
        setName(response.data.name);
        setShortDescription(response.data.shortDescription);
        setWebsite(response.data.website);
        setPhoto(dummyphoto);
        setDescription(response.data.description);
        setIsEditing(false);
      })
      .catch((error) => console.log(error));
  };

  // Handle cancel button click to reset form to initial state
  const handleCancel = () => {
    // Need to add logic here, so that intital data is loaded
    setName("John Doe");
    setShortDescription("Web Developer");
    setWebsite("https://www.example.com");
    setPhoto("");
    setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    setIsEditing(false);
  };

  return (
    <div className="profile">
      {/* <h1 className="profile__title">Profile</h1> */}
      {!isEditing && (
        <div className="profile__content">
          <div className="img_container">
            <h1>PDEU Student</h1>
            <img className="profile__photo" src="https://source.unsplash.com/150x150/?portrait?3" alt="Profile" />
          </div>
          <div className="header-content">
            <p className="profile__name"> {name}</p>
            <p className="profile__short-description">
               {shortDescription}
            </p>
            <p className="profile__website">
              Website: <a href={website}>{website}</a>
            </p>
            <p className="profile__email">
              Email: {email}
            </p>
            <p className="profile__description"> {description}</p>
            <button
              className="profile__edit-button"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>
        </div>
      )}
      {isEditing && (
        <>
         <div className="profile__content">
          <div className="img_container">
            <h1>PDEU Student</h1>
            <img className="profile__photo" src="https://source.unsplash.com/150x150/?portrait?3" alt="Profile" />
            <input
            className="profile__edit-input"
            type="file"
            onChange={(event) => setPhoto(event.target.files[0])}
          />
          </div>
          <div className="header-content">
          <form className="profile__edit-form" onSubmit={handleSubmit}>
            <p className="profile__name"> 
            <input
            className="profile__edit-input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          /></p>
            <p className="profile__short-description">
            <input
            className="profile__edit-input"
            type="text"
            value={shortDescription}
            onChange={(event) => setShortDescription(event.target.value)}
          />
            </p>
            <p className="profile__website">
              Website:  <input
            className="profile__edit-input"
            type="text"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
            </p>
            <p className="profile__email">
              Email: <input
            className="profile__edit-input"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
            </p>
            <p className="profile__description"> 
            <textarea
            className="profile__edit-textarea"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          /></p>
           <div className="button-container">
            <button className="profile__save-button" type="submit">
              Save
            </button>
            <button
              className="profile__cancel-button"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
            </form>
          </div>
        </div>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
