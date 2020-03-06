import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from '../components/AppBar/AppBar';
import AppHeader from '../components/AppHeader/AppHeader';
import LoginPage from '../components/LoginPage/LoginPage';
import SignupPage from '../components/SignupPage/SignupPage';
import Home from '../components/Home/Home';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <AppHeader />
        <div style={{ flex: '1 0 auto' }}>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Routes;
