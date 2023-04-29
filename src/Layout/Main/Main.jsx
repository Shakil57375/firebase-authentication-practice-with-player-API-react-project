import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ScrollToTop></ScrollToTop>
            <Footer></Footer>
        </div>
    );
};

export default Main;