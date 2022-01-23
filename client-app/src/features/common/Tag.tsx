import { Typography, TypographyProps } from '@mui/material';
import React from 'react';



export default function Tag(props: TypographyProps) {
    return (
        <Typography 
            {...props}
            variant="caption" 
            sx={{
                display: 'inline-block',
                border: `2px solid ${props.color}`,
                borderRadius: '5px 5px / 5px 5px', 
                pt: '0.1em',
                px: '.4em',
                my: '0em',
                height: 'fit-content'
            }}
        >
            
        </Typography> 
    )
}