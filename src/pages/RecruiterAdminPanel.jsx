import React from "react";
import Header from "../components/Header/Header";

const RecruiterAdminPanel = () => {
    return ( 
        <>
            <Header />
            <p>Recruiter Admin Panel</p>
            <a href="/recruiter/post_job">
                <button> Post Job </button>
            </a>
        </>
     );
}
 
export default RecruiterAdminPanel;