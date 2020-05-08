import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ label, value, valueLabel }) => (
  <div className="d-flex">
    <div className="progress-bar__lapsed">
      <span className="text-white text-uppercase text-small">{label}</span>
    </div>
    <div className="progress-bar__remaining">
      <b className="mr-2">{value}</b>
      <span>{valueLabel}</span>
    </div>
  </div>
);

ProgressBar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  valueLabel: PropTypes.string.isRequired,
};

export default ProgressBar;
