import { SyntheticEvent, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import { Link } from 'react-router-dom';

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
        // used for activity stack
        <Card key={activity.id} sx={{borderRadius: '0'}}>
            <CardHeader
                title={
                    <Typography variant="h6">
                        {activity.title} 
                    </Typography>
                }
                subheader={
                    <Typography variant="subtitle1">
                        {activity.date}
                    </Typography>
                }
            />
           
            <Box>                           
                <CardContent>
                    <Box mb={1}>
                    <Typography variant="body1">
                            {activity.description}
                        </Typography>
                        <Typography variant="body1" sx={{ }}>
                            at {activity.venue} in {activity.city}  
                        </Typography>
                    </Box>
                    <Box mt={1} sx={{verticalAlign: 'middle'}}>
                        <Typography 
                            variant="overline" 
                            sx={{
                                border: '1px solid #E3E3E3', 
                                borderRadius: '5px 5px / 5px 5px', 
                                padding: '.5em'
                            }}
                        >
                            {activity.category}
                        </Typography>
                            <LoadingButton 
                                name={activity.id} 
                                loading={loading && target === activity.id} 
                                variant="contained" 
                                sx={{marginLeft: '.5em', marginRight: '.5em', float: 'right'}} 
                                onClick={ (e) => handleActivityDelete(e, activity.id) }
                            >
                                Delete
                            </LoadingButton>

                            <Link to={`/activities/${activity.id}`}>
                            <Button
                                variant="contained" 
                                sx={{marginLeft: '.5em', marginRight: '.5em', float: 'right'}} >
                                    View      
                            </Button>
                            </Link>
                    </Box>     
                </CardContent>
            </Box>
        </Card>
    )
}