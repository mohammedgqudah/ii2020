import React from 'react';
import styles from './Home.module.scss';
import AppBar from '../AppBar/AppBar';
import PatientsList from '../PatientsList/PatientsList';
import { Redirect, Route } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Redirect to="/patients" />
        <AppBar />
        <Route path="/patients" component={PatientsList} />
        <Route path="/chat" component={PatientsList} />
      </React.Fragment>
    );
  }
}

export default Home;
