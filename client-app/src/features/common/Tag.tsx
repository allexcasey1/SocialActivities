import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

export default function Tag(props: TypographyProps ) {
    return (
        <Typography 
            {...props}
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
            
        </Typography> 
    )
}