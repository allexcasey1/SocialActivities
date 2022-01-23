import React from 'react';
import { Avatar, Box, Button, Card, CardContent, CardHeader, Typography, Grid, Divider, Alert} from '@mui/material';
import { Activity } from '../../../app/models/activity';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange, Place } from '@mui/icons-material';
import Tag from '../../common/Tag';
import ActivityListItemAttendee from '../dashboard/ActivityListItemAttendee';

interface Props {
    activity: Activity;
}

export default function ActivityCard({activity}: Props) {
    return (
        <Card key={activity.id} sx={{borderRadius: '5px', marginBottom: '1em' }}>
            {activity.isCancelled && (
                <Alert severity='error' variant='filled' sx={{ borderRadius: '0 5px 0 25px', float: 'right', opacity: '85%'}} children={'Cancelled'} />
            )}
            <CardHeader
                avatar={ 
                    <Avatar aria-label="user" sx={{ height: 75, width: 75}} children={
                        activity.host!.image ? (
                            <img alt="user" src={activity.host?.image} width="75" height="75" />
                        ) : (
                            <Typography variant='h2' children={
                                activity.host!.displayName.split('')[0]
                            } /> )
                    } /> 
                }

                title={ <Typography variant="subtitle1" children={activity.title} /> }

                subheader={ 
                <>
                    <Link to={`/profiles/${activity.host}`} children={
                        <Typography variant="subtitle1" children={ `Hosted by ${activity.host?.displayName}` } />
                    }/>
                     <br />
                    {activity.isHost && (
                        <Tag color={"orange"} children={'You are hosting this activity'} />
                    )}
                    {activity.isGoing && !activity.isHost && (
                        <Tag color={"limegreen"} children={'You are going to this activity'} />
                    )}
                </>}
            />

           <Divider />

            <CardContent>
                <Box display={'block'} >
                    <Typography variant='body2' display={'inline-block'}
                        children={
                            <>
                                <Place sx={{display: 'inline', fontSize: '.8em'}}/>
                                {activity.venue} in {activity.city}
                            </>
                        }/>
                                   
                    <Typography variant='body2' display={'inline-block'}
                        ml={2} mr={2}
                        children={ 
                            <>
                                <DateRange  sx={{display: 'inline', fontSize: '.8em'}}/> 
                                {format(activity.date!, 'dd MMM h:mm aa')} 
                            </>
                        } />    
                </Box>
            </CardContent>

            <CardContent sx={{ py: 0, px: 0}}>
                <Box className='attendees'>
                    <Typography ml={2} pt={1} variant='body2' color={'gray'}>
                    </Typography>
                    <ActivityListItemAttendee attendees={activity.attendees!} />
                </Box>
            </CardContent>

                <Grid container columns={2}>

                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} >
                        <Box sx={{ width: 'inherit', height: 'inherit', display: 'inherit', pt: '1em', px: '1em', verticalAlign: 'middle' }}>
                            <Typography variant='body2'>{activity.description}</Typography>
                        </Box>
                        
                    </Grid>
                    
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                        <Box sx={{ width: 'inherit', height: 'inherit', display: 'inherit', textAlign: 'right', padding: '0.5em', alignItems: 'flex-end' }}>
          
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