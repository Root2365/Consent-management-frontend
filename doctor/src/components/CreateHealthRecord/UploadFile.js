import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginLeft: '1%',

        marginBottom: '1%',
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const FileUploadForm = () => {
    const classes = useStyles();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Selected file:', selectedFile);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="file-upload"></InputLabel>
            <label style={{ marginBottom: '-3%' }}>Report:</label>
            <Input id="file-upload" type="file" onChange={handleFileChange} />
            <FormHelperText>File must be in PDF format.</FormHelperText>
        </FormControl>
    );
};

export default FileUploadForm;
