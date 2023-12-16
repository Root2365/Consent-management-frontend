import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    FormControl,
    InputLabel,
    Select,
    TextField,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: '20px', // set the background color to white
        marginBottom: '1%',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    textField: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
}));

const SeverityBox = () => {
    const classes = useStyles();
    const [selectedOption, setSelectedOption] = useState('Low');
    const [inputText, setInputText] = useState('');

    const handleOptionChange = (event) => {
        const { value } = event.target;
        setSelectedOption(value);
    };

    const handleInputChange = (event) => {
        const { value } = event.target;
        setInputText(value);
    };

    return (
        <div className={classes.container}>
            <Typography
                style={{
                    paddingLeft: '2%',
                    textAlign: 'left',
                    backgroundColor: 'white',
                    height: '50px',
                    width: '80%',
                    borderRadius: '10px',
                }}
            >
                Record Type: {selectedOption}
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="dropdown">Select severity:</InputLabel>

                <Select
                    native
                    value={selectedOption}
                    onChange={handleOptionChange}
                    inputProps={{
                        name: 'option',
                        id: 'dropdown',
                    }}
                >
                    {/* <option aria-label="Select" value="Type" /> */}
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </Select>
            </FormControl>
        </div>
    );
};

export default SeverityBox;
