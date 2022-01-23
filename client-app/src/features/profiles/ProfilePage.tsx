import { Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useStore } from '../../app/stores/store';
import ProfileContent from './ProfileContent';
import ProfileHeader from './ProfileHeader';

export default observer(function ProfilePage() {

    const {username} = useParams<{username: string}>()
    const {profileStore} = useStore();
    const {loadingProfile, loadProfile, profile } = profileStore;

    useEffect(() => {
        loadProfile(username!);
    }, [loadProfile, username])

    if (loadingProfile) return <LoadingComponent message="Loading profile..." /> 

    return(
        <Container sx={{ minWidth: '580px' }}>
            <ProfileHeader profile={profile!} />
            <ProfileContent profile={profile!} />
        </Container>
    )
})