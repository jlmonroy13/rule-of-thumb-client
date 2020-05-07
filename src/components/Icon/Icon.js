import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name, className, onClick, testId }) => {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      onClick={onClick}
      data-testid={testId}
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

export default Icon;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  testId: PropTypes.string,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  className: '',
  testId: 'icon-component',
  onClick: () => { },
};
