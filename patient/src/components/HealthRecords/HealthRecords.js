import { Toolbar, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './navBar.js';
import HealthRecord from './HealthRecord.js';
import { Navigate } from 'react-router-dom';
import decode from 'jwt-decode';
import { getAllRecords } from '../../actions/healthRecord.js';

import { TextField, Button } from '@mui/material';

const initialState = {
    hospital_id: '',
};

const HealthRecords = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('patient'))
    );
    const [formData, setFormData] = useState(initialState);
    const [patientId, setPatientId] = useState('NULL');

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            setPatientId(decodedToken?.id);
        }
    }, []);

    const { isLoading, records } = useSelector((state) => state.healthRecord);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { patient_id, hospital_id } = formData;
        dispatch(getAllRecords(patientId, hospital_id));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header />{' '}
            <Grid style={{ margin: '10% 0 5% 0' }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        style={{
                            background: 'white',
                            borderRadius: 50,
                            margin: '4px',
                            height: '40px',
                        }}
                        name="hospital_id"
                        label="Hospital ID (1)"
                        type="number"
                        fullWidth
                        required
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        style={{
                            background: 'black',
                            borderRadius: 50,
                            margin: '3px',
                            height: '40px',
                        }}
                    >
                        Get Health Records
                    </Button>
                </form>
            </Grid>
            <Toolbar />
            <Grid
                style={{ marginTop: '2%' }}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {records.map((record) => (
                    <HealthRecord
                        id={record.id}
                        patientId={record.patientId}
                        dateOfVisit={record.dateOfVisit}
                        recordType={record.recordType}
                        reportDetails={record.reportDetails}
                        severity={record.severity}
                    />
                ))}
            </Grid>
        </div>
    );
};

export default HealthRecords;
