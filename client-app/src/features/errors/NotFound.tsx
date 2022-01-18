import { Search } from '@mui/icons-material';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        
        <Container>
            <Paper>
                <Box mt={5} sx={{width: '100%', textAlign: 'center' }}>
                    <Search sx={{fontSize: '5em', fontWeight: 'bold', display: 'inline-block'}} />
                    <Typography variant='h5' fontWeight={'bold'} children={
                        <>
                            Oops - we've looked everywhere and could not find this
                        </>

                    } />
                    <Box mt={2} pb={2} sx={{width: '100%'}}>
                        <Button variant='contained' children={
                            <Link to='/activities'> Return to activities page</Link>
                        } />
                    </Box>
                </Box>

            </Paper>
        </Container>
    )
}