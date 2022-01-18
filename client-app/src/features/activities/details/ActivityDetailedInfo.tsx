import { Divider, List, ListItem, Typography } from '@mui/material'
import { DateRange, Place, InfoSharp} from '@mui/icons-material'
import { useStore } from '../../../app/stores/store'

export default function ActivityDetailedInfo() {
    const { activityStore } = useStore();
    const { selectedActivity : activity } = activityStore;

    if (activity === undefined) return null;
    return (
        <List sx={{ backgroundColor: 'white', borderRadius: '5px 5px / 5px 5px'}}>
           <ListItem>
               <Typography variant='body2' children={
                    <>
                        <DateRange sx={{ marginBottom: '-5px', width: '1em' }}/> 
                        {activity.date}
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