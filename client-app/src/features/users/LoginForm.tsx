import { Alert, Box, Typography } from '@mui/material';
import React from 'react';
import {Formik, Form, ErrorMessage } from 'formik';
import MyTextInputContained from '../../app/common/form/MyTextInputContained';
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { LoadingButton } from '@mui/lab';

export default observer(function LoginForm() {
    const {userStore} = useStore();
    return (
        <Formik
            initialValues={{email: '', password: '', error: null}}
            onSubmit={(values, {setErrors}) => userStore.login(values).catch(error => 
                setErrors({error: 'Invalid email or password'}))}
        >
            {({handleSubmit, isSubmitting, errors}) => (
                <Form onSubmit={handleSubmit} autoComplete='off' >
                    <Box>
                        <Box component='div' width={'100%'} textAlign={'center'} sx={{ backgroundColor: '#ddd' }}>
                            <Typography pb={1} variant='h6' height={'100%'} color={'teal'} children={'Login'} />
                        </Box>
                        <Box mx={2} my={2}>

                            <ErrorMessage name='error' render={() => <Alert severity='error' children={errors.error} />} />
                            <MyTextInputContained name='email' placeholder='Email'/>
                            <MyTextInputContained name='password' placeholder='Password' type='password' />
                            <LoadingButton loading={isSubmitting} className='button-isolated submitbutton hover' 
                                variant='contained' type='submit' fullWidth children={'Login'} />
                                
                        </Box>
                    </Box>
                </Form>
            )}

        </Formik>
    )
})