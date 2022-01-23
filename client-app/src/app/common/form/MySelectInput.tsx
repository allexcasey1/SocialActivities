import { Alert, FormControl, FormHelperText, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

interface Props {
    placeholder: string;
    name: string;
    options: any;
    label?: string;
    helptext?: string;
}

interface CategoryOption {
    value: string;
    text: string;
}

export default function MySelectInput(props: Props) {
    const [field, meta, helpers] = useField(props.name);
    return(
        <FormControl variant='filled' fullWidth error={meta.touched && !!meta.error}>

            <Typography component={'label'}>{props.label}</Typography>
            
            <Select variant='filled' value={field.value} 
                onChange={(event: SelectChangeEvent)  => (helpers.setValue(event.target.value))}
                onBlur={() => helpers.setTouched(true)} 
                placeholder={props.placeholder}>
                    {props.options.map((option: CategoryOption) => (
                        <MenuItem
                            key={option.value}
                            value={option.value} >
                                {option.text}
                        </MenuItem>
                    ))}
            </Select>

            {
                meta.touched && meta.error ? 
                    ( <Alert severity='error'>{meta.error}</Alert> ) : null
            }

            <FormHelperText component='h2' variant='outlined' children={props.helptext} /> 

        </FormControl>
    )
}