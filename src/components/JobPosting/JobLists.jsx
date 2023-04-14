import React, { useState } from "react";
import "./JobLists.css";
import RecruiterHeader from '../Header/RecruiterHeader.jsx';
import { fetchJobs } from "../../utils/fetchJobs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const JobCard = ({ job, onDelete }) => {
  // console.log(job)
  const { companyName, role, description, skills } = job;

  const navigate = useNavigate()

  const handleClick =() => {
    navigate(`/recruiter/jobinformation/${job._id}`)
  }

  return (
    <div className="job-card-recruiter" onClick={handleClick}>
      <h2>{companyName}</h2>
      <h3>{role}</h3>
      <p>{description}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <button onClick={onDelete}>Delete Job</button>
    </div>
  );
};

const JobList = () => {
  const [jobList, setJobList] = useState([]);


  React.useEffect(() => {
    const jobs = async() => {
      const data = await fetchJobs()
      setJobList(data)
    }
    jobs()
  },[])

  const handleDelete = async(index) => {
    const newList = [...jobList];
    newList.splice(index, 1);
    setJobList(newList);
  };

  // jobList.map(job => console.log(job))

  return (
    <div className="job-list-recruiter">
      {jobList.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};





// const jobs = [
//   {
//     companyName: "ABC Company",
//     role: "Software Engineer",
//     description: "We're looking for a talented software engineer to join our team and work on cutting-edge projects.",
//     skills: ["JavaScript", "React", "Node.js", "AWS"],
//   },
//   {
//     companyName: "XYZ Company",
//     role: "Product Manager",
//     description: "We're seeking a product manager to lead our team and drive the development of innovative products.",
//     skills: ["Product Management", "Agile", "UX Design"],
//   },
//   {
//     companyName: "123 Company",
//     role: "Data Analyst",
//     description: "We're looking for a skilled data analyst to join our team and help us analyze and interpret large datasets.",
//     skills: ["SQL", "Python", "Data Visualization", "Statistical Analysis"],
//   },
//   {
//     companyName: "ABC Company",
//     role: "Software Engineer",
//     description: "We're looking for a talented software engineer to join our team and work on cutting-edge projects.",
//     skills: ["JavaScript", "React", "Node.js", "AWS"],
//   },
//   {
//     companyName: "XYZ Company",
//     role: "Product Manager",
//     description: "We're seeking a product manager to lead our team and drive the development of innovative products.",
//     skills: ["Product Management", "Agile", "UX Design"],
//   },
//   {
//     companyName: "123 Company",
//     role: "Data Analyst",
//     description: "We're looking for a skilled data analyst to join our team and help us analyze and interpret large datasets.",
//     skills: ["SQL", "Python", "Data Visualization", "Statistical Analysis"],
//   },
//   {
//     companyName: "ABC Company",
//     role: "Software Engineer",
//     description: "We're looking for a talented software engineer to join our team and work on cutting-edge projects.",
//     skills: ["JavaScript", "React", "Node.js", "AWS"],
//   },
//   {
//     companyName: "XYZ Company",
//     role: "Product Manager",
//     description: "We're seeking a product manager to lead our team and drive the development of innovative products.",
//     skills: ["Product Management", "Agile", "UX Design"],
//   },
//   {
//     companyName: "123 Company",
//     role: "Data Analyst",
//     description: "We're looking for a skilled data analyst to join our team and help us analyze and interpret large datasets.",
//     skills: ["SQL", "Python", "Data Visualization", "Statistical Analysis"],
//   },
// ];

const jobList = () => {
  return (
    <>
    <RecruiterHeader/>
    <div className="app-container-recruiter">
      <h1 className="title">Job Listings</h1>
     <JobList/>
    </div>
    </>
  );
};

export default jobList;
