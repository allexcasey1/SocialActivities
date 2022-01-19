import { Box, Button, Card, CardActionArea, CardHeader, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStore } from '../../../app/stores/store'
import ActivityDetailedMedia from './ActivityDetailedMedia';
import { format } from 'date-fns';

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
                            {format(selectedActivity.date!, 'dd MMM yyyy')} <br />
                            Hosted by Alex
                        </Typography>

                    }
                />
                <ActivityDetailedMedia />
            </CardActionArea>
            <Box sx={{ my: '.5em', verticalAlign: 'middle', display: 'block', height: 'fit-content', width: '100%', minWidth: '350px' }}>
                <Box sx={{ display: 'inline-block', height: 'auto', width: '50%' }}>
                    <Button className='button submitbutton hover' variant='contained' >Join Activity</Button>
                    <Button className='button cancelbutton hover' variant='contained' >Cancel Attendance</Button>
                </Box>
                <Box sx={{ textAlign: 'right', display: 'inline-block', height: 'auto', width: '50%'}}>
                    <Button 
                        className="button managebutton hover"
                        component={Link} 
                        to={`/manage/${selectedActivity.id}`} 
                        variant="contained" 
                        children={'Manage Activity'} />     
                </Box>
            </Box>
        </Card>
        
    )
}