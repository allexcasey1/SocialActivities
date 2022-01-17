import { CardMedia } from '@mui/material';
import React from 'react'
import { useStore } from '../../../app/stores/store';

export default function ActivityDetailedMedia() {
    const { activityStore } = useStore();
    const { selectedActivity } = activityStore;
    
    if (selectedActivity === undefined) return null;
    return (
        <CardMedia
                component="img"
                image={`/assets/categoryImages/${selectedActivity.category}.jpg`}
                alt="Paella dish"
            />
    )
}