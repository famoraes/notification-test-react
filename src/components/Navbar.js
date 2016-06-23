import React, { Component } from 'react';

import NavbarNotification from '../containers/NavbarNotification';


export default class Navbar extends Component {
  render() {
    return (
      <nav id='header' className='navbar navbar-default'>
        <div className='container-fluid'>
          <a href='#' className='navbar-brand'>SellerCrowd Notifications</a>
          <div className='pull-right'>
            <NavbarNotification />
          </div>
        </div>
      </nav>
    );
  }
}
