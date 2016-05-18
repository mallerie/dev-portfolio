// Javascript Entry Point

import React, { Component } from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';




render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
      
  </Router>
), document.querySelector('.app'));

