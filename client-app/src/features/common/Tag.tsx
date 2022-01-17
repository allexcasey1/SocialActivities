import { SxProps, Typography } from '@mui/material';
import React from 'react';

interface Props {
    input: string
}

export default function Tag({input}: Props, sx: SxProps) {
    return (
        <Typography 
        ml={1}
            variant="overline" 
            lineHeight={'.2em'}
            sx={{
                display: 'inline',
                border: '1px solid #E3E3E3', 
                borderRadius: '5px 5px / 5px 5px', 
                padding: '.2em'
            }}
        >
            {input}
        </Typography> 
    )
}