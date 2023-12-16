import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import DashBoard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import ConsentDashBoard from './components/DashboardConsent/consentDashBoard';
import HealthRecords from './components/HealthRecords/HealthRecords.js';
import EditConsent from './components/EditConsent/EditConsent';

const App = () => {
    const user = JSON.parse(localStorage.getItem('patient'));

    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route
                        path="/register"
                        exact
                        element={
                            !user ? <Register /> : <Navigate to="/patient" />
                        }
                    />
                    <Route
                        path="/login"
                        exact
                        element={!user ? <Login /> : <Navigate to="/patient" />}
                    />
                    <Route path="/patient" element={<DashBoard />} />
                    <Route
                        path="/patient/consents"
                        element={<ConsentDashBoard />}
                    />
                    <Route path="/patient/profile" element={<Profile />} />
                    <Route
                        path="/patient/records"
                        element={<HealthRecords />}
                    />

                    <Route
                        path="patient/consents/:id"
                        element={<EditConsent />}
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
