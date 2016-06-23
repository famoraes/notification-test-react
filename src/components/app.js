import React, { Component } from 'react';

import Navbar from './Navbar';
import NotificationList from '../containers/NotificationList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <NotificationList userId="1" />
      </div>
    );
  }
}
