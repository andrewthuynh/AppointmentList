import React, { Component } from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';

import AppointmentList from './components/AppointmentList';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppointmentList />
      </Provider>
    );
  }
}

export default App;
