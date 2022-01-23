import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

export default function PhotoUploadWidget() {

    return (
        <Box component={'div'} sx={{ width: '100%', height: '100%', margin: '1% 5%'}}>
        <Grid container columns={12} spacing={4} >
            <Grid item md={4} >
                <Typography variant='subtitle2' children={'Step 1 - Add Photo'} />
            </Grid>
            <Grid item md={4} >
                <Typography variant='subtitle2' children={'Step 2 - Resize image'} />
            </Grid>
            <Grid item md={4} >
                <Typography variant='subtitle2' children={'Step 3 - Preview & Upload'} />
            </Grid>
        </Grid>
        </Box>
    )
}