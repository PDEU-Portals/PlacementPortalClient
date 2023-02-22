import React from "react";  
import './Css/Analytics.css'
import Header from "../Header/Header";
import Sidebar from './Sidebar.jsx';

const Analysis = () => {
    return ( 
        <>  
            <Header />
            <div className="main-analysis-container">
                <Sidebar />
                <div className="main-content-container">
                    check text
                </div>
            </div>
            
        </>
     );
}
 
export default Analysis;