import { Toolbar, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './navBar.js';
import HealthRecord from './HealthRecord.js';
import { Navigate } from 'react-router-dom';
import decode from 'jwt-decode';

const HealthRecords = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('doctor'))
    );

    const { isLoading, record } = useSelector((state) => state.healthRecord);

    useEffect(() => {
        console.log(record);
    }, []);

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (!record.length) {
        return <h1>No Health Records Found</h1>;
    }

    return (
        <div>
            <Header />
            <Toolbar />
            {/* <h1>Health Record Page</h1> */}
            <Grid
                style={{ marginTop: '2%' }}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {record.map((r) => (
                    <HealthRecord
                        key={r.id}
                        id={r.id}
                        patientId={r.patientId}
                        dateOfVisit={r.dateOfVisit}
                        recordType={r.recordType}
                        reportDetails={r.reportDetails}
                        severity={r.severity}
                    />
                ))}
            </Grid>
        </div>
    );
};

export default HealthRecords;
