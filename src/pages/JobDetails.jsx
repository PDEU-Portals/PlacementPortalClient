import React, { Link } from "react"
import StudentHeader from "../components/Header/StudentHeader"
import jobdetails from "../data/jobdetails"
import {useLocation, useNavigate, useParams} from "react-router-dom"
import axios from "axios"

export default function JobDetails() {

  const navigate = useNavigate()

  const {jobId} = useParams()
  React.useEffect(() => {
    console.log("hit");
    const fetchJob = async() => {
      const response = await axios.get(`http://localhost:5000/api/v1/recruiter/getJob/${jobId}`,{
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('studentToken')}`
        }
      })
      // console.log(response.data)
      setJob(response.data)
    }
    fetchJob()
  },[])

  const [job,setJob] = React.useState(null)
  // console.log(job)

  const handleClick = async() =>{
    
    // navigate(`/students/resource/applyjob/${id}`)
    console.log(jobId,localStorage.getItem('studentId'));
    const response = await axios.post(`http://localhost:5000/api/v1/applyJob`, {
      id: localStorage.getItem('studentId'),
      jobId: jobId
    })
    // console.log(response.data)
    if(response.status == 200){
      alert("Applied to the job")
      navigate("/students/jobboarding")
    }
    if(response.status == 409) alert("You have already applied to the job")
  }
  

  // const job = jobdetails.find((job) => job.id === Number(id))

  if(job){
    return (
      <>
        <StudentHeader />
        <div className="sm:px-6 lg:px-24">
          <div className="mt-10 sm:flex sm:items-center md:gap-4 lg:mt-20 lg:gap-12 xl:w-4/5">
            <div className="sm:w-full">
              <h1 className="text-[#E08327] text-4xl xl:text-5xl font-bold text-center sm:text-left">
                {job.recruiter.companyName}
              </h1>
              <p className="text-[#1F3368] font-light text-justify px-6 mt-2 sm:px-0 xl:w-4/5 2xl:w-[75%] 2xl:text-xl">
                {job.recruiter.companyDescription}
              </p>
            </div>
            <div className="">
              <img
                src="/images/jobdetails/1.png"
                alt="company"
                className="xl:h-full"
              />
            </div>
          </div>
          <div className="mt-8 lg:mt-14">
            <h1 className="text-[#1F3368] text-4xl font-bold text-center sm:text-left">
              Social Media
            </h1>
            <div className="mt-3 sm:mt-6 text-center space-y-1 sm:text-left sm:flex sm:items-center sm:gap-8 sm:justify-center">
              {/* {job.socialMedia.map((social) => (
                <h4
                  key={social.id}
                  className="text-[#1f33686b] font-bold text-xl cursor-pointer"
                >
                  <a href={social.link} target="_blank" rel="noreferrer">
                    {social.name}
                  </a>
                </h4>
              ))} */}
              <h4
                  className="text-[#1f33686b] font-bold text-xl cursor-pointer"
                >
                  <a href={job.recruiter.companyTwitter} target="_blank" rel="noreferrer">
                    Twitter
                  </a>
                </h4>
              <h4
                  className="text-[#1f33686b] font-bold text-xl cursor-pointer"
                >
                  <a href={job.recruiter.companyLinkedin} target="_blank" rel="noreferrer">
                    Linkedin
                  </a>
                </h4>
              <h4
                  className="text-[#1f33686b] font-bold text-xl cursor-pointer"
                >
                  <a href={job.recruiter.companyWebsite} target="_blank" rel="noreferrer">
                    Website
                  </a>
                </h4>
            </div>
          </div>
  
          <div className="mt-8 lg:mt-14">
            <h1 className="text-[#1F3368] text-3xl font-bold text-center sm:text-left sm:text-4xl">
              Jobs and Internships offered
            </h1>
          </div>
  
          <div className="mt-8">
            <h1 className="text-[#1F3368] text-2xl font-bold text-center sm:text-left sm:text-4xl">
              Skills Company is looking for
            </h1>
            <div className="mt-3 text-center space-y-1 sm:flex sm:items-center sm:gap-7 sm:flex-wrap">
              {job.job.skills.map((skill, index) => (
                <h4 key={index} className="text-lg sm:text-2xl font-semibold">
                  {skill}
                </h4>
              ))}
            </div>
          </div>
  
          <div className="mt-8 lg:mt-14">
            <h1 className="text-[#1F3368] text-2xl font-bold text-center sm:text-left sm:text-4xl">
              Additional Information
            </h1>
            <p className="text-[#1F3368] font-light text-justify px-6 mt-2 sm:px-0 sm:text-lg xl:w-4/5">
              {job.job.description}
            </p>
          </div>
  
          <div className="my-8 lg:mt-14 flex justify-center sm:justify-start">
              <button className="bg-[#E08327] text-[#1F3368] font-semibold px-8 rounded-md py-2 text-xl" onClick={()=>handleClick()}>
                Apply Now
              </button>
          </div>
        </div>
      </>
    )
  }
  
}
