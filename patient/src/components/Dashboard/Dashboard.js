import { Grid, Button, Toolbar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Header from './Navbar.js';
import { Navigate, useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';

const PatientDashBoard = () => {
    let navigate = useNavigate();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('patient'))
    );
    const [name, setName] = useState('NULL');

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            console.log(decodedToken);
            setName(decodedToken?.name);
        }
    }, []);

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
                            background: '#20CD51',
                            color: 'white',
                            width: '800px',
                            height: '100px',
                            borderRadius: '40px',
                            fontStyle: 'italic',
                        }}
                    >
                        Welcome, {name}!
                    </h1>

                    <Button
                        style={btnstyle}
                        onClick={() => navigate('/patient/consents')}
                    >
                        View data Requests
                    </Button>
                    <Button
                        style={btnstyle}
                        onClick={() => navigate('/patient/records')}
                    >
                        View Hospital Records
                    </Button>
                </Grid>
            </div>
        </div>
    );
};

export default PatientDashBoard;
