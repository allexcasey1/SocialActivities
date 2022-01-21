import { Alert, List, ListItem } from '@mui/material';
import React from 'react';

interface Props {
    errors: any;
}

export default function ValidationErrors({errors}: Props) {
    return (
        <Alert variant='standard' severity='error' >
            {errors && (
                <List dense>
                    {errors.map((err: any, i: any) => (
                        <ListItem key={i} disablePadding>
                            {err}  
                        </ListItem>
                    ))}
                </List>
            )}
        </Alert>
    )
}