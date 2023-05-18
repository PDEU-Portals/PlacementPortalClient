import React, { useState, useEffect } from "react";
import "../ProfilePageComponent/Css/ProfileHeader.css";
import dummyphoto from "../ProfilePageComponent/Dummy-Profile.jpg";
import axios from "axios";

function ViewOnlyProfileHeader ({sname,semail,swebsite,sdesc,ssdesc}) {
  const [name, setName] = useState(sname);
  const [shortDescription, setShortDescription] = useState(ssdesc);
  const [email, setEmail] = useState(semail);
  const [website, setWebsite] = useState(swebsite);
  const [photo, setPhoto] = useState(dummyphoto);
  const [description, setDescription] = useState(sdesc);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  useEffect(() => {
    // Load initial data from API endpoint
    axios
      .get(
        `http://localhost:5000/api/v1/getInfo/${localStorage.getItem(
          "studentId"
        )}`
      )
      .then((response) => {
        console.log(response.data.resume[0].secure_url);
        setName(response.data.name);
        setWebsite(response.data.website);
        setDescription(response.data.description);
        setEmail(response.data.email);
        setInitialDataLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="profile">
        <div className="profile__content">
          <div className="img_container">
            <h1>PDEU Student</h1>
            <img
              className="profile__photo"
              src="https://source.unsplash.com/150x150/?portrait?3"
              alt="Profile"
            />
          </div>
          <div className="header-content">
            <p className="profile__name"> {name}</p>
            <p className="profile__short-description">{shortDescription}</p>
            <p className="profile__website">
              Website: <a href={website}>{website}</a>
            </p>
            <p className="profile__email">Email: {email}</p>
            <p className="profile__description">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOnlyProfileHeader;
