import StudentHeader from "../Header/StudentHeader";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import React from "react";
import Job_Card from "./Job_Card";

const Job_Boarding = () => {
 

  return (
    <>
      <StudentHeader />
      <div className="text-5xl text-orange-400 m-11  ">
        Opportunity Boarding <br />
        Page
      </div>
      <div className="text-4xl m-11 ">Full Time Jobs</div>
      <div>
        <Job_Card/>
      </div>


     
    </>
  );
};

export default Job_Boarding;