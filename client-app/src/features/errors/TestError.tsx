import React, { useState } from 'react';
import {Box, Button, ButtonGroup, Container, Paper, Typography } from "@mui/material";
import axios from 'axios';
import ValidationErrors from './ValidationErrors';

export default function TestErrors() {
    const baseUrl = process.env.REACT_APP_API_URL;
    const [errors, setErrors] = useState(null);

    function handleNotFound() {
        axios.get(baseUrl + 'buggy/not-found').catch(err => console.log(err.response));
    }

    function handleBadRequest() {
        axios.get(baseUrl + 'buggy/bad-request').catch(err => console.log(err.response));
    }

    function handleServerError() {
        axios.get(baseUrl + 'buggy/server-error').catch(err => console.log(err.response));
    }

    function handleUnauthorised() {
        axios.get(baseUrl + 'buggy/unauthorised').catch(err => console.log(err.response));
    }

    function handleBadGuid() {
        axios.get(baseUrl + 'activities/notaguid').catch(err => console.log(err));
    }

    function handleValidationError() {
        axios.post(baseUrl + 'activities', {}).catch(err => setErrors(err));
    }

    return (
        <Container sx={{ mb: '4em', mt: '2em' }}>
            <Box width={'100%'} >
                <Typography variant='h5' fontWeight={'bold'} children='Test Error component' />
                <Paper sx={{ marginTop: '1em', padding: '1em' }}>
                    <ButtonGroup fullWidth>
                        <Button onClick={handleNotFound} children='Not Found' />
                        <Button onClick={handleBadRequest} children='Bad Request'/>
                        <Button onClick={handleValidationError} children='Validation Error'/>
                        <Button onClick={handleServerError} children='Server Error'/>
                        <Button onClick={handleUnauthorised} children='Unauthorised'/>
                        <Button onClick={handleBadGuid} children='Bad Guid'/>
                    </ButtonGroup>
                </Paper>
                {errors && (
                    <ValidationErrors errors={errors} />
                )}
                
            </Box>
        </ Container>
    )
}