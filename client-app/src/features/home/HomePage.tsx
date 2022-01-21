import { People } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';

export default observer(function HomePage() {
    const {userStore, modalStore} = useStore();

    return (
        <Box className='home-header'>
            <Box mb={4}>
                <People sx={{display: 'inline', color: 'white', fontSize: '5em', height: '50%', marginLeft: '-1em'}} />
                <Box sx={{display: 'inline', height: '50%', verticalAlign: 'middle' }}>
                    <Typography color={'white'} variant={'h2'} display={'inline'}>Acvtivities</Typography>
                </Box>
            </Box>
            {userStore.isLoggedIn ? (
                <>
                    <Box mb={1}>
                        <Typography variant={'h4'} color={'#39f'}>Go to Activities!</Typography>
                    </Box>
                    <Button 
                        className='button hover button-isolated viewbutton'
                        component={NavLink}
                        to="/activities"
                        children={'Activities!'}
                    />
                </>
            ) : (
                <>
                    <Box mb={1}>
                        <Typography variant={'h4'} color={'#39f'}>Welcome to Activities!</Typography>
                    </Box>
                    <Button 
                        className='button hover viewbutton'
                        onClick={() => modalStore.openModal(<LoginForm />)}
                        children={'Login!'}
                    /> 
                    <Button 
                        className='button hover viewbutton'
                        onClick={() => modalStore.openModal(<RegisterForm />)}
                        children={'Register!'}
                    /> 
                </>
            )}
                
        </Box>
    )
})