import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Appointment from './components/Appointment';
import AppointmentList from './components/AppointmentList';


const styles = ({
  container: {
    marginTop: 100,
    marginLeft: 400,
    marginRight: 400,
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
});
class App extends Component {

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.container}>
        <AppointmentList />
      </div>
    );
  }
}

export default withStyles(styles)(App);
