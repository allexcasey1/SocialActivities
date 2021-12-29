import { Container } from '@mui/material';
import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

export default function ActivityLayout() {
    return (
        <Fragment>
            <Nav />
            <Container maxWidth="xl">
                <Outlet></Outlet>
            </Container>
        </Fragment>
    )
}