import React, { useState } from "react";
// import "./JobLists.css";
import Header from '../Header/Header'


const JobCard = ({ job, onDelete }) => {
  const { companyName, role, description, skills } = job;

  return (
    <div className="job-card">
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

const JobList = ({ jobs }) => {
  const [jobList, setJobList] = useState(jobs);

  const handleDelete = (index) => {
    const newList = [...jobList];
    newList.splice(index, 1);
    setJobList(newList);
  };

  return (
    <div className="job-list">
      {jobList.map((job, index) => (
        <JobCard key={index} job={job} onDelete={() => handleDelete(index)} />
      ))}
    </div>
  );
};

const jobs = [
  {
    companyName: "ABC Company",
    role: "Software Engineer",
    description: "We're looking for a talented software engineer to join our team and work on cutting-edge projects.",
    skills: ["JavaScript", "React", "Node.js", "AWS"],
  },
  {
    companyName: "XYZ Company",
    role: "Product Manager",
    description: "We're seeking a product manager to lead our team and drive the development of innovative products.",
    skills: ["Product Management", "Agile", "UX Design"],
  },
  {
    companyName: "123 Company",
    role: "Data Analyst",
    description: "We're looking for a skilled data analyst to join our team and help us analyze and interpret large datasets.",
    skills: ["SQL", "Python", "Data Visualization", "Statistical Analysis"],
  },
  {
    companyName: "ABC Company",
    role: "Software Engineer",
    description: "We're looking for a talented software engineer to join our team and work on cutting-edge projects.",
    skills: ["JavaScript", "React", "Node.js", "AWS"],
  },
  {
    companyName: "XYZ Company",
    role: "Product Manager",
    description: "We're seeking a product manager to lead our team and drive the development of innovative products.",
    skills: ["Product Management", "Agile", "UX Design"],
  },
  {
    companyName: "123 Company",
    role: "Data Analyst",
    description: "We're looking for a skilled data analyst to join our team and help us analyze and interpret large datasets.",
    skills: ["SQL", "Python", "Data Visualization", "Statistical Analysis"],
  },
  {
    companyName: "ABC Company",
    role: "Software Engineer",
    description: "We're looking for a talented software engineer to join our team and work on cutting-edge projects.",
    skills: ["JavaScript", "React", "Node.js", "AWS"],
  },
  {
    companyName: "XYZ Company",
    role: "Product Manager",
    description: "We're seeking a product manager to lead our team and drive the development of innovative products.",
    skills: ["Product Management", "Agile", "UX Design"],
  },
  {
    companyName: "123 Company",
    role: "Data Analyst",
    description: "We're looking for a skilled data analyst to join our team and help us analyze and interpret large datasets.",
    skills: ["SQL", "Python", "Data Visualization", "Statistical Analysis"],
  },
];

const jobList = () => {
  return (
    <>
    <Header/>
    <div className="app-container">
      <h1 className="title">Job Listings</h1>
      <JobList jobs={jobs} />
    </div>
    </>
  );
};

export default jobList;
