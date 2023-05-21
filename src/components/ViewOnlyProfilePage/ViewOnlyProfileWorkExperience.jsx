import React, { useEffect, useState } from "react";
import axios from "axios";
import '../ProfilePageComponent/Css/ProfileWorkExperience.css';

function ProfileWorkExperience({we}) {

  return (
    <div className="experience-section">
      <h1 className="profile-page__heading">Work Experience</h1>
      {we.map((workExperience, index) => (
        <div key={index} className="profile-page__work-experience">
          <p className="profile-page__work-experience-company">
            {workExperience.company}
          </p>
          <p className="profile-page__work-experience-title">
            {workExperience.title}
          </p>
          <p className="profile-page__work-experience-date">
            {workExperience.startDate} - {workExperience.endDate}
          </p>
          <p className="profile-page__work-experience-description">
            {workExperience.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProfileWorkExperience;
