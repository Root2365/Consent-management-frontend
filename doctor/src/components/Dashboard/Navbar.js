import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import decode from 'jwt-decode';

const Header = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('doctor'))
    );
    const [name, setName] = useState('NULL');

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            setName(decodedToken?.name);
        }
    }, []);

    const logout = async () => {
        await dispatch({ type: LOGOUT });
        navigate('/');
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
                        marginLeft={2}
                        sx={{
                            fontWeight: 'bold',
                            marginLeft: '65%',
                            fontSize: 16,
                        }}
                    >
                        {name}
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
