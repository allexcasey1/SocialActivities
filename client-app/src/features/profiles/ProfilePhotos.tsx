import { Photo } from '@mui/icons-material';
import { Grid, ImageList, ImageListItem, Typography, Button, Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import PhotoUploadWidget from '../../app/common/imageUpload/PhotoUploadWidget';
import { useStore } from '../../app/stores/store';

export default observer( function ProfilePhotos() {
    const {profileStore: {isCurrentUser}} = useStore();
    const [addPhotoMode, setAddPhotoMode] = useState<boolean>(false);
    return (
        <>
            <Grid container>
                <Box sx={{ width: '100%', display: 'block' }}>
                    <Box sx={{ float: 'left', display: 'inline-block' }} >
                        <Typography variant='subtitle1'children={
                            <><Photo sx={{ display: 'inline-block', fontSize: '2em', mb: '-0.3em'}}/>
                                Photos
                            </>
                        }/>
                    </Box>
                    <Box sx={{ float: 'right' }} >
                        {isCurrentUser && (
                            <Button children={addPhotoMode ? 'Cancel' : 'Add Photo' }
                                onClick={() => setAddPhotoMode(!addPhotoMode)}/>
                        )}
                    </Box>
                </Box>
            </Grid>
            <Grid container>
                {addPhotoMode ?(
                    <PhotoUploadWidget />
                ) : (
                    <ImageList>
                        <ImageListItem>
                            <img src='/assets/categoryImages/culture.jpg' alt='alt-text' />
                        </ImageListItem>
                        <ImageListItem>
                            <img src='/assets/categoryImages/drinks.jpg' alt='alt-text' />
                        </ImageListItem>
                        <ImageListItem>
                            <img src='/assets/categoryImages/food.jpg' alt='alt-text' />
                        </ImageListItem>
                        <ImageListItem>
                            <img src='/assets/categoryImages/travel.jpg' alt='alt-text' />
                        </ImageListItem>
                    </ImageList>
                )}
            </Grid>
            
            
        </>
    ) 
})