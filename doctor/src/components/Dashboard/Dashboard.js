import { Grid, Button, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';
import Header from './Navbar.js';
import { useNavigate, Navigate } from 'react-router-dom';

const DoctorDashBoard = () => {
    let navigate = useNavigate();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('doctor'))
    );

    const btnstyle = {
        '&:hover': { background: '#FF000' },
        backgroundColor: '#20CD51',
        left: '30%',
        margin: '25px',
        width: '250px',
        height: '250px',
        borderRadius: 50,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
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
                    style={{ margin: '120px 0 20px  0' }}
                    alignContent="center"
                >
                    <h1
                        style={{
                            textAlign: 'center',
                            marginLeft: '24%',
                            alignItems: 'center',
                            alignContent: 'center',
                            width: '800px',
                            height: '100px',
                            borderRadius: '40px',
                        }}
                    >
                        Hospital Name
                    </h1>

                    <Button
                        style={btnstyle}
                        onClick={() => navigate('/doctor/create_consent')}
                    >
                        Create Consent
                    </Button>
                    <Button
                        onClick={() => navigate('/doctor/consents')}
                        style={btnstyle}
                    >
                        View All Consents
                    </Button>

                    <Button
                        onClick={() => navigate('/doctor/create_record')}
                        style={btnstyle}
                    >
                        Create Health Record for Patient
                    </Button>
                </Grid>
            </div>
        </div>
    );
};

export default DoctorDashBoard;
