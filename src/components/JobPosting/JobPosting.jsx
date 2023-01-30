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
            <button className='Post-Jobs'>Post Jobs</button>
            <div className="Manage-Job">
                <div className="Posting">Manage Job Posting</div>
                <input type="text" placeholder='Search' />
                <button className='jobSearch-title'>A to Z</button>
            </div>
            
            <Table/>

            
            <Footer/>
        </>
    )
}

export default JobPosting