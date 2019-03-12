import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';

import AppointmentList from './components/AppointmentList';


const styles = ({
  container: {
    marginTop: 50,
    marginLeft: 500,
    marginRight: 500,
  },
});
class App extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <AppointmentList />
      </div>
    );
  }
}

export default withStyles(styles)(App);
