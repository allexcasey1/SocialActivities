import { Stack } from '@mui/material';
import { Activity } from '../../../app/models/activity'
import { useStore } from '../../../app/stores/store';
import ActivityCard from '../details/ActivityCard';

export default function ActivityStack() {
    const {activityStore} = useStore();
    const {activitiesByDate} = activityStore;

    return (
            <Stack spacing={0.5} sx={{ width: '100%'}} >
                {activitiesByDate.map((activity: Activity) => (
                        <ActivityCard 
                            key={activity.id} 
                            activity={activity}/>
                ))}
            </Stack>
    )
   
}