import React, { Component } from 'react';

class NotificationItem extends Component {
  render() {
    let isSeen = !this.props.isSeen ? (
      <div>
        <span className='glyphicon glyphicon-certificate text-success'></span>
        <strong className='text-success'> New</strong>
      </div>) : '';

    return (
        <li className="list-group-item">
          <h4>{this.props.title}</h4>
          <p>{this.props.content}</p>
          { isSeen }
        </li>
    );
  }
}

NotificationItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  isSeen: React.PropTypes.bool.isRequired
}

export default NotificationItem;
