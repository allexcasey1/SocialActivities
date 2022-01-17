import { Box } from '@mui/material';
import React from 'react';

interface Props {
    size: number;
}

export default function Spacer({size}: Props) {
    return (
        <Box sx={{ width: size + 'em', display: 'inline-block' }} ></Box>
    )
}