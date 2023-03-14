import React from 'react';
import Footer from '../Footer.jsx';
import RecruiterHeader from '../Header/RecruiterHeader.jsx';
import Hero from './Hero.jsx';
import Infopage from './InfoPage.jsx';
import Portal_info from './PortalInfo.jsx';

const RecruiterHomePage = () => {
    return ( 
        <>  
            <RecruiterHeader />
            <Hero />
            <Infopage />
            <Portal_info />
            <Footer />
        </>
     );
}
 
export default RecruiterHomePage;