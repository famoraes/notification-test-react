import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import firebase from 'firebase';

import { fetchNotifications, updateNotifications } from '../actions/index';
import NotificationItem from '../components/NotificationItem';


class NotificationList extends Component {
  constructor(props) {
    super(props);
    this.firebaseRef = firebase.database().ref(`notifications/${this.props.userId}`);
  }

  componentWillMount() {
    this.firebaseRef.on('child_added', (snapshot) => {
      this.props.fetchNotifications(snapshot.val());
    });
  }

  componentDidMount() {
    this.firebaseRef.on('child_changed', (snapshot) => {
      this.props.updateNotifications(snapshot.val());
    });
  }

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
