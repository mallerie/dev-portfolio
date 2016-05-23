// Javascript Entry Point

import React, { Component } from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';

import Dashboard from './dashboard';
import Home      from './home';
import Resume      from './resume';




render((
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard}>
      <IndexRoute component={Home}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/home" component={Home}/>


    </Route>  
  </Router>
), document.querySelector('.app'));

