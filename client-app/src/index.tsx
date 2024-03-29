import React from 'react';
import ReactDOM from 'react-dom';
import 'react-calendar/dist/Calendar.css';
import 'react-datepicker/dist/react-datepicker.css'
import 'react-toastify/dist/ReactToastify.min.css';
import './app/layout/styles.css';
import App from './app/layout/App';
import { store, StoreContext } from './app/stores/store';
import { createBrowserHistory } from 'history';
import { CustomRouter } from './app/router/CustomRouter';
import ScrollToTop from './app/layout/ScrollToTop';

export const history = createBrowserHistory(); 

ReactDOM.render(
    <StoreContext.Provider value={store} >
      <CustomRouter history={history} >
        <ScrollToTop />
         <App />
      </CustomRouter>
    </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals(console.log);
