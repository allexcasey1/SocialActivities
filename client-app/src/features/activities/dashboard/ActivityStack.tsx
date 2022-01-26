import { Box, Stack, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Activity } from '../../../app/models/activity'
import { useStore } from '../../../app/stores/store';
import ActivityListItem from '../details/ActivityListItem';

export default observer(function ActivityStack() {
    const {activityStore} = useStore();
    const {groupedActivities} = activityStore;
    

    return (
            <Stack id={'activity-stack'} spacing={1.5} sx={{ width: '100%'}} >
                {groupedActivities.map(([group, activities]) => (
                    <Box key={group} mb={1}>
                        <Typography color={'#39f'} variant="subtitle1" >{group}</Typography>
                        {activities.map((activity: Activity) => (
                            <ActivityListItem 
                                key={activity.id} 
                                activity={activity}/>
                        ))}
                    </Box>  
                    ))
                        
                }
                
            </Stack>
    )
   
})