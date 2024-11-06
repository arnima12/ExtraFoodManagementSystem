import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();

    const noNavbarFooterPaths = ['/login', '/choice', '/donarRegistration', '/recipientRegistration', '/adminRegistration'];

    return (
        <div>
            {!noNavbarFooterPaths.includes(location.pathname) && <Navbar />}
            <Outlet />
            {!noNavbarFooterPaths.includes(location.pathname) && <Footer />}
        </div>
    );
};

export default Main;
