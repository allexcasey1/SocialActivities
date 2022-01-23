import React from 'react';
import { observer } from 'mobx-react-lite';
import { Profile } from '../../app/models/profile';
import { Avatar, Card, CardContent, CardHeader, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Person } from '@mui/icons-material';

interface Props {
    profile: Profile;
}

export default observer( function ProfileCard({profile}: Props) {

    return (
        <Paper sx={{ margin: -3}}>
        <Card component={Link} to={`/profiles/${profile.image}`}  >
            <CardHeader 
                avatar={
                    <Avatar src={profile.image} variant="square"/>}
                title={
                    <Typography variant='subtitle2' children={profile.displayName} />
                } 
                />
            <CardContent children={
                <Typography variant='subtitle2' children={profile.bio?? 'bio goes here'} />
            } />
            <CardContent children={
                <>
                    <Person />
                    20 Followers
                </>
            }/>
            
        </Card>
        </Paper>
    )
})