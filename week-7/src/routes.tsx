import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/Error';
import OTP from './components/OTP';

const AllRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otp" element={<OTP/>} />
        <Route element={<NotFound/>} />
    </Routes>
);

export default AllRoutes;
