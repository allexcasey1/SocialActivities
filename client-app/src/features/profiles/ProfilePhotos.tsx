import { Delete, Photo as Trash} from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Grid, ImageList, ImageListItem, Typography, Button, Box, Paper, ButtonGroup } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import PhotoUploadWidget from '../../app/common/imageUpload/PhotoUploadWidget';
import { Photo as IPhoto, Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';

interface Props {
    profile: Profile;
}

export default observer( function ProfilePhotos({profile}: Props) {
    const {profileStore: {isCurrentUser, uploadPhoto, uploading, loading, setMainPhoto, deletePhoto}} = useStore();
    const [addPhotoMode, setAddPhotoMode] = useState<boolean>(false);
    const [target, setTarget] = useState('');

    function handlePhotoUpload(file: Blob) {
        uploadPhoto(file).then(() => setAddPhotoMode(false));
    }

    function handleSetMainPhoto(photo: IPhoto, e: SyntheticEvent<HTMLButtonElement>) {
        setTarget(e.currentTarget.name);
        setMainPhoto(photo);
    }

    function handleDeletePhoto(photo: IPhoto, e: SyntheticEvent<HTMLButtonElement>) {
        setTarget(e.currentTarget.name);
        deletePhoto(photo);
    }
    return (
        <>
            <Grid container>
                <Box sx={{ width: '100%', display: 'block' }}>
                    <Box sx={{ float: 'left', display: 'inline-block' }} >
                        <Typography variant='subtitle1'children={
                            <><Trash sx={{ display: 'inline-block', fontSize: '2em', mb: '-0.3em'}}/>
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
                    <PhotoUploadWidget uploadPhoto={handlePhotoUpload} loading={uploading}/>
                ) : (
                    <ImageList cols={8}>
                        {profile.photos!.map((photo: IPhoto) => (
                            <ImageListItem key={photo.id} component={Paper} elevation={1} 
                                sx={{borderRadius : '2px', margin: '5%'}}cols={2} rows={2} >
                                    <img id={photo.id} src={photo.url} alt='alt-text' style={{ borderRadius: '2px' }} />
                                    {isCurrentUser && (
                                        <ButtonGroup fullWidth sx={{borderRadius: '2px'}}>
                                            <LoadingButton 
                                                name={'main' + photo.id}
                                                sx={{border: 'green', color: 'green', borderRadius: '2px'}}
                                                children={'Main'}
                                                loading={target === 'main' + photo.id && loading}
                                                onClick={e => handleSetMainPhoto(photo, e)}
                                                disabled={photo.isMain}/>
                                            <LoadingButton 
                                                name={photo.id}
                                                sx={{border: 'red', color: 'red', borderRadius: '2px'}}
                                                loading={target === photo.id && loading}
                                                onClick={e => handleDeletePhoto(photo, e)}
                                                children={<><Delete /></>} />
                                        </ButtonGroup>
                                    )}
                            </ImageListItem>
                        ))}
                        
                        
                    </ImageList>
                )}
            </Grid>
            
            
        </>
    ) 
})