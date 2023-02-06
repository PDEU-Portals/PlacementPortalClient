import React from 'react'
import Footer from '../Footer'
import Header from '../Header/Header'
import './JobPosting.css'
import Table from './Table/Table'

const JobPosting = () => {
  return (
        
        <>
            <Header/>
            
            <div className="job-title">Goldman Sachs Inc.</div>
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
            
            <Table/>

            
            <Footer/>
        </>
    )
}

export default JobPosting;