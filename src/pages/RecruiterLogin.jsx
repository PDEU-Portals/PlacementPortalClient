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
          <label htmlFor="Branch">Email Address</label>
          <br />
          <label htmlFor="Name">Company Name</label>
          <input type="text" id='Branch' name='Branch'/>
          <div className="topicinput">
            <label htmlFor="topic">password</label>
            <br />
            <input type="text" id='topic' name='topic'/>
          </div>
          <div className="submitbutton">
            <button type="button"><a href="/recruiter/companyprofile">Login</a></button>
          </div>
        </div>
      </div>
        </>
     );
}
 
export default RecruiterLogin;