import React from 'react';
import Footer from '../Footer.jsx';
import Hero from './Hero.jsx';
import Infopage from './InfoPage.jsx';
import Portal_info from './PortalInfo.jsx';
import AdminHeader from '../Header/AdminHeader.js';

const AdminHomePage = () => {
    return ( 
        <>
            <AdminHeader />
            <Hero />
            <Infopage />
            <Portal_info />
            <Footer />
        </>
     );
}
 
export default AdminHomePage;