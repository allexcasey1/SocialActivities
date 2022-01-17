import { People } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
    return (
        <Box textAlign={'center'} width={'100%'} sx={{backgroundColor: '#bbbabb', height: 'auto', verticalAlign: 'middle'}}>
            <Box mb={4}>
                <People sx={{display: 'inline', color: 'white', fontSize: '5em', height: '50%', marginLeft: '-1em'}} />
                <Box sx={{display: 'inline', height: '50%', verticalAlign: 'middle' }}>
                    <Typography color={'white'} variant={'h2'} display={'inline'}>Acvtivities</Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant={'h4'} color={'#39f'}>Welcome to Activities!</Typography>
            </Box>
            <Button 
                variant={'outlined'} 
                sx={{
                    margin: '2em', 
                    border: 'none', 
                    padding: '0.5em initial',
                    '&:hover':{ 
                        backgroundColor: '#aaa', 
                        border: 'none' } 
                    }}
                children={
                    <NavLink to="/activities/list">
                        Take me to my Activity List
                    </NavLink>
                } 
            />
                
        </Box>
    )
}