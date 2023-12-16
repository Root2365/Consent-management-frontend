import { Grid, Button, Toolbar, TextField, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from './navbar.js';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { updateConsent } from '../../actions/consent.js';

const updateForm = {
    status: '',
    startDate: '',
    endDate: '',
    validity: '',
};

const EditConsent = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const updateData = useSelector((state) => state.consent.consentToUpdate);

    const [formData, setFormData] = useState(updateData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.name === 'reqStartDate') {
            setstartdate(e.target.value);
        } else if (e.target.name === 'reqEndDate') {
            setenddate(e.target.value);
        } else if (e.target.name === 'validity') {
            setvalidity(e.target.value);
        }
    };

    const [focus, setFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    const [focus1, setFocused1] = useState(false);
    const [hasValue1, setHasValue1] = useState(false);
    const onFocus1 = () => setFocused1(true);
    const onBlur1 = () => setFocused1(false);

    const [focus2, setFocused2] = useState(false);
    const [hasValue2, setHasValue2] = useState(false);
    const onFocus2 = () => setFocused2(true);
    const onBlur2 = () => setFocused2(false);

    const [startdate, setstartdate] = useState(
        moment(`${updateData.startDate}`).format('YYYY-MM-DD')
    );

    const [enddate, setenddate] = useState(
        moment(`${updateData.endDate}`).format('YYYY-MM-DD')
    );

    const [validity, setvalidity] = useState(
        moment(`${updateData.validity}`).format('YYYY-MM-DD')
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        await dispatch(updateConsent(updateData.consentId, formData));
        navigate('/patient/consents');
    };

    useEffect(() => {
        console.log(updateData);
    }, []);

    const paperStyle = {
        padding: 40,
        height: '45%',
        width: 400,
        marginTop: '15%',
        marginLeft: '35%',
        backgroundColor: '#20CD51',
    };
    const btnstyle = {
        backgroundColor: '#20CD51',
        left: '43%',
        width: '200px',
        borderRadius: 50,
    };
    return (
        <div>
            <Header />
            <div style={{}}>
                <Grid
                    style={{ margin: '80px 0 20px  0' }}
                    alignContent="center"
                >
                    <div>
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
                                            Edit Consent
                                        </h2>
                                    </Grid>
                                    <TextField
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            marginBottom: '30px',
                                        }}
                                        name="reqStartDate"
                                        label="   Request Start Date"
                                        type={
                                            hasValue || focus ? 'date' : 'text'
                                        }
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        value={startdate}
                                    />
                                    <TextField
                                        onFocus={onFocus1}
                                        onBlur={onBlur1}
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            marginBottom: '30px',
                                        }}
                                        name="reqEndDate"
                                        label="   Request End Date"
                                        type={
                                            hasValue1 || focus1
                                                ? 'date'
                                                : 'text'
                                        }
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        value={enddate}
                                    />
                                    {/* <label
                                        style={{
                                            display: 'inline-block',
                                            width: '10px',
                                            textAlign: 'right',
                                            color: 'white',
                                            fontSize: 20,
                                        }}
                                    >
                                        Status:
                                    </label>
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="status"
                                        type="text"
                                        defaultValue={updateData.status}
                                        fullWidth
                                        required
                                        onChange={handleChange}
                                    /> */}
                                    <TextField
                                        onFocus={onFocus2}
                                        onBlur={onBlur2}
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            margin: '4px',
                                            marginBottom: '30px',
                                        }}
                                        name="validity"
                                        label="   validity"
                                        type={
                                            hasValue2 || focus2
                                                ? 'date'
                                                : 'text'
                                        }
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        value={validity}
                                    />
                                </Paper>
                            </Grid>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                style={btnstyle}
                            >
                                Make Changes
                            </Button>
                        </form>
                    </div>
                </Grid>
            </div>
        </div>
    );
};

export default EditConsent;
