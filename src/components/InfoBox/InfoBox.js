import React from 'react';
import PropTypes from 'prop-types';

const InfoBox = ({ title, subtitle, message, onClose }) => (
  <div className="info-box">
    <div className="info-box__container">
      <div className="mr-5">
        <span className="info-box__subtitle">{subtitle}</span>
        <span className="info-box__title">{title}</span>
      </div>
      <p className="info-box__message">{message}</p>
    </div>
    <button onClick={onClose} className="info-box__button">
      &#x2715;
    </button>
  </div>
);

InfoBox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default InfoBox;
