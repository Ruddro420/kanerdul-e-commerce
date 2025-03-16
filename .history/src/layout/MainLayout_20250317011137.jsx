import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import MainFooter from '../components/MainFooter';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <ScrollToTop />
            <Outlet />
            <MainFooter />
        </div>
    );
};

export default MainLayout;