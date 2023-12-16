import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import DoctorRegister from './components/RegisterDoctor/Register';
import Login from './components/Login/Login';

const App = () => {
    // const user = JSON.parse(localStorage.getItem('hospital'));

    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Routes>
                    <Route path="/" exact element={<Navigate to="/login" />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route
                        path="/doctor_register"
                        exact
                        element={<DoctorRegister />}
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
