import { Stack } from '@mui/material';
import { Activity } from '../../../app/models/activity'
import ActivityCard from '../details/ActivityCard';

interface Props {
    activities: Activity[];
    submitting: boolean;
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}


export default function ActivityStack({activities, selectActivity, deleteActivity, submitting }: Props) {
    
    return (
            <Stack spacing={0.5} sx={{ width: '100%'}} >
                {activities.map((activity: Activity) => (
                        <ActivityCard key={activity.id} activity={activity} selectActivity={selectActivity} deleteActivity={deleteActivity} submitting={submitting}></ActivityCard>
                ))}
            </Stack>
    )
   
}