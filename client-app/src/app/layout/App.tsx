import { Paper } from '@mui/material/';
import { Fragment } from 'react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/home/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import ActivityLayout from './ActivityLayout';

export default observer(function App() {

  const location = useLocation();
  
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path={'/activities'} element = { <ActivityLayout /> } >
          <Route path='list' element={<ActivityDashboard/>} />
          <Route path=':id' element={<ActivityDetails/>} />
          {["create", "manage/:id"].map((path, index) => 
            <Route path={path}  key={index} element={ <Paper key={location.key} sx={{height: 'fit-content', padding: '3em', margin: '1em', maxWidth: '600px'}}><ActivityForm /> </Paper>} />
          )}
        </Route>
      </Routes>
    </Fragment>
  );
})
