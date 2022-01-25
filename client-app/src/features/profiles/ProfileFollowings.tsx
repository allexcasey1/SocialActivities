import { Box, Grid, Stack, ListItem, Typography, List, CircularProgress } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Dimmer } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import ProfileCard from './ProfileCard';

export default observer( function ProfileFollowings() {
    const {profileStore: {profile, followings, loadingFollowings, activeTab}} = useStore();


    if (loadingFollowings) return <Dimmer active={true}><CircularProgress></CircularProgress></Dimmer>

    return (
        <>
            <Box display={'block'} padding={1} width={'100%'}>
                <Typography sx={{float: 'left'}} 
                    children={activeTab === 3 ?( `People following ${profile?.displayName}`) : (`People ${profile?.displayName} follows`)} />
            </Box>
                <Grid container>
                    <List component={Stack} spacing={2} mt={2} overflow={'cascade'} direction={'row'}>
                    {followings.map(profile => (
                        <ListItem key={profile.username}>
                            <ProfileCard profile={profile} />
                        </ListItem>
                    ))}

                    </List >
                    
                </Grid>
        </>
    )
})