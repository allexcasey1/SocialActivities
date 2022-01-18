import { Grid, Container } from '@mui/material';
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
      <Container>
        <Grid container columns={18} spacing={4} mt={0.5} >
            <Grid item lg={10} md={12} sm={16}>
                <ActivityStack/>
            </Grid>

            <Grid item lg={8} md={6} sm={16} mt={4} >
              <ActivityFilters />
            </Grid>

        </Grid>
      </Container>
    )
})

