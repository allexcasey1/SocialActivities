import { Divider, List, ListItem } from '@mui/material'
import { DateRange, Place, Info} from '@mui/icons-material'
import { useStore } from '../../../app/stores/store'

export default function ActivityDetailedInfo() {
    const { activityStore } = useStore();
    const { selectedActivity : activity } = activityStore;

    if (activity === undefined) return null;
    return (
        <List sx={{ backgroundColor: 'white', borderRadius: '5px 5px / 5px 5px'}}>
           <ListItem>
            <DateRange sx={{ marginRight: '1em' }} /> {activity.date}
           </ListItem>
           <Divider />
           <ListItem>
               <Place sx={{ marginRight: '1em' }} /> {activity.venue}, {activity.city}
           </ListItem>
           <Divider />
           <ListItem>
               <Info sx={{ marginRight: '1em' }}/> {activity.description}
           </ListItem>
        </List>
    )
}