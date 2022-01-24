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
    function truncate(str: string | undefined) {
        if (str) {
            return str.length > 40 ? str.substring(0, 37) + '...' : str;
        }
    }

    return (
        <Paper sx={{ margin: -3}}>
            <Card component={Link} to={`/profiles/${profile.username}`}  >
                <CardHeader 
                    avatar={
                        <Avatar src={profile.image} variant="square" children={profile.displayName[0]}
                            sx={{ height: 150, width: 150 }}/>}
                    />
                <CardContent children={
                    <Typography variant='h6' children={profile.displayName} />
                } />
                <CardContent children={
                    <Typography variant='body1' children={truncate(profile.bio)} />
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