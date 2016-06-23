import firebase from 'firebase';

export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS';
export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';

export function fetchNotifications(data) {
  return {
    type: FETCH_NOTIFICATIONS,
    payload: data
  }
}

export function updateNotifications(data) {
  return {
    type: UPDATE_NOTIFICATION,
    payload: data
  }
}
