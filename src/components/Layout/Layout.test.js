/**
 *
 * Tests for Layout
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from 'views/Home';

import Layout from './index';

describe('<Layout />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <Router>
        <Layout>
          <Home />
        </Layout>
      </Router>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Router>
        <Layout>
          <Home />
        </Layout>
      </Router>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
