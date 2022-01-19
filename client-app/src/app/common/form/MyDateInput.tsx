import { FormControl, FormHelperText, FilledInput, Typography, Alert } from '@mui/material';
import { useField } from 'formik';
import React from 'react';
import DatePicker, {ReactDatePickerProps} from 'react-datepicker';
import { format } from 'date-fns';

interface Props {
    helpertext: string;
    label: string;
}

export default function MyDateInput(props: Partial<ReactDatePickerProps & Props>) {
    const [field, meta, helpers] = useField(props.name!);
    const {helpertext, label} = props;
    return(
        <>
        <FormControl variant='filled' fullWidth error={meta.touched && !!meta.error} sx={{zIndex: '500'}} >
            <Typography component={'label'}>{label}</Typography>
            <DatePicker 
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={(value) => helpers.setValue(value)}
                customInput={<FilledInput placeholder={ format(new Date(), 'dd MMM yyyy h:mm aa')!} />}
            />
            {
                meta.touched && meta.error ? 
                    ( <Alert severity='error'>{meta.error}</Alert> ) : null
            }

            <FormHelperText>{helpertext}</FormHelperText>

        </FormControl>
        </>
    )
}