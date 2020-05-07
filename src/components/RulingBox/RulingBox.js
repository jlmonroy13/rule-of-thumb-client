import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';

const RulingBox = ({ children }) => (
  <div className="ruling-box">
    {children}
    <div className="ruling-box__buttons">
      <button className="ruling-box__button">
        <Icon name="thumb" className="ruling-box__icon ruling-box__icon--up" />
      </button>
      <button className="ruling-box__button ruling-box__button--yellow">
        <Icon name="thumb" className="ruling-box__icon" />
      </button>
    </div>
  </div>
);

RulingBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RulingBox;
