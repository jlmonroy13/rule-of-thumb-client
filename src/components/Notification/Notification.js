import React from 'react';
import PropTypes from 'prop-types';

const notification = {
  error: {
    defaultTitle: '¡Error!',
  },
  warning: {
    defaultTitle: '¡Warning!',
  },
  success: {
    defaultTitle: 'Success',
  },
};

const Notification = ({ type, message }) => (
  <>
    <h1 className="notification__title">
      {type && notification[type].defaultTitle}
    </h1>
    <p className="notification__description">{message}</p>
    <button className="notification__close-btn">&times;</button>
  </>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Notification;
