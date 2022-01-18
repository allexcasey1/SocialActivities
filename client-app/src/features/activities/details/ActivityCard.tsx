import { SyntheticEvent, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Avatar, Box, Button, Card, CardContent, CardHeader, Typography, Grid, Divider} from '@mui/material';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import { Link } from 'react-router-dom';
import { DateRange, Place } from '@mui/icons-material';
import Tag from '../../common/Tag';

interface Props {
    activity: Activity;
}

export default function ActivityCard({activity}: Props) {
    const {activityStore} = useStore();
    const {deleteActivity, loading } = activityStore;
    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Card key={activity.id} sx={{borderRadius: '5px', marginBottom: '1em' }}>

            <CardHeader
                avatar={
                    <Avatar aria-label="user" sx={{ height: 50, width: 50}}>
                        A
                    </Avatar>
                }
                title={
                    <Typography variant="subtitle1">
                        {activity.title} 
                    </Typography>
                }
                subheader={
                    <Typography variant="subtitle2">
                        Hosted by Alex
                    </Typography>
                }
            />

           <Divider />

            <CardContent>
                <Box sx={{height: '2em', verticalAlign: 'top'}}>
                    <Place sx={{display: 'inline-block', height: '50%'}}/>
                    <Typography 
                        variant='body2'
                        lineHeight={'2px'}
                        sx={{
                            display: 'inline-block'}}>
                                {activity.venue} in {activity.city} 
                    </Typography> 
                    <DateRange  sx={{display: 'inline-block', height: '50%'}}/>
                    <Typography variant='body2' sx={{display: 'inline'}}>
                        {activity.date} 
                    </Typography>
                    <Tag input={activity.category} />
                </Box>
            </CardContent>

            <CardContent sx={{ backgroundColor: 'lightGray', border: '.2em solid #fff', verticalAlign: 'top'}}>
                <Typography variant='body2'>
                    Attendees:
                </Typography>
            </CardContent>

                <Grid container columns={2}>

                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} >
                        <Box sx={{ width: 'inherit', height: 'inherit', display: 'inherit', paddingLeft: '1em', verticalAlign: 'middle' }}>
                            <Typography variant='body2'>{activity.description}</Typography>
                        </Box>
                        
                    </Grid>
                    
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                        <Box mx={1} my={1} sx={{ width: 'inherit', height: 'inherit', display: 'inherit', textAlign: 'right', padding: '0.5em', alignItems: 'flex-end' }}>
                            <LoadingButton 
                                children={
                                    'Delete'
                                }
                                name={activity.id} 
                                loading={loading && target === activity.id} 
                                variant="contained" 
                                onClick={ (e) => handleActivityDelete(e, activity.id) } 
                                sx={{backgroundColor: 'fireBrick', borderRadius: '0px', opacity: '80%', '&:hover': {opacity: '100%', backgroundColor: 'fireBrick'}}}/>
                            <Button 
                                component={Link}
                                to={`/activities/${activity.id}`}
                                variant="contained" 
                                sx={{
                                    backgroundColor: 'limeGreen', 
                                    borderRadius: '0px', 
                                    opacity: '80%', 
                                    marginLeft: '1em', 
                                    '&:hover': {
                                        opacity: '100%', 
                                        backgroundColor: 'limeGreen'}
                                }} 
                                children={'View'}
                            />
                         
                        </Box>
                    </Grid>
                    
                </Grid>            
        </Card>
    )
}