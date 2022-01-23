import { Divider, List, ListItem, Paper, Typography } from '@mui/material'
import { DateRange, Place, InfoSharp} from '@mui/icons-material'
import { useStore } from '../../../app/stores/store'
import { format } from 'date-fns';

export default function ActivityDetailedInfo() {
    const { activityStore } = useStore();
    const { selectedActivity : activity } = activityStore;

    if (activity === undefined) return null;
    return (
        <List component={Paper} sx={{ backgroundColor: 'white', borderRadius: '5px 5px / 5px 5px'}}>
           <ListItem>
               <Typography variant='body2' children={
                    <>
                        <DateRange sx={{ marginBottom: '-5px', width: '1em' }}/> {format(activity.date!, 'dd MMM yyyy h:mm aa')}
                    </> 
               } />
            
            </ListItem>

        <Divider />

            <ListItem>
                <Typography variant='body2' children={
                    <>
                        <Place sx={{ marginBottom: '-5px', width: '1em'  }} /> {activity.venue}, {activity.city}
                    </> 
                } />
            </ListItem>

        <Divider />

            <ListItem>
                <Typography variant='body2' children={
                    <>
                        <InfoSharp sx={{ marginBottom: '-5px', width: '1em'  }} /> {activity.description}
                    </> 
                } />
           </ListItem>
        </List>
    )
}