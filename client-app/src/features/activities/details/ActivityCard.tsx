import { Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity;
    selectActivity: (id: string) => void;
    deleteActivity: (activity: Activity) => void;
}

export default function ActivityCard({activity, selectActivity, deleteActivity}: Props) {
    function returnDate(date: Date): any {
        return new Date(date);
    }
    return (
        <Card key={activity.id} sx={{borderRadius: '0'}}>
            <CardHeader
                title={
                    <Typography variant="h6">
                        {activity.title} 
                    </Typography>
                }
                subheader={
                    <Typography variant="subtitle1">
                        {returnDate(activity.date).toDateString()}
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
                            <Button variant="contained" sx={{marginLeft: '.5em', marginRight: '.5em', float: 'right'}} onClick={ () => deleteActivity(activity) }>
                                Delete
                            </Button>
                            <Button variant="contained" sx={{marginLeft: '.5em', marginRight: '.5em', float: 'right'}} onClick={ () => selectActivity(activity.id) }>
                                View
                            </Button>
                    </Box>     
                </CardContent>
            </Box>
        </Card>
    )
}