import React from 'react';
import StudentHeader from '../Header/StudentHeader.jsx';
import Hero from './Hero'
import InfoPage from './InfoPage'
import PortalInfo from './PortalInfo';

const StudentHomePage = () => {
    return ( 
        <>
           <StudentHeader />
           <Hero />
           <InfoPage />
           <PortalInfo />
        </>
     );
}
 
export default StudentHomePage;