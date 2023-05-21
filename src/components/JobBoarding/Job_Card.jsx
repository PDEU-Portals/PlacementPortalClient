import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Job_Card = () => {

  // const [jobs,setJobs] = React.useState([])

  const navigate = useNavigate()

  React.useEffect(() =>{
    const fetchJobs = async() => {
      const data = await axios.get(`http://localhost:5000/api/v1/recruiter/getJobs`,{
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('studentToken')}`
        }
      })
      // console.log(data.data)
      setJob(data.data)
    }
    fetchJobs()
  },[])

  const [query, setQuery] = React.useState("");
  const [job, setJob] = React.useState(null);

  // const applicationDeadline = new Date(job_description.applicationDeadline)
  // console.log(applicationDeadline.getFullYear().toString())
  // console.log(Date.now().toLocaleString())

  const handleClick = (id) => {
    navigate(`/students/jobboarding/jobdetail/${id}`, {
      state:{
        id
      }
    })
  }

  if(job){
    return (
      <>
        <input
          placeholder="Enter Job"
          className="search-bar ml-11 w-2/4 p-5 rounded-2xl border-solid border-2 "
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="grid grid-cols-2 jobCard">
          {job
            .filter((job_description) => {
              if (query === "") {
                return job_description;
              } else if (
                job_description.skill.toLowerCase().includes(query.toLowerCase())
              ) {
                return job_description;
              }
            })
            .sort((postA, postB) => (postA.deadline < postB.deadline ? -1 : 1))
            .map((job_description) => (
              <div className="job-card relative  h-auto bg-slate-200 m-10 rounded-3xl" id={job_description._id}>
                <h1 className="skill text-3xl pl-6 pt-5 ">
                  {job_description.skills.map(skill => skill+' ')}
                </h1>
                <h3 className="company text-2xl text-orange-400 pl-6 ">
                  {job_description.jobType}
                </h3>
                <h4 className="job-desc text-xl pl-6 pt-3">
                  {job_description.title}
                </h4>
                <div className=" flex">
                  <div className=" text-sm m-0 w-8/12 pl-6 pt-2  pb-0 pr-10">
                    {job_description.description}
                  </div>
                  <div className="">
                  {/* /students/jobboarding/jobdetail/1 */}
                  <Link to={`/students/jobboarding/jobdetail/${job_description._id}`}>
                    <button className=" ml-5 bg-slate-300 w-auto p-5  mr-5 rounded-3xl" onClick={() => handleClick(job_description._id)}>
                      Apply Now
                    </button>
                  </Link>
                  </div>
                </div>
                <div className="pl-6 mt-5 mb-5 font-light">
                  {" "}
                  Openings : {job_description.openings} &nbsp;&nbsp;
                  {/* Deadline : {`${new Date(job_description.applicationDeadline).getDay().toString().padStart(2,'0')}-${(new Date(job_description.applicationDeadline).getMonth()+1).toString().padStart(2,'0')}-${new Date(job_description.applicationDeadline).getFullYear().toString()}`} */}
                  Deadline: {`${new Date(job_description.applicationDeadline).getDate()}-${(new Date(job_description.applicationDeadline).getMonth()+1)}-${new Date(job_description.applicationDeadline).getFullYear()}`}
                </div>
              </div>
            ))}
        </div>
      </>
    );
  }else{
    return(
      <div className="flex justify-center items-center">
        <h1 className="text-3xl mt-8">No Jobs Posted</h1>
      </div>
    )
  }
};

export default Job_Card;