import React from 'react';
import { observer } from 'mobx-react-lite';
import { Profile } from '../../app/models/profile';
import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import FollowButton from './FollowButton';

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
        <Card sx={{margin: -1, pr: 1, height: 350, width: 150, fontSize: '1em'}}>
            <CardHeader 
                avatar={
                    <Avatar src={profile.image} variant="square" 
                        children={<Typography style={{fontSize: '2em'}}>{profile.displayName[0]}</Typography>}
                        sx={{ height: 125, width: 125, mb: -2.5 }}/>}

                />
            <CardContent sx={{height: '25%'}}>
                <Typography variant='subtitle2' children={<Link to={`/profiles/${profile.username}`}>{profile.displayName}</Link>} />
                <Typography variant='caption' children={truncate(profile.bio)} />
            </CardContent>  
            <Divider /> 
            <Typography variant='caption' color={'gray'} >
                <Person /> {profile.followersCount} {profile.followersCount === 1 ? 'follower' : 'followers'} 
            </Typography>
                <CardActions>
                     <FollowButton profile={profile}/>
                </CardActions> 
        </Card>
    )
})