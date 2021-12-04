import { Stack } from '@mui/material';
import { Activity } from '../../../app/models/activity'
import ActivityCard from '../details/ActivityCard';

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (activity: Activity) => void;
}


export default function ActivityStack({activities, selectActivity, deleteActivity }: Props) {
    
    return (
            <Stack spacing={0.5} sx={{ width: '100%'}} >
                {activities.map((activity: Activity) => (
                        <ActivityCard key={activity.id} activity={activity} selectActivity={selectActivity} deleteActivity={deleteActivity}></ActivityCard>
                ))}
            </Stack>
    )
   
}