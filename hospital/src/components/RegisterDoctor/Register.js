import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { doctorRegister } from '../../actions/index.js';
import { Navigate, useNavigate } from 'react-router-dom';
import './styles.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { InputAdornment } from '@mui/material';

import {
    Grid,
    Paper,
    TextField,
    Button,
    Link,
    Typography,
    IconButton,
} from '@material-ui/core';

import Header from './Header.js';

const initialState = {
    name: '',
    email: '',
    password: '',
    departmant: '',
    position: '',
    specialization: '',
    confirmPassword: '',
};

const DoctorRegister = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('hospital'))
    );

    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const dispatch = useDispatch();

    const handleShowPassword = () =>
        setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleConfirmShowPassword = () =>
        setConfirmShowPassword(
            (prevConfirmShowPassword) => !prevConfirmShowPassword
        );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword, phone } = formData;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else {
            // make API call
            dispatch(doctorRegister(formData, navigate));
        }
    };

    const paperStyle = {
        padding: 20,
        height: '40%',
        width: 500,
        margin: '20px auto',
        backgroundColor: '#20CD51',
    };
    const btnstyle = {
        backgroundColor: '#20CD51',
        left: '45%',
        width: '150px',
        borderRadius: 50,
    };

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <Grid style={{ margin: '10% 0 3% 0' }}>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align="center">
                            <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                                Register a Doctor
                            </h2>
                        </Grid>
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                margin: '4px',
                                marginBottom: '25px',
                            }}
                            name="name"
                            placeholder="   Name"
                            fullWidth
                            required
                            onChange={handleChange}
                            variant="outlined"
                        />
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                margin: '4px',
                                marginBottom: '25px',
                            }}
                            name="departmant"
                            placeholder="   Department"
                            variant="outlined"
                            fullWidth
                            required
                            onChange={handleChange}
                        />
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                margin: '4px',
                                marginBottom: '25px',
                            }}
                            name="position"
                            placeholder="   Position"
                            fullWidth
                            required
                            onChange={handleChange}
                            variant="outlined"
                        />
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                margin: '4px',
                                marginBottom: '25px',
                            }}
                            name="specialization"
                            placeholder="   Specialization"
                            fullWidth
                            required
                            onChange={handleChange}
                            variant="outlined"
                        />
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                margin: '4px',
                                marginBottom: '25px',
                            }}
                            name="email"
                            placeholder="   Email"
                            fullWidth
                            required
                            onChange={handleChange}
                            variant="outlined"
                        />
                        <TextField
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            {!showPassword ? (
                                                <VisibilityIcon
                                                    onClick={handleShowPassword}
                                                />
                                            ) : (
                                                <VisibilityOffIcon
                                                    onClick={handleShowPassword}
                                                />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                disableUnderline: true,
                            }}
                            style={{
                                background: 'white',
                                margin: '4px',
                                marginBottom: '25px',
                            }}
                            placeholder="   Password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            required
                            onChange={handleChange}
                            variant="outlined"
                        />
                        <TextField
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            {!showConfirmPassword ? (
                                                <VisibilityIcon
                                                    onClick={
                                                        handleConfirmShowPassword
                                                    }
                                                />
                                            ) : (
                                                <VisibilityOffIcon
                                                    onClick={
                                                        handleConfirmShowPassword
                                                    }
                                                />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                disableUnderline: true,
                            }}
                            style={{
                                background: 'white',
                                margin: '4px',
                                marginBottom: '25px',
                            }}
                            placeholder="   Confirm Password"
                            name="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            fullWidth
                            required
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Paper>
                </Grid>
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                >
                    Register
                </Button>
            </form>
        </div>
    );
};

export default DoctorRegister;
