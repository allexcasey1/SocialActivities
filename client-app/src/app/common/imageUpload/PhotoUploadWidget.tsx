import { Box, ButtonGroup, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PhotoWidgetDropzone from './PhotoWidgetDropzone';
import { Cropper } from 'react-cropper';
import PhotoWidgetCropper from './PhotoWidgetCropper';
import { Check, Close } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

interface Props {
    loading: boolean;
    uploadPhoto: (file: Blob) => void;
}

export default function PhotoUploadWidget({loading, uploadPhoto}: Props) {
    const [files, setFiles] = useState<any>([]);
    const [cropper, setCropper] = useState<Cropper>();

    function onCrop() {
        if (cropper) {
            cropper.getCroppedCanvas().toBlob(blob => uploadPhoto(blob!));
        }
    }

    useEffect(() => {
        return () => {
            files.forEach((file: any) => URL.revokeObjectURL(file.preview))
        }
    }, [files])

    return (
        
        <Box component={'div'} sx={{ width: '100%', height: '100%', margin: '1% 5%'}}>
        <Grid container columns={12} spacing={4} >
            <Grid item md={4} >
                <Typography variant='body1' children={'Step 1 - Add Photo'} />
                <PhotoWidgetDropzone setFiles={setFiles} />
            </Grid>
            <Grid item md={4} >
                <Typography variant='body1' children={'Step 2 - Resize image'} />
                {files && files.length > 0 && (
                    <PhotoWidgetCropper setCropper={setCropper} imagePreview={files[0].preview} />
                )}
            </Grid>
            <Grid item md={4} >
                <Typography variant='body1' children={'Step 3 - Review & Upload'} />
                    <>
                        <Box component={'div'} className={'img-preview'} sx={{minHeight: 200, width: '100%', textAlign: 'center', overflow: 'hidden' }} />
                        {files && files.length > 0 && (

                            <ButtonGroup fullWidth sx={{width: '200px'}} >
                                <LoadingButton loading={loading} onClick={onCrop} children={<Check />} sx={{backgroundColor: 'green', color: 'white'}}/>
                                <LoadingButton disabled={loading} onClick={() => setFiles([])} children={< Close />}sx={{backgroundColor: 'red', color: 'white'}} />
                            </ButtonGroup>
                        )}
                    </>
            </Grid>
        </Grid>
        </Box>
    )
}