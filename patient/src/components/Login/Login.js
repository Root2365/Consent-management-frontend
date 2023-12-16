import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import { Grid, Paper, TextField, Button, Link , IconButton, InputAdornment} from '@material-ui/core';
import Header from './Header.js';
import { login } from '../../actions/auth.js';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const initialState = {
    email: '',
    password: '',
};

const Login = () => {
    const { authData, isLoading } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () =>
        setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData, navigate));
        navigate('/patient');
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
        width: '150px',
        borderRadius: 50,
    };

    if (authData && !isLoading) {
        return <Navigate to="/patient" />;
    }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <Grid style={{ margin: '200px 0 50px  0' }}>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align="center">
                            <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                                Log In
                            </h2>
                        </Grid>

                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                margin: '4px',
                                marginBottom: '30px',
                            }}
                            name="email"
                            placeholder="   Enter Email"
                            fullWidth
                            required
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleShowPassword}
                                        >
                                            {showPassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                disableUnderline: true,
                            }}
                            style={{
                                background: 'white',
                                margin: '4px',
                                marginBottom: '30px',
                            }}
                            name="password"
                            placeholder="   Enter password"
                            // type="password"
                            variant="outlined"
                            fullWidth
                            required
                            onChange={handleChange}
                        />
                        <Link
                            href="/register"
                            style={{
                                color: 'white',
                                marginBottom:'145px',
                                marginLeft:"80%",
                                fontWeight: 'bold',
                            }}
                        >
                            Sign Up
                        </Link>
                    </Paper>
                </Grid>
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                >
                    Login
                </Button>
            </form>
        </div>
    );
};

export default Login;
