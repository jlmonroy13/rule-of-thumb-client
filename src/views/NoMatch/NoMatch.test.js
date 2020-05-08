/**
 *
 * Tests for NoMatch
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import NoMatch from './index';

const props = {};

describe('<NoMatch />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <Router>
        <NoMatch {...props} />
      </Router>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Router>
        <NoMatch {...props} />
      </Router>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
