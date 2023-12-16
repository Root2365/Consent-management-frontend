import { Toolbar, TextField } from '@material-ui/core';
import React from 'react';
import Header from './Navbar.js';
import './styles.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('patient'));
    if (!user) {
        return <Navigate to="/login" />;
    }
    return (
        <div>
            <Header />
            <Toolbar />
            <Toolbar />
            <Toolbar />

            <TextField
                InputProps={{ disableUnderline: true }}
                style={{
                    background: '#20CD51',
                    borderRadius: 50,
                    margin: 'auto auto 1% 40%',
                    height: '40px',
                    width: '20%',
                    color: 'white',
                }}
                placeholder="   Name"
                fullWidth
                required
            />
            <TextField
                InputProps={{ disableUnderline: true }}
                style={{
                    background: '#20CD51',
                    borderRadius: 50,
                    margin: '1% auto 1% 40%',
                    height: '40px',
                    width: '20%',
                }}
                placeholder="   Email"
                type="Email"
                fullWidth
                required
            />
            <TextField
                InputProps={{ disableUnderline: true }}
                style={{
                    background: '#20CD51',
                    borderRadius: 50,
                    margin: '1% auto 1% 40%',
                    height: '40px',
                    width: '20%',
                }}
                placeholder="   Password"
                type="Password"
                fullWidth
                required
            />
            <TextField
                InputProps={{ disableUnderline: true }}
                style={{
                    background: '#20CD51',
                    borderRadius: 50,
                    margin: '1% auto auto 40%',
                    height: '40px',
                    width: '20%',
                }}
                placeholder="   Phone Number"
                type="number"
                fullWidth
                required
            />
        </div>
    );
};

export default Profile;
