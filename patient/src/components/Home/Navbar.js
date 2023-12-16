import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { useNavigate } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    let navigate = useNavigate();

    const registerPath = () => {
        navigate('/register');
    };

    const loginPath = () => {
        navigate('/login');
    };

    return (
        <>
            <AppBar sx={{ background: '#10BB40', minHeight: '70px' }}>
                <Toolbar>
                    <Button
                        // color="primary"
                        sx={{ color: 'white' }}
                        size="large"
                        startIcon={<MedicalServicesIcon />}
                    >
                        General Hospital
                    </Button>

                    <Box
                        m={1}
                        //margin
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                        sx={{ flexGrow: 1 }}
                    >
                        <div className="dropdown">
                            <Button
                                className="dropbtn"
                                variant="contained"
                                onClick={loginPath}
                                sx={{
                                    marginRight: '10px',
                                    borderRadius: 50,
                                    color: 'black',
                                    background: '#DDEEE2',
                                    '&:hover': {
                                        border: '1px solid black',
                                        color: 'black',
                                    },
                                }}
                            >
                                Log In
                            </Button>
                            <div class="dropdown-content">
                                <a href="/login">Patient</a>
                                <a href="http://localhost:3002/login">Doctor</a>
                            </div>
                        </div>

                        <div className="dropdown">
                            <Button
                                className="dropbtn"
                                variant="contained"
                                onClick={registerPath}
                                sx={{
                                    marginRight: '10px',
                                    borderRadius: 50,
                                    color: 'black',
                                    background: '#DDEEE2',
                                    '&:hover': {
                                        border: '1px solid black',
                                        color: 'black',
                                    },
                                }}
                            >
                                Register
                            </Button>
                            <div class="dropdown-content">
                                <a href="/register">Patient</a>
                            </div>
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
