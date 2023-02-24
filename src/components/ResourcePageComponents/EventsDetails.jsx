import React from "react";
import Sidebar  from './Sidebar';
import './Css/EventDetails.css'
import Header from "../Header/Header";

const EventDetails = () => {


    return ( 
        <>
        <Header />
        <div className="event-details-container">
        <Sidebar />
            <div className="Event-details">
                <div className="hackathons">
                  <h1>Hackathons</h1>
                    <ul className="list-of-links">
                      <li><a href="https://devfolio.co/">Devfolio</a></li>
                      <li><a href="https://devpost.com/hackathons">Devpost</a></li>
                    </ul>
                </div>
                <div className="workshops">
                  <h1>Conferences</h1>
                  <ul className="list-of-links">
                      <li><a href="https://conference.icghgd.com/">Conference on green hydrogen</a></li>
                      <li><a href="https://www.conferencealerts.in/">Conference Alerts</a></li>
                    </ul>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default EventDetails;