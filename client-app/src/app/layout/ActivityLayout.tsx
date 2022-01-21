import { Container } from '@mui/material';
import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

export default function ActivityLayout() {
    return (
        <Fragment>
            <Container maxWidth={'xl'}>
                <Nav />
            
            <Outlet></Outlet></Container>
        </Fragment>
    )
}