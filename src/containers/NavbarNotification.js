import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavbarNotification extends Component {
  render() {
    let notifications = this.props.notifications.filter((obj) =>  !obj.is_seen ? obj : '');

    return (
      <div className="notification-badge">
        <span className='badge'>{ notifications.length }</span>
      </div>
    );
  }
}

function mapStateToProps({ notifications }) {
  return { notifications }
}

export default connect(mapStateToProps)(NavbarNotification)
