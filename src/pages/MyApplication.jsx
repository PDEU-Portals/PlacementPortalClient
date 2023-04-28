import React, { useState, useEffect } from "react";
import "./MyApplication.css";
import StudentHeader from "../components/Header/StudentHeader";
import axios from "axios";

const MyApplication = () => {

  const [jobs,setJobs] = React.useState(null)

  // uncomment this while intergration with backend
  //   const [jobs, setJobs] = useState([]);

    useEffect(() => {
      const fetchAppliedJobs = async() => {
        const response = await axios.get(`http://localhost:5000/api/v1/getAppliedJobs/${localStorage.getItem('studentId')}`)
        console.log(response.data);
        setJobs(response.data)
      }
      fetchAppliedJobs()
    }, []);



  
  // This is just for test comment this while intergration with backend
  // const jobs = [
  //   {
  //     id: 4,
  //     title: "Software Engineer",
  //     company: "Google",
  //     location: "San Francisco, CA",
  //     description: "Develop and maintain software for Google's search engine.",
  //   },
  //   {
  //     id: 5,
  //     title: "Product Manager",
  //     company: "Microsoft",
  //     location: "Redmond",
  //     description: "Manage the development of Microsoft's flagship products.",
  //   },
  // ];

  if(jobs){
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
                <p className="my-jobs__location">{job.location.map((loc) => loc)}</p>
                <p className="my-jobs__description">{job.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
};

export default MyApplication;
