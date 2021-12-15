import { Container } from '@mui/material/';
import { Fragment, useEffect } from 'react';
import Nav from './Nav'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore()
  const { loadingInitial } = activityStore;
  
  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  if(loadingInitial) return <LoadingComponent message="Loading App"></LoadingComponent>

  return (
    <Fragment>
      <Nav />
      <Container maxWidth="xl">
        <ActivityDashboard/>
      </Container>
    </Fragment>
  );
}

export default observer(App);
