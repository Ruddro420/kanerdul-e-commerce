import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import MainFooter from '../components/MainFooter';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <MainFooter />
        </div>
    );
};

export default MainLayout;