import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions/auth.js';
import { useNavigate, Navigate } from 'react-router-dom';
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
// import './navBar/styles.css'
import Header from './Header.js';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
};

const Register = () => {
    const { authData, isLoading } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () =>
        setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleConfirmShowPassword = () =>
        setConfirmShowPassword(
            (prevConfirmShowPassword) => !prevConfirmShowPassword
        );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword, phone } = formData;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else if (phone.length !== 10) {
            alert('Phone number should be 10 digits');
        } else {
            // make API call
            dispatch(signup(formData, navigate));
        }
    };

    const paperStyle = {
        padding: 20,
        height: '40%',
        width: 450,
        marginBottom: '1%',
        marginLeft:"35%",
        backgroundColor: '#20CD51',
    };
    const btnstyle = {
        backgroundColor: '#20CD51',
        left: '43%',
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
                <Grid style={{ margin: '10% 0 2% 0' }}>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align="center">
                            <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                                Register
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
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                margin: '4px',
                                marginBottom: '25px',
                            }}
                            name="phone"
                            placeholder="   Phone Number"
                            type="number"
                            fullWidth
                            required
                            variant="outlined"
                            onChange={handleChange}
                        />
                        {/* <TextField
                        InputProps={{ disableUnderline: true }}
                        style={{
                            background: 'white',
                            borderRadius: 50,
                            margin: '4px',
                            height: '40px',
                        }}
                        placeholder="   Date Of Birth"
                        type="password"
                        fullWidth
                        required
                    /> */}
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            style={{
                                background: 'white',
                                margin: '4px',
                                marginBottom: '25px',
                            }}
                            placeholder="   Email"
                            name="email"
                            fullWidth
                            required
                            variant="outlined"
                            onChange={handleChange}
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
                            name="password"
                            placeholder="   Password"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            required
                            variant="outlined"
                            onChange={handleChange}
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
                            variant="outlined"
                            placeholder="   Confirm Password"
                            name="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            fullWidth
                            required
                            onChange={handleChange}
                        />
                        <Link
                            href="/login"
                            style={{
                                color: 'white',
                                textDecoration: 'underline',
                                fontStyle: 'italic',
                                margin: '8px',
                            }}
                        >
                            Already a user?
                        </Link>
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

export default Register;
