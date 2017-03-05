import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HomePage from './pages/HomePage';
import TaxiPage from './pages/TaxiPage';
import DriverPage from './pages/DriverPage';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const routes = (
      <Router history={browserHistory}>
        
        <Route path='/' component={App}>
          <IndexRoute component={HomePage} />
          <Route path='/taxi/:id' component={TaxiPage} />
          <Route path='/driver/:id' component={DriverPage} />
          
        </Route>
    </Router>
)


ReactDOM.render(
  routes,
  document.getElementById('root')
);
