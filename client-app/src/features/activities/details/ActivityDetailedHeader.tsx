import { Alert, Box, Button, Card, CardActionArea, CardHeader, Paper, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Link } from 'react-router-dom';
import { useStore } from '../../../app/stores/store'
import ActivityDetailedMedia from './ActivityDetailedMedia';
import { observer } from 'mobx-react-lite';
import { format } from 'date-fns';

export default observer(function ActivityDetailedHeader() {
    const {activityStore: {updateAttendance, loading, selectedActivity: activity, cancelActivityToggle }} = useStore();
    if (activity === undefined) return null;
    return (
        <Card component={Paper}>
            {/* {activity.isCancelled && (
                <CardActionArea sx={{zIndex:900}}>
                    <Alert severity='warning' variant='filled' children={'Activity has been cancelled'} sx={{zIndex: 900, float: 'left' }} />
                </CardActionArea>
                )} */}
            <CardActionArea  sx={{ zIndex:800, alignContent: 'bottom', '&:hover': { cursor: 'initial'} }}>
            {activity.isCancelled && (
                    <Alert severity='error' variant='filled' 
                        children={`Activity has been cancelled, contact ${activity.host?.displayName} for more information`} 
                        sx={{zIndex: 900, position: 'absolute', width: '100%', borderRadius: '5px 5px 0 0' }} />
                )}
                <CardHeader
                    sx={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgb(0, 0, 0, 0.58)',
                        color: 'white',
                        borderRadius: '5px'
                        
                    }}

                    title={
                        <Typography variant="h6">
                            {activity.title} 
                        </Typography>
                    }
                    subheader={
                        <Typography variant="subtitle1">
                            {format(activity.date!, 'dd MMM yyyy')} <br />
                            Hosted by <Link to={`/profiles/${activity.host?.username}`}><strong>{activity.host?.displayName}</strong></Link>
                        </Typography>

                    }
                />
                <ActivityDetailedMedia />
            </CardActionArea>
            <Box sx={{ my: '.5em', verticalAlign: 'middle', display: 'block', height: 'fit-content', width: '100%', minWidth: '350px' }}>
                

                    {activity.isHost ? (
                        <Box>
                            <LoadingButton loading={loading} onClick={cancelActivityToggle} 
                                className={activity.isCancelled ? 'button hover viewbutton' : 'button hover deletebutton'} 
                                children={activity.isCancelled? 'Re-activate' : 'Cancel'}/>
                        <Box mb={1} sx={{ float: 'right', display: 'inline-block', height: 'auto'}}>
                            <Button 
                                disabled={activity.isCancelled!}
                                className="button managebutton hover"
                                component={Link} 
                                to={`/manage/${activity.id}`} 
                                variant="contained" 
                                children={'Manage Event'} />     
                        </Box>
                        </Box>
                    ) : (
                        <Box sx={{ display: 'inline-block', height: 'auto', width: '50%' }}>
                        {activity.isGoing ? (
                            <LoadingButton onClick={updateAttendance} loading={loading} className='button cancelbutton hover' variant='contained' >Cancel Attendance</LoadingButton>
                        )  : (
                            <LoadingButton disabled={activity.isCancelled} onClick={updateAttendance} loading={loading} className='button submitbutton hover' variant='contained' >Join Activity</LoadingButton>
                        )}
                        </Box>
                        )}
                    
                    
                
                
            </Box>
        </Card>
        
    )
})