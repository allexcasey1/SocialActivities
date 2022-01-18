import { Alert, List, ListItem } from '@mui/material';
import React from 'react';

interface Props {
    errors: string[] | null;
}

export default function ValidationErrors({errors}: Props) {
    return (
        <Alert variant='filled' severity='error' sx={{ marginTop: '2em' }}>
            {errors && (
                <List>
                    {errors.map((err: any, i) => (
                        <ListItem key={i}>{err}</ListItem>
                    ))}
                </List>
            )}
        </Alert>
    )
}