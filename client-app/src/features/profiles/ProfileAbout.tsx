import React, {useState} from 'react';
import {useStore} from "../../app/stores/store";
import ProfileEditForm from "./ProfileEditForm";
import { observer } from 'mobx-react-lite';
import { Grid, Box, Typography, Button } from '@mui/material';

export default observer(function ProfileAbout() {
    const {profileStore} = useStore();
    const {isCurrentUser, profile} = profileStore;
    const [editMode, setEditMode] = useState(false);

    return (
        <>
            <Grid container>
                <Box sx={{width: '100%'}}>
                    <Box sx={{float: 'left'}}>
                        <Typography children={`About ${profile?.displayName}`} />
                    </Box>
                    

                    {isCurrentUser && (
                        <Box sx={{ float: 'right' }} >
                            <Button
                                children={editMode ? 'Cancel' : 'Edit Profile'}
                                onClick={() => setEditMode(!editMode)}
                            />
                        </Box>
                        )
                    }

                </Box>

            </Grid>

            <Grid container >
                {editMode ? <ProfileEditForm setEditMode={setEditMode} /> :
                    <span style={{whiteSpace: 'pre-wrap'}}>{profile?.bio}</span>}
            </Grid>
        </>
    )
                    
})
 
