import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Pusher from 'pusher-js';

import NotificationItem from '../components/NotificationItem';
import { fetchNotifications, updateNotifications } from '../actions/index';


class NotificationList extends Component {
  constructor(props) {
    super(props);
    this.pusher = new Pusher("639ac335613b3e9af534");
    this.channel = this.pusher.subscribe(`user-${this.props.userId}`);
  }

  componentWillMount() {
    this.channel.bind('notification', (data) => {
      this.props.fetchNotifications(data);
    });
  }

  // componentDidMount() {
  //   this.firebaseRef.on('child_changed', (snapshot) => {
  //     this.props.updateNotifications(snapshot.val());
  //   });
  // }

  render() {
    let notifications = this.props.notifications.map((item) => {
      return (
        <NotificationItem
          key={ item.id }
          title={ item.title }
          content={ item.content }
          isSeen={ item.is_seen } />)
    });

    return (
      <ul className="list-group">
        {notifications}
      </ul>
    );
  }
}

function mapDispacthToProps(dispatch) {
  return bindActionCreators({
    fetchNotifications: fetchNotifications,
    updateNotifications: updateNotifications
  }, dispatch);
}

function mapStateToProps({ notifications }) {
  return { notifications }
}

export default connect(mapStateToProps, mapDispacthToProps)(NotificationList);
