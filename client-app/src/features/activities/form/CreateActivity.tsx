import { Container, Grid } from '@mui/material';
import React from 'react';
import ActivityForm from './ActivityForm';

export default function CreateActivity() {

    return (
        <Container sx={{ mt: '2em', mb: '4em'}}>
            <Grid container columns={16}>
                <Grid item sm={1} md={4} lg={4} />

                <Grid item sm={14} md={8} lg={8} > 
                    <ActivityForm />
                </Grid>

                <Grid item sm={1} md={4} lg={4}  />
            </Grid>
        </Container>

)}