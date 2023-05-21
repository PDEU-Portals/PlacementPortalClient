import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewOnlySkills({ sg, sl, st,skills }) {
  // const [skills, setSkills] = useState([]);

  // useEffect(() => {
  //   fetchSkills();
  // }, []);

  // const fetchSkills = async () => {
  //   try {
  //     const response = await axios.get("/api/skills");
  //     setSkills(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <>
      <div className="reach-out-page">
        <div className="social-media">
          <h2>Reach Out</h2>
          <div className="link-section">
            <a
              href={sg}
              target="_blank"
              className="hover:cursor-pointer text-xl px-4 text-gray-500"
            >
              Github: {sg}
            </a>
            <a
              href={sl}
              target="_blank"
              className="hover:cursor-pointer text-xl px-4 text-gray-500"
            >
              LinkedIn: {sl}
            </a>
            <a
              href={st}
              target="_blank"
              className="hover:cursor-pointer text-xl px-4 text-gray-500"
            >
              Twitter: {st}
            </a>
          </div>
        </div>

        <div className="skills">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <div className="skills-list" key={index}>
                <section className="list">{skill}</section>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ViewOnlySkills;
