import React, { useState, useEffect } from "react";
import "../ProfilePageComponent/Css/ProfileHeader.css";
import dummyphoto from "../ProfilePageComponent/Dummy-Profile.jpg";
import axios from "axios";

function ViewOnlyProfileHeader ({sname,semail,swebsite,sdesc,ssdesc}) {
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
            <p className="profile__name"> {sname}</p>
            <p className="profile__short-description">{ssdesc}</p>
            <p className="profile__website">
              Website: <a href={swebsite}>{swebsite}</a>
            </p>
            <p className="profile__email">Email: {semail}</p>
            <p className="profile__description">{sdesc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOnlyProfileHeader;
