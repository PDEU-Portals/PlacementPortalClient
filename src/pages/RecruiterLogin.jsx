import React from "react";
import Header from '../components/Header/Header.js';
import './RecruiterLogin.css';  
import img from './BackImg.png';

const RecruiterLogin = () => {
    return ( 
        <>
            <Header />
            <div className='LoginTechnicalquiz'>
            <p className="new">Recruiter Admin Panel</p>
        <img src= {img}  className='ClassroomPicture' />
        
        <div className="loginbox">
          <label htmlFor="Brnach">Email Address</label>
          <br />
          <input type="text" id='Branch' name='Branch'/>
          <div className="topicinput">
            <label htmlFor="topic">password</label>
            <br />
            <input type="text" id='topic' name='topic'/>
          </div>
          <div className="submitbutton">
            <button type="button"><a href="/recruiter/job_posting">Login</a></button>
          </div>
        </div>
      </div>
        </>
     );
}
 
export default RecruiterLogin;