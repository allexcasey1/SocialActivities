import { SyntheticEvent, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Avatar, Box, Button, Card, CardContent, CardHeader, Typography, Grid, Divider} from '@mui/material';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
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
                avatar={ <Avatar aria-label="user" sx={{ height: 50, width: 50}} children={'A'} /> }

                title={ <Typography variant="subtitle1" children={activity.title} /> }

                subheader={ <Typography variant="subtitle2" children={'Hosted by Alex'} /> }
            />

           <Divider />

            <CardContent>
                <Box sx={{height: '2em', verticalAlign: 'top'}}>
                    
                    <Typography 
                        variant='body2'
                        display={'inline-block'}
                        children={
                            <>
                                <Place sx={{display: 'inline-block', height: '50%'}}/>
                                {activity.venue} 'in' {activity.city}
                            </>
                        }/>
                                
                    
                    <Typography variant='body2' display={'inline'}
                        children={ 
                            <>
                                <DateRange  sx={{display: 'inline-block', height: '50%'}}/> 
                                {format(activity.date!, 'dd MMM h:mm aa')} 
                                <Tag input={activity.category} />
                            </>
                        } />
                    
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
                                className='deletebutton hover'
                                children={
                                    'Delete'
                                }
                                name={activity.id} 
                                loading={loading && target === activity.id} 
                                variant="contained" 
                                onClick={ (e) => handleActivityDelete(e, activity.id) } />
                            <Button 
                                className='button viewbutton hover'
                                component={Link}
                                to={`/activities/${activity.id}`}
                                variant="contained" 
                                children={'View'}
                            />
                         
                        </Box>
                    </Grid>
                    
                </Grid>            
        </Card>
    )
}