/* eslint-disable radix */
import { isNil, isEmpty, compose, not, equals } from 'ramda';

export const isNilOrEmpty = (value) =>
  isNil(value) || isEmpty(value) || equals(value, 0);

export const hasValue = compose(not, isNilOrEmpty);

const defaultThumbsPercentages = {
  upPercentage: 0,
  downPercentage: 0,
};

export const calculatePercentages = ({ thumbsUp, thumbsDown }) => {
  if (isNilOrEmpty(thumbsUp) && isNilOrEmpty(thumbsDown)) {
    return defaultThumbsPercentages;
  }

  if (hasValue(thumbsUp) && isNilOrEmpty(thumbsDown)) {
    return { ...defaultThumbsPercentages, upPercentage: 100 };
  }

  if (hasValue(thumbsDown) && isNilOrEmpty(thumbsUp)) {
    return { ...defaultThumbsPercentages, downPercentage: 100 };
  }

  const totalThumbs = thumbsUp + thumbsDown;
  const up = (thumbsUp / totalThumbs) * 100;
  const down = (thumbsDown / totalThumbs) * 100;

  return {
    upPercentage: Math.round(up),
    downPercentage: Math.round(down),
  };
};

export const setPercentageWidth = (percentage) => {
  if (equals(percentage, 0)) return 50;

  return percentage;
};
