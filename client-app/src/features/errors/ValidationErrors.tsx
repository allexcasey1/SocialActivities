import { Warning } from '@mui/icons-material';
import { Alert, AlertTitle, List, ListItem } from '@mui/material';
import React from 'react';

interface Props {
    errors: string[] | null;
}

export default function ValidationErrors({errors}: Props) {
    return (
        <Alert variant='filled' severity='error' sx={{ marginTop: '2em', opacity: '85%' }}>
            <AlertTitle children={'Form has errors:'}/>
            {errors && (
                <List>
                    {errors.map((err: any, i) => (
                        
                        <ListItem key={i} >
                            <Warning sx={{width: '1em'}}/> {err}  
                        </ListItem>
                  
                    ))}
                        
                </List>
            )}
        </Alert>
    )
}