import { Box, CircularProgress } from '@mui/material';
import React from 'react';

interface Props {
    message?: string;
}

export default function LoadingComponent({message = 'Loading...'}: Props) {
    return(
    <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        textAlign: 'center',
        fontFamily: ['Lucida Grande', 'Lucida Sans', 'Arial', 'sans-serif', 'monospace'] }}>
      <CircularProgress />
      <p> {message} </p>
    </Box>
    )
}