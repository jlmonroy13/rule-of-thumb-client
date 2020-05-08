/**
 *
 * Tests for Notification
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import Notification from './index';

const props = {
  type: 'Success',
  message: 'Welcome',
  closeToast: () => {},
};

describe('<Notification />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Notification {...props} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Notification {...props} />);
    expect(firstChild).toMatchSnapshot();
  });
});
