import { Grid, Button, Toolbar, TextField, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import Header from './Navbar.js';
import { useNavigate, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createHealthRecord } from '../../actions/healthRecord.js';
import DropdownTextField from './TextBox.js';
import SeverityBox from './SeverityBox.js';
import FileUploadForm from './UploadFile.js';

const initialState = {
    patientId: '',
    dateOfVisit: '',
    recordType: '',
    reportDetails: '',
    severity: '',
};

const HealthRecordCreate = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('doctor'))
    );

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        dispatch(createHealthRecord(formData, navigate));
    };

    const paperStyle = {
        padding: 40,
        height: '45%',
        width: 400,
        margin: '50px auto',
        backgroundColor: '#20CD51',
    };
    const btnstyle = {
        backgroundColor: '#20CD51',
        left: '45%',
        width: '200px',
        borderRadius: 50,
    };

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header />
            <Toolbar />
            <div style={{}}>
                <Grid
                    style={{ margin: '80px 0 20px  0' }}
                    alignContent="center"
                >
                    <div>
                        <Header />
                        <form onSubmit={handleSubmit}>
                            <Grid style={{ margin: '70px 0 50px  0' }}>
                                <Paper elevation={10} style={paperStyle}>
                                    <Grid align="center">
                                        <h2
                                            style={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Create Health Record
                                        </h2>
                                    </Grid>

                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="patientId"
                                        label="   Patient ID"
                                        type="text"
                                        fullWidth
                                        required
                                        onChange={handleChange}
                                    />
                                    <label style={{ color: 'white' }}>
                                        Date of Visit:
                                    </label>
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                            '& .MuiPickersCalendar-weekDayLabel':
                                                {
                                                    color: 'white',
                                                },
                                        }}
                                        name="dateOfVisit"
                                        label=""
                                        placeholder=""
                                        type="date"
                                        fullWidth
                                        required
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="recordType"
                                        label="   Record Type"
                                        type="text"
                                        fullWidth
                                        required
                                        onChange={handleChange}
                                    />

                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="reportDetails"
                                        label="   Report Details"
                                        type="text"
                                        fullWidth
                                        required
                                        onChange={handleChange}
                                    />

                                    {/* <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="recordType"
                                        label="  Record Type"
                                        type="text"
                                        fullWidth
                                        required
                                    /> */}
                                    {/* <DropdownTextField /> */}
                                    {/* <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            height: '100px',
                                            marginBottom: '30px',
                                        }}
                                        name="reportDetails"
                                        label="   Report details"
                                        type="text"
                                        fullWidth
                                        required
                                    /> */}
                                    {/* <SeverityBox /> */}
                                    {/* <FileUploadForm /> */}
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="severity"
                                        label="   Severity"
                                        type="text"
                                        fullWidth
                                        required
                                        onChange={handleChange}
                                    />
                                </Paper>
                            </Grid>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                style={btnstyle}
                            >
                                Create Record
                            </Button>
                        </form>
                    </div>
                </Grid>
            </div>
        </div>
    );
};

export default HealthRecordCreate;
