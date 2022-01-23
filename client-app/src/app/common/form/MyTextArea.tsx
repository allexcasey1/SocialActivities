import { Alert, FormControl, FormHelperText, FilledInput, Typography } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

interface Props {
    placeholder: string;
    name: string;
    label?: string;
    helptext?: string;
    rows?: number;
}

export default function MyTextArea(props: Props) {
    const [field, meta] = useField(props.name);
    return(
        <FormControl variant='filled' fullWidth error={meta.touched && !!meta.error} >
            <Typography component={'label'}>{props.label}</Typography>
            <FilledInput multiline {...field} {...props} />
            {meta.touched && meta.error ? (
                <Alert severity='error'>{meta.error}</Alert>
            ) : null}
            <FormHelperText component='h2' variant='outlined' children={props.helptext} /> 
        </FormControl>
    )
}