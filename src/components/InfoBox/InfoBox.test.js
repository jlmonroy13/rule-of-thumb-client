/**
 *
 * Tests for InfoBox
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import InfoBox from './index';

const props = {};

describe('<InfoBox />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<InfoBox {...props} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<InfoBox {...props} />);
    expect(firstChild).toMatchSnapshot();
  });
});
