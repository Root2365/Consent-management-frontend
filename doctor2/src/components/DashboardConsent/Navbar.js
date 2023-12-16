import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';

const Header = () => {
    let ABHA_NUM = 123455959;
    let name = window.location.href.split('/')[3];
    let navigate = useNavigate();
    const dispatch = useDispatch();

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
                        onClick={() => navigate(-1)}
                    >
                        <ArrowBackIcon />{' '}
                    </Button>
                    <MedicalServicesIcon />
                    <Typography
                        marginLeft={2}
                        sx={{ fontWeight: 'bold', fontSize: 32 }}
                    >
                        General Hospital
                    </Typography>

                    <Typography
                        marginLeft="auto"
                        sx={{ fontWeight: 'bold', fontSize: 16 }}
                    >
                        Doctor Name
                    </Typography>

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
            </AppBar>
        </React.Fragment>
    );
};

export default Header;
