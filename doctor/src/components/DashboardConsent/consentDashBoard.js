import { Toolbar, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import decode from 'jwt-decode';
import { getAllConsents } from '../../actions/consent.js';
import Header from './Navbar.js';
import Consent from './Consent.js';

const ConsentDashBoard = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('doctor'))
    );

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
                        dateofRequest={consent.dateofRequest}
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
