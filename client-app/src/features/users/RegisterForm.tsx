import { Box, Typography } from '@mui/material';
import React from 'react';
import {Formik, Form, ErrorMessage } from 'formik';
import MyTextInputContained from '../../app/common/form/MyTextInputContained';
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { LoadingButton } from '@mui/lab';
import * as Yup from 'yup';
import ValidationErrors from '../errors/ValidationErrors';

export default observer(function RegisterForm() {  
    const {userStore} = useStore();
    return (
        <Formik
            initialValues={{displayName: '', username: '', email: '', password: '', error: null}}
            onSubmit={(values, {setErrors}) => userStore.register(values).catch(error => 
                setErrors({error}))}
                validationSchema={Yup.object({
                    displayName: Yup.string().required(),
                    username: Yup.string().required(),
                    email: Yup.string().required().email(),
                    password: Yup.string().required().min(9).max(18)
                })
            }
        >
            {({handleSubmit, isSubmitting, errors, isValid, dirty}) => (
                <Form className='error' onSubmit={handleSubmit} autoComplete='off' >
                    <Box>
                        <Box component='div' width={'100%'} textAlign={'center'} sx={{ backgroundColor: '#ddd' }}>
                            <Typography pb={1} variant='h6' height={'100%'} color={'teal'} children={'Sign up to Activities'} />
                        </Box>
                        <Box mx={2} my={2}>
                            
                            <MyTextInputContained name='displayName' placeholder='Display Name'/>
                            <MyTextInputContained name='username' placeholder='Username'/>
                            <MyTextInputContained name='email' placeholder='Email'/>
                            <MyTextInputContained name='password' placeholder='Password' type='password' />
                            
                            <ErrorMessage 
                                name='error' render={() => 
                                    <ValidationErrors errors={errors.error} />} />

                            <LoadingButton disabled={!isValid || !dirty || isSubmitting} loading={isSubmitting} 
                                className='button-isolated submitbutton hover' variant='contained' 
                                type='submit' fullWidth children={'Register'} />
                        </Box>
                    </Box>
                </Form>
            )}

        </Formik>
    )
})