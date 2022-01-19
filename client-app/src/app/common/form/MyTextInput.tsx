import { Alert, FormControl, FormHelperText, FilledInput, Typography } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

interface Props {
    placeholder: string;
    name: string;
    label?: string;
    helptext?: string;
    type?: string;
}

export default function MyTextInput(props: Props) {
    const [field, meta] = useField(props.name);
    return(
        <FormControl variant='filled' fullWidth error={meta.touched && !!meta.error} >
            <Typography component={'label'}>{props.label}</Typography>
            <FilledInput {...field} {...props}  />
                {meta.touched && meta.error ? (
                    <Alert severity='error'>{meta.error}</Alert>
                ) : null}
    
            <FormHelperText variant='outlined' children={props.helptext} /> 
  
        </FormControl>
    )
}