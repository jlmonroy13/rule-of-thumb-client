import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';

const RulingCard = ({
  name,
  imageUrl,
  startDate,
  category,
  description,
  upThumbs,
  downThumbs,
}) => (
  <div className="ruling-card" style={{ backgroundImage: `url(${imageUrl})` }}>
    <div className="ruling-card__mask" />
    <div className="ruling-card__body">
      <div className="position-relative">
        <span className="ruling-card__icon">
          <Icon name="thumb" className="ruling-card__thumb" />
        </span>
        <h2 className="ruling-card__title">{name}</h2>
      </div>
      <span className="text-small mb-3 d-block">
        <b>{startDate}</b> in {category}
      </span>
      <p className="ruling-card__description">{description}</p>
      <div className="d-flex align-items-center">
        <button className="ruling-card__thumb-btn mr-2">
          <Icon
            name="thumb"
            className="ruling-card__thumb ruling-card__thumb--up"
          />
        </button>
        <button className="ruling-card__thumb-btn mr-3">
          <Icon name="thumb" className="ruling-card__thumb" />
        </button>
        <button className="ruling-card__button">Vote now</button>
      </div>
    </div>
    <div className="ruling-card__footer">
      <div className="ruling-card__footer-percentage ruling-card__footer-percentage--up">
        <Icon name="thumb" className="ruling-card__footer-icon" />
        <span>{upThumbs}%</span>
      </div>
      <div
        className="ruling-card__footer-percentage"
        style={{ width: `${downThumbs}%` }}
      >
        <span className="mr-2">{downThumbs}%</span>
        <Icon name="thumb" />
      </div>
    </div>
  </div>
);

RulingCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  upThumbs: PropTypes.number.isRequired,
  downThumbs: PropTypes.number.isRequired,
};

export default RulingCard;
