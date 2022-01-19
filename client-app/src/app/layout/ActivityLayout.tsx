import { Container } from '@mui/material';
import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

export default function ActivityLayout() {
    return (
        <Fragment>
            <Container maxWidth={'xl'} className='sticky navbar'>
                <Nav />
            </Container>
            <Outlet></Outlet>
        </Fragment>
    )
}