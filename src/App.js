import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './restaurant/dashboard/Dashboard';
import Promotions from './restaurant/promotions/Promotions';
import Profile from './restaurant/profile/Profile';
import Calendar from './restaurant/calendar/Calendar';

const C_Calendar = () => (
  <Switch>
    <Route path='/restaurant/calendar' component={Calendar}/>
  </Switch>
  );

const C_Dashboard = () => (
  <Switch>
    <Route path='/' component={Dashboard}/>
  </Switch>
  );

const C_Promotions = () => (
  <Switch>
    <Route path='/restaurant/promotions' component={Promotions}/>
  </Switch>
  );

const C_Profile = () => (
  <Switch>
    <Route path='/restaurant/profile' component={Profile}/>
  </Switch>
  );

export default class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route path='/restaurant/dashboard' component={C_Dashboard}/>
            <Route path='/restaurant/promotions' component={C_Promotions}/>
            <Route path='/restaurant/profile' component={C_Profile}/>
            <Route path='/restaurant/calendar' component={C_Calendar}/>
          </Switch>
        </main>
      </div>
    );
  }
}