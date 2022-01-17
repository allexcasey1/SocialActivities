import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityFilters from './ActivityFilters';
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
        <Grid container columns={18} spacing={4} mt={2} mx={2} >
            <Grid item lg={8} md={10} sm={16} xs={18} >
                <ActivityStack/>
            </Grid>
            <Grid item mt={4} lg={6} md={4} sm={16} xs={18}>
              <ActivityFilters />
            </Grid>
        </Grid>
    )
})

