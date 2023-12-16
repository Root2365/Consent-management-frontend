import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import decode from 'jwt-decode';

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('patient'))
    );
    const [abhaId, setAbhaId] = useState('NULL');

    useEffect(() => {
        const token = user?.token;
        const decodedToken = decode(token);
        setAbhaId(decodedToken?.id);
    }, []);

    const logout = () => {
        navigate('/');
        dispatch({ type: LOGOUT });
    };

    return (
        <React.Fragment>
            <AppBar sx={{ background: '#10BB40', minHeight: '70px' }}>
                <Toolbar>
                    <Button
                        disableElevation="true"
                        sx={{
                            '&:hover': { backgroundColor: '#10EB40' },
                            margin: '0px 2px 0 -25px',
                            background: '#10BB40',
                        }}
                        variant="contained"
                        onClick={() => navigate('/')}
                    >
                        <ArrowBackIcon />{' '}
                    </Button>
                    <Button
                        // color="primary"
                        sx={{ color: 'white' }}
                        size="large"
                        startIcon={<MedicalServicesIcon />}
                        onClick={() => navigate('/')}
                    >
                        General Hospital
                    </Button>
                    <Button
                        sx={{
                            '&:hover': { backgroundColor: '#FAF9F6' },
                            marginLeft: 'auto',
                            borderRadius: '20px',
                            background: 'white',
                            color: 'black',
                        }}
                        variant="contained"
                        onClick={() => navigate('/patient/profile')}
                    >
                        Profile
                    </Button>
                    <Button
                        sx={{
                            '&:hover': { backgroundColor: '#8A0717' },
                            marginLeft: '10px',
                            borderRadius: '20px',
                            background: 'red',
                            color: 'white',
                        }}
                        variant="contained"
                        onClick={logout}
                    >
                        Log out
                    </Button>
                </Toolbar>
                <Typography
                    marginLeft={8}
                    sx={{ fontWeight: 'bold', fontSize: 16 }}
                >
                    ABHA ID: {abhaId}
                </Typography>
            </AppBar>
            {/* <AppBar sx={{background: "#10BB40", minHeight: '70px'}}>
                <Toolbar>
                    <Typography marginLeft={2}  sx={{fontWeight: 'bold', fontSize: 16}}>
                        General Hospital
                    </Typography>
                </Toolbar>
            </AppBar> */}
        </React.Fragment>
    );
};

export default Header;
