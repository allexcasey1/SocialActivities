import { Container } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
    return (
        <Container sx={{ marginTop: '7em'}}>
            <h1>Home page</h1>
            <h3>Click for <NavLink to="/activities/list">Activities</NavLink></h3>
        </Container>
    )
}