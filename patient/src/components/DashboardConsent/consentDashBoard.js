import React, { useState, useEffect } from 'react';
import { Toolbar, Grid } from '@material-ui/core';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Navbar.js';
import Consent from './Consent.js';
import { getAllConsents } from '../../actions/consent.js';
import decode from 'jwt-decode';

const ConsentDashBoard = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('patient'))
    );
    const [name, setName] = useState('NULL');
    const [abhaId, setAbhaId] = useState('NULL');
    const [toUpdate, setToUpdate] = useState(false);

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);

            dispatch(getAllConsents(decodedToken.id));
        }
    }, []);

    const { isLoading, consents } = useSelector((state) => state.consent);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header />
            <Toolbar />
            <Grid
                style={{ marginTop: '2%' }}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {consents.map((consent) => (
                    <Consent
                        key={consent.requestId}
                        requestId={consent.requestId}
                        doctorId={consent.doctorId}
                        patientId={consent.patientId}
                        requestingHospitalId={consent.requestingHospitalId}
                        sendingHospitalId={consent.sendingHospitalId}
                        status={consent.status}
                        reqStartDate={consent.reqStartDate}
                        reqEndDate={consent.reqEndDate}
                        reqValidity={consent.reqValidity}
                        consentStartDate={consent.consentStartDate}
                        consentEndDate={consent.consentEndDate}
                        consentValidity={consent.consentValidity}
                    />
                ))}
            </Grid>
        </div>
    );
};

export default ConsentDashBoard;
