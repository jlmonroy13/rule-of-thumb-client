/**
 *
 * Tests for RulingCard
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import RulingCard from './index';

const props = {};

describe('<RulingCard />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<RulingCard {...props} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<RulingCard {...props} />);
    expect(firstChild).toMatchSnapshot();
  });
});
