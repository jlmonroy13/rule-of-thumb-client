/* eslint-disable radix */
import { isNil, isEmpty, compose, not, equals, inc } from 'ramda';

import { UP } from 'constants/thumbsTypes';

export const isNilOrEmpty = (value) =>
  isNil(value) || isEmpty(value) || equals(value, 0);

export const hasValue = compose(not, isNilOrEmpty);

export const calculatePercentages = ({ thumbsUp, thumbsDown }) => {
  if (isNilOrEmpty(thumbsUp) && isNilOrEmpty(thumbsDown)) {
    return {
      upPercentage: 0,
      downPercentage: 0,
    };
  }

  if (hasValue(thumbsUp) && isNilOrEmpty(thumbsDown)) {
    return { downPercentage: 0, upPercentage: 100 };
  }

  if (hasValue(thumbsDown) && isNilOrEmpty(thumbsUp)) {
    return { upPercentage: 0, downPercentage: 100 };
  }

  const totalThumbs = thumbsUp + thumbsDown;
  const up = (thumbsUp / totalThumbs) * 100;
  const down = (thumbsDown / totalThumbs) * 100;

  return {
    upPercentage: Math.round(up),
    downPercentage: Math.round(down),
  };
};

export const addVote = ({ selectedThumb, thumbsUp, thumbsDown }) => {
  const updatedThumbsUp = inc(thumbsUp);
  const updatedThumbsDown = inc(thumbsDown);

  return {
    [selectedThumb]: equals(UP, selectedThumb)
      ? updatedThumbsUp
      : updatedThumbsDown,
  };
};
