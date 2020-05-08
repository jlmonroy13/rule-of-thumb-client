/**
 *
 * Tests for ProgressBar
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import ProgressBar from './index';

const props = {
  label: 'closing in',
  value: 22,
  valueLabel: 'days',
};

describe('<ProgressBar />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<ProgressBar {...props} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<ProgressBar {...props} />);
    expect(firstChild).toMatchSnapshot();
  });
});
