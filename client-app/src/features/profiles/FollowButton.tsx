import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent } from 'react';
import { Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';
import { LoadingButton } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import  {useHover} from '../../app/common/hooks/useHover';

interface Props {
    profile: Profile;
}

export default observer( function FollowButton({ profile }: Props) {
    const {profileStore, userStore} = useStore();
    const {updateFollowing, loading} = profileStore;
    const [hoverRef, isHovered] = useHover();

    if (userStore.user?.username === profile.username) return null;

    function handleFollow(e: SyntheticEvent, username: string) {
        e.preventDefault();
        profile.following ? updateFollowing(username, false) : updateFollowing(username, true);
    }

    return (
        
        <Box component={'div'} ref={hoverRef} width={'100%'} mx={'auto'} textAlign={'center' as 'center'}>
            <LoadingButton 
                fullWidth variant='contained' 
                onClick={(e) => handleFollow(e, profile.username)}
                loading={loading}
                sx={!profile.following ? { backgroundColor: 'gray'} : { backgroundColor: 'green'} } 
                className='button-isolated hover' 
            >
                <Typography variant='button' fontSize={'.8em'}>
                    {!isHovered && (profile.following ? 'Following' : 'Not Following')}
                    {isHovered && (profile.following ? 'Un-follow' : 'Follow')}
                </Typography>
            </LoadingButton>
        </Box>
    )
})