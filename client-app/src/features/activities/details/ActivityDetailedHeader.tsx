import { Box, Button, Card, CardActionArea, CardHeader, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStore } from '../../../app/stores/store'
import ActivityDetailedMedia from './ActivityDetailedMedia';

export default function ActivityDetailedHeader() {
    const {activityStore} = useStore();
    const {selectedActivity} = activityStore;
    if (selectedActivity === undefined) return null;
    return (
        <Card>
            <CardActionArea sx={{ alignContent: 'bottom' }}>
                <CardHeader
                    sx={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgb(0, 0, 0, 0.58)',
                        color: 'white',
                    }}

                    title={
                        <Typography variant="h6">
                            {selectedActivity.title} 
                        </Typography>
                    }
                    subheader={
                        <Typography variant="subtitle1">
                            {selectedActivity.date} <br />
                            Hosted by Alex
                        </Typography>

                    }
                />
                <ActivityDetailedMedia />
            </CardActionArea>
            <Box sx={{ verticalAlign: 'middle', display: 'block', height: 'fit-content', width: '100%', minWidth: '350px' }}>
                <Box sx={{ display: 'inline-block', height: 'auto', width: '50%' }}>
                    <Button variant='contained' sx={{ margin: '5px'}}>Join Activity</Button>
                    <Button variant='contained' sx={{ margin: '5px', backgroundColor: 'grey !important'}}>Cancel Attendance</Button>
                </Box>
                <Box sx={{ textAlign: 'right', display: 'inline-block', height: 'auto', width: '50%'}}>
                    <Button 
                        component={Link} 
                        to={`/manage/${selectedActivity.id}`} 
                        variant="contained" 
                        sx={{ margin: '5px', backgroundColor: 'orange !important'}} children={'Manage Activity'} />     
                </Box>
            </Box>
        </Card>
        
    )
}