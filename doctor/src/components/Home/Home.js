import { Toolbar } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Toolbar />
            <h1>
                This is the place where website information and goals will be
                displayed
            </h1>
        </div>
    );
};

export default Home;
