import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
// import ActivityForm from '../form/ActivityForm';
import ActivityStack from './ActivityStack';

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();    
    const {loadingInitial, loadActivities, activityRegistry} = activityStore;
  
    useEffect(() => {
      if (activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry, loadActivities])

    if(loadingInitial) 
      return <LoadingComponent message="Loading App"></LoadingComponent>

    return (
        <Grid container spacing={2} columns={18} >
            <Grid item mt={2} lg={10} md={12} sm={16} xs={18} >
                <ActivityStack/>
            </Grid>
        </Grid>
    )
})

