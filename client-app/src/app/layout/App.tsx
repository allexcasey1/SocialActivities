import {  Container } from '@mui/material/';
import { Fragment, useEffect, useState } from 'react';
import { Activity } from '../models/activity';
import Nav from './Nav'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  
  useEffect(() => {
    agent.Activities.list().then(response => {
      let activities: Activity[] = [];
      response.forEach(activity => {
        activity.date = activity.date.split('T')[0];
        activities.push(activity)
      })
      setActivities(activities);  
      setLoading(false);
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
  async function handleCreateOrEditActivity(activity: Activity) {
    setSubmitting(true);
    if (activity.id) {
      await agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter(x => x.id !== activity.id), activity])
        setSelectActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      }) 
    } else {
        activity.id = uuid();
        await agent.Activities.create(activity).then(() => {
          setActivities([...activities, activity]);
          setSelectActivity(activity);
          setEditMode(false);
          setSubmitting(false);
        })
    }
    activity.id
      ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities, {...activity, id: uuid()}]);
    setEditMode(false);
    setSelectActivity(activity);
  }
  function handleDeleteActivity(id: string) {
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(x => x.id !== id)]);
      setSubmitting(false);
    })

  }

  if(loading) return <LoadingComponent message="Loading App"></LoadingComponent>

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
          submitting={submitting}
        />
      </Container>
    </Fragment>
  );
}

export default App;
