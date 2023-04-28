import React, { useState, useEffect } from "react";
import "./MyApplication.css";
import StudentHeader from "../components/Header/StudentHeader";

const MyApplication = () => {
  // uncomment this while intergration with backend
  //   const [jobs, setJobs] = useState([]);

  //   useEffect(() => {
  //     fetch("https://dummyapi.com/jobs")
  //       .then((response) => response.json())
  //       .then((data) => setJobs(data))
  //       .catch((error) => console.log(error));
  //   }, []);



  
  // This is just for test comment this while intergration with backend
  const jobs = [
    {
      id: 4,
      title: "Software Engineer",
      company: "Google",
      location: "San Francisco, CA",
      description: "Develop and maintain software for Google's search engine.",
    },
    {
      id: 5,
      title: "Product Manager",
      company: "Microsoft",
      location: "Redmond",
      description: "Manage the development of Microsoft's flagship products.",
    },
  ];
  return (
    <>
      <StudentHeader />
      <div className="my-jobs">
        <h2 className="my-jobs__title">My Jobs</h2>
        <p className="my-jobs__count">
          You have applied for {jobs.length} jobs.
        </p>
        <ul className="my-jobs__list">
          {jobs.map((job) => (
            <li className="my-jobs__item" key={job.id}>
              <h3 className="my-jobs__job-title">{job.title}</h3>
              <p className="my-jobs__company">{job.company}</p>
              <p className="my-jobs__location">{job.location}</p>
              <p className="my-jobs__description">{job.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyApplication;
