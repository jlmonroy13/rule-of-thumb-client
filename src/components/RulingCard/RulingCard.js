import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { equals, gt, not, isEmpty } from 'ramda';

import Icon from 'components/Icon';

import { SUCCESS, ERROR } from 'constants/notificationTypes';

import showNotification from 'utils/showNotification';

import { calculatePercentages, setPercentageWidth } from 'utils/utils';

const UP = 'up';
const DOWN = 'down';

const RulingCard = ({
  name,
  imageUrl,
  startDate,
  category,
  description,
  thumbsUp,
  thumbsDown,
}) => {
  const [selectedThumb, setSelectedThumb] = useState('');
  const [wasVoted, setWasVoted] = useState(false);

  const onSetThumbUp = () => setSelectedThumb(UP);
  const onSetThumbDown = () => setSelectedThumb(DOWN);

  const isUpSelected = equals(selectedThumb, UP);
  const isDownSelected = equals(selectedThumb, DOWN);

  const { upPercentage, downPercentage } = calculatePercentages({
    thumbsUp,
    thumbsDown,
  });

  const formatValue = (percentage) =>
    (equals(percentage, 0) || gt(percentage, 17)) && <span>{percentage}%</span>;

  const onVote = () => {
    if (wasVoted) return setWasVoted(false);

    if (isEmpty(selectedThumb)) {
      return showNotification({
        type: ERROR,
        message: 'Please select a thumb.',
      });
    }

    showNotification({
      type: SUCCESS,
      message: 'Thank you for voting!',
    });

    return setWasVoted(true);
  };

  return (
    <div
      className="ruling-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
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
        <div className="ruling-card__buttons-container">
          {not(wasVoted) && (
            <>
              <button
                className={`ruling-card__thumb-btn mr-2 ${
                  isUpSelected ? 'is-active' : ''
                }`}
                onClick={onSetThumbUp}
              >
                <Icon
                  name="thumb"
                  className="ruling-card__thumb ruling-card__thumb--up"
                />
              </button>
              <button
                onClick={onSetThumbDown}
                className={`ruling-card__thumb-btn mr-3 ${
                  isDownSelected ? 'is-active' : ''
                }`}
              >
                <Icon name="thumb" className="ruling-card__thumb" />
              </button>
            </>
          )}
          <button onClick={onVote} className="ruling-card__button">
            Vote {wasVoted ? 'again' : 'now'}
          </button>
        </div>
      </div>
      <div className="ruling-card__footer">
        <div
          className="ruling-card__footer-percentage ruling-card__footer-percentage--up"
          style={{ width: `${setPercentageWidth(upPercentage)}%` }}
        >
          <Icon name="thumb" className="ruling-card__footer-icon" />
          {formatValue(upPercentage)}
        </div>
        <div
          className="ruling-card__footer-percentage"
          style={{ width: `${setPercentageWidth(downPercentage)}%` }}
        >
          {formatValue(downPercentage)}
          <Icon name="thumb" className="ml-2" />
        </div>
      </div>
    </div>
  );
};

RulingCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbsUp: PropTypes.number.isRequired,
  thumbsDown: PropTypes.number.isRequired,
};

export default RulingCard;
