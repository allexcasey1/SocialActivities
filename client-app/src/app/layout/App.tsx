import axios from 'axios';
import {  Container } from '@mui/material/';
import { Fragment, useEffect, useState } from 'react';
import { Activity } from '../models/activity';
import Nav from './Nav'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);
  
  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, [])

  function handleSelectActivity(id: string) {
    setSelectActivity(activities.find(x => x.id === id));
  }
  
  function handleCancelSelectActivity() {
    setSelectActivity(undefined);
  }

  function handleOpenForm(id?: string) {
    id? handleSelectActivity(id) : handleCancelSelectActivity()
    setEditMode(true);
  }
  function handleCloseForm() {
    setEditMode(false);
  }
  function handleCreateOrEditActivity(activity: Activity) {
    activity.id
      ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities, {...activity, id: uuid()}]);
    setEditMode(false);
    setSelectActivity(activity);
    console.log(uuid())
  }
  function handleDeleteActivity(activity: Activity) {
    setActivities([...activities.filter(x => x.id !== activity.id)]);
    setSelectActivity(undefined);
  }

  return (
    <Fragment>
      <Nav openForm={handleOpenForm}/>
      <Container maxWidth="xl">
        <ActivityDashboard 
          activities={activities} 
          selectActivity={handleSelectActivity} 
          selectedActivity={selectedActivity} 
          cancelSelectActivity={handleCancelSelectActivity} 
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleCloseForm}
          createOrEditActivity={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </Fragment>
  );
}

export default App;
