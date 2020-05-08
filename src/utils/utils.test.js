import { calculatePercentages, addVote } from 'utils/utils';

import { UP, DOWN } from 'constants/thumbsTypes';

describe('Utils Tests', () => {
  describe('Calculate thumbs percentages', () => {
    it('Return default object value if thumbsUp and thumbsDown are cero or null', () => {
      const actual = calculatePercentages({
        thumbsUp: 0,
        thumbsDown: 0,
      });

      expect(actual).toEqual({
        upPercentage: 0,
        downPercentage: 0,
      });
    });

    it('Return 100 to upPercentage if thumbsDown is cero and thumbsUp has value', () => {
      const actual = calculatePercentages({
        thumbsUp: 23,
        thumbsDown: 0,
      });

      expect(actual).toEqual({
        upPercentage: 100,
        downPercentage: 0,
      });
    });

    it('Return 100 to downPercentage if thumbsUp is cero and thumbsDown has value', () => {
      const actual = calculatePercentages({
        thumbsUp: 0,
        thumbsDown: 2,
      });

      expect(actual).toEqual({
        upPercentage: 0,
        downPercentage: 100,
      });
    });

    it('Return 50/50 percentage when thumbsUp and thumbsDown have the same values', () => {
      const actual = calculatePercentages({
        thumbsUp: 30,
        thumbsDown: 30,
      });

      expect(actual).toEqual({
        upPercentage: 50,
        downPercentage: 50,
      });
    });

    it('Return appropriate percentage when thumbsUp and thumbsDown have values', () => {
      const actual = calculatePercentages({
        thumbsUp: 50,
        thumbsDown: 150,
      });

      expect(actual).toEqual({
        upPercentage: 25,
        downPercentage: 75,
      });
    });
  });
  describe('Add vote to a Ruling', () => {
    it('Increment by one thumbsUp if user click on thumbsUp button', () => {
      const actual = addVote({
        selectedThumb: UP,
        thumbsUp: 20,
        thumbsDown: 50,
      });

      expect(actual).toEqual({
        [UP]: 21,
      });
    });

    it('Increment by one thumbsDown if user click on thumbsDown button', () => {
      const actual = addVote({
        selectedThumb: DOWN,
        thumbsUp: 10,
        thumbsDown: 80,
      });

      expect(actual).toEqual({
        [DOWN]: 81,
      });
    });
  });
});
