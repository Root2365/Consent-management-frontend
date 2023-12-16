import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/CardContent';
import { CardContent, CardHeader, Typography, Button } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import { SET_UPDATE_CONSENT } from '../../constants/actionTypes';
import { useDispatch } from 'react-redux';

const updateData = {
    consentId: '',
    status: '',
    startDate: '',
    endDate: '',
    validity: '',
};

const Consent = (props) => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const goToUpdateForm = async () => {
        await dispatch({ type: SET_UPDATE_CONSENT, payload: updateData });
        navigate(`/patient/consents/${props.requestId}`);
    };

    const [updateData, setUpdateData] = useState({
        consentId: props.requestId,
        status: props.status,
        startDate: props.reqStartDate,
        endDate: props.reqEndDate,
        validity: props.reqValidity,
    });

    // useEffect(() => {
    //     console.log(props);
    // }, []);

    return (
        <div>
            <Button>
                <Paper
                    variant="outlined"
                    elevation={3}
                    sx={{ background: 'LightYellow' }}
                >
                    <Card variant="outlined">
                        <CardHeader title={'Consent Information'} />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {/* <h3>requestId: {props.requestId}</h3> */}
                                <h3>Doctor ID: {props.doctorId}</h3>
                                {/* <h3>patientId: {props.patientId}</h3> */}
                                <h3>
                                    requesting hospital:
                                    {props.requestingHospitalId}
                                </h3>
                                {/* <h3>
                                    sending Hospital: {props.sendingHospitalId}
                                </h3> */}
                                <h3>status: {props.status}</h3>
                                <h3>
                                    requested start date:{' '}
                                    {props.reqStartDate
                                        ? props.reqStartDate
                                              .slice(0, 10)
                                              .split('-')
                                              .reverse()
                                              .join('-')
                                        : props.reqStartDate}
                                </h3>
                                <h3>
                                    requested End Date:{' '}
                                    {props.reqEndDate
                                        ? props.reqEndDate
                                              .slice(0, 10)
                                              .split('-')
                                              .reverse()
                                              .join('-')
                                        : props.reqEndDate}
                                </h3>
                                <h3>
                                    requested Valid till:{' '}
                                    {props.reqValidity
                                        ? props.reqValidity
                                              .slice(0, 10)
                                              .split('-')
                                              .reverse()
                                              .join('-')
                                        : props.reqValidity}
                                </h3>
                                <h3>
                                    consented Start Date:{' '}
                                    {props.consentStartDate
                                        ? props.consentStartDate
                                              .slice(0, 10)
                                              .split('-')
                                              .reverse()
                                              .join('-')
                                        : 'PENDING'}
                                </h3>
                                <h3>
                                    consented End Date:{' '}
                                    {props.consentEndDate
                                        ? props.consentEndDate
                                              .slice(0, 10)
                                              .split('-')
                                              .reverse()
                                              .join('-')
                                        : 'PENDING'}
                                </h3>
                                <h3>
                                    consent Valid till:{' '}
                                    {props.consentValidity
                                        ? props.consentValidity
                                              .slice(0, 10)
                                              .split('-')
                                              .reverse()
                                              .join('-')
                                        : 'PENDING'}
                                </h3>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Button
                        // style={{ maxWidth: '100%', textAlign: 'left' }}
                        style={{ backgroundColor: '#f5f242' }}
                        onClick={goToUpdateForm}
                    >
                        Update Consent
                    </Button>
                </Paper>
            </Button>
        </div>
    );
};

export default Consent;
