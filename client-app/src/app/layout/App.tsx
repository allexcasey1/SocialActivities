import { Fragment } from 'react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/home/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import ActivityLayout from './ActivityLayout';
import TestError from '../../features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';

export default observer(function App() {

  const location = useLocation();
  
  return (
    <Fragment>
      <ToastContainer position='bottom-right' hideProgressBar />
      <Routes>

        <Route path='/' element={<HomePage/>} />

        <Route path={'/*'} element = { <ActivityLayout /> } >
          <Route path='activities' element={<ActivityDashboard/>} />
          <Route path='errors' element={<TestError />} />
          <Route path='activities/:id' element={<ActivityDetails/>} />
          <Route path='create' key={location.key} element={<ActivityForm key={location.key} />} />
          <Route path='manage/:id' key={location.key} element={<ActivityForm key={location.key} />} />
          <Route path='server-error' element={<ServerError />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
        
      </Routes>
    </Fragment>
  );
})
