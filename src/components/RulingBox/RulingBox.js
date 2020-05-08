import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';

const RulingBox = ({ title, description, wikiUrl }) => (
  <div className="ruling-box">
    <span className="text-small">What's your opinion on</span>
    <h1 className="ruling-box__title">{title}</h1>
    <p className="ruling-box__description">{description}</p>
    <div className="mb-6">
      <Icon name="wikipedia" className="mr-1" />
      <a href={wikiUrl} target="_blank" rel="noopener noreferrer" className="ruling-box__link">More information</a>
    </div>
    <span className="font-weight-bold text-larger">What's Your Verdict?</span>
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  wikiUrl: PropTypes.string.isRequired,
};

export default RulingBox;
