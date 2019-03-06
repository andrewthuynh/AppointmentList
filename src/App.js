import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Appointment from './components/Appointment';


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
        <Typography variant="h5" gutterBottom>Mar 6, 2019</Typography>
        <Appointment />
      </div>
    );
  }
}

export default withStyles(styles)(App);
