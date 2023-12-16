import { AppBar, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box } from '@material-ui/core';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { LOGOUT } from '../../constants/actionTypes';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = ['Update Profile', 'Change Password'];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const Header = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
        navigate(-1);
    };

    let navigate = useNavigate();
    let username = 'Username';
    let hospitalname = 'Hospitalname';

    const logout = () => {
        navigate('/');
        dispatch({ type: LOGOUT });
    };

    return (
        <>
            <AppBar sx={{ background: '#10BB40', minHeight: '70px' }}>
                <Toolbar>
                    <Button
                        disableElevation="true"
                        sx={{
                            '&:hover': { backgroundColor: '#10EB40' },
                            margin: '2px',
                            background: '#10BB40',
                        }}
                        variant="contained"
                        onClick={() => navigate(-1)}
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
                    <h2 style={{ marginLeft: '28%' }}>{hospitalname}</h2>
                    <Box
                        m={1}
                        //margin
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                        sx={{ flexGrow: 1 }}
                    >
                        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                            <Select
                                multiple
                                displayEmpty
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <em>{username}</em>;
                                    }

                                    return selected.join(', ');
                                }}
                                MenuProps={MenuProps}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem disabled value="">
                                    <em>{username}</em>
                                </MenuItem>
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(
                                            name,
                                            personName,
                                            theme
                                        )}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button
                            sx={{
                                '&:hover': { backgroundColor: '#8A0717' },
                                marginLeft: '10px',
                                marginBottom: '1%',
                                borderRadius: '20px',
                                background: 'red',
                                color: 'white',
                            }}
                            variant="contained"
                            onClick={logout}
                        >
                            Log out
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
