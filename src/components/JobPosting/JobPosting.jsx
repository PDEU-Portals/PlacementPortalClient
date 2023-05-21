import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Footer from '../Footer'
import RecruiterHeader from '../Header/RecruiterHeader'
import './JobPosting.css'
import Table from './Table/Table'
import ApplicantsTable from './Table/Table'

const JobPosting = () => {

    const {id} = useParams()
    // console.log(id)

    const [job,setJob] = React.useState(null)
    const [applicants,setApplicants] = React.useState(null)

    React.useEffect(() => {
        const getJob = async() => {
            const response = await axios.get(`http://localhost:5000/api/v1/recruiter/getJob/${id}`)
            // console.log(response.data.job)
            setJob(response.data)
            setApplicants(response.data.job.applicants)
        }
        getJob()
    },[])

    // console.log(applicants)


if(job && applicants){
    return (
        
        <>
            <RecruiterHeader/>
            
            <div className="job-title">{job.job.title}</div>
            <a href="/recruiter/post_job">
                <button className='Post-Jobs'>Post Jobs</button>
            </a>
            <div className="Manage-Job">
                <div className="Posting">Manage Job Posting</div>
                <input type="text" placeholder='Search' />

                <a href="/recruiter/post_job">
                    <button className='jobSearch-title'>A to Z</button>
                </a>
            </div>

            <ApplicantsTable id={id} />
            <Footer/>
        </>
    )
}
  
}

export default JobPosting;