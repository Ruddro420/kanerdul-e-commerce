import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import MainFooter from '../components/MainFooter';
import ScrollToTop from '../components/ScrollToTop';
import { CartProvider } from '../context/CartContext';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <CartProvider>
                <Header />
                <ScrollToTop />
                <Outlet />
                <MainFooter />
                <Toaster />
            </CartProvider>

        </div>
    );
};

export default MainLayout;