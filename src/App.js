import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './restaurant/dashboard/Dashboard';
import Promotions from './restaurant/promotions/Promotions';
import Profile from './restaurant/profile/Profile';
import Calendar from './restaurant/calendar/Calendar';
import Sidebar from './shared/components/Sidebar';
import PromotionForm from './restaurant/promotions/PromotionForm';
import Stats from './restaurant/stats/Stats';

import PromotionsNavBar from './restaurant/promotions/PromotionsNavBar';

require('./App.css'); 

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
    <Route exact path='/restaurant/promotions' component={Promotions}/>
    <Route exact path='/restaurant/promotions/list' component={Promotions}/>
    <Route exact path='/restaurant/promotions/create' component={PromotionForm}/>
  </Switch>
  );

const C_Profile = () => (
  <Switch>
    <Route path='/restaurant/profile' component={Profile}/>
  </Switch>
  );

const C_Stats = () => (
  <Switch>
    <Route path='/restaurant/stats' component={Stats}/>
  </Switch>
  );

const SideBar_Wraper = ({component: Component, ...rest}) => { 
  return ( 
    <Route {...rest} render={matchProps => ( 
      <div className='App'> 
          <Sidebar/> 
        <div className='content'> 
          <Component {...matchProps} /> 
        </div> 
      </div>    )} /> 
  ) 
}

const SideBar_PromotionsNavBar_Wraper = ({component: Component, ...rest}) => { 
  return ( 
    <Route {...rest} render={matchProps => ( 
      <div className='App'> 
          <Sidebar/> 
        <div className='content'>
          <PromotionsNavBar />
          <Component {...matchProps} /> 
        </div> 
      </div>    )} /> 
  ) 
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <SideBar_Wraper path='/restaurant/dashboard' component={C_Dashboard}/> 
            <SideBar_PromotionsNavBar_Wraper path='/restaurant/promotions' component={C_Promotions}/>
            <SideBar_Wraper path='/restaurant/profile' component={C_Profile}/>
            <SideBar_Wraper path='/restaurant/calendar' component={C_Calendar}/>
            <SideBar_Wraper exact path='/restaurant/stats' component={C_Stats}/>
            <Redirect exact to="/restaurant/dashboard" />
          </Switch>
        </main>
      </div>
    );
  }
}