import React from "react";
import Header from "../components/Header/Header";
import img from './ClassrommPic.png'

const TechnicalTestLogin = () => {
    return ( 
        <>
           <Header />
           <div className='LoginTechnicalquiz'>
        <img src={img}  className='ClassroomPicture' />
        <div className="loginbox">
          <label htmlFor="Brnach">Branch</label>
          <br />
          <input type="dropdown" id='Branch' name='Branch'/>
          <div className="topicinput">
            <label htmlFor="topic">Topic</label>
            <br />
            <input type="text" id='topic' name='topic'/>
          </div>
          <div className="submitbutton">
          <a href="/students/quiz_app">
            <button type="button">SUBMIT</button>
          </a>
          </div>
        </div>
       </div> 
        </>
     );
}
 
export default TechnicalTestLogin;