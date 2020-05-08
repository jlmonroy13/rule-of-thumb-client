/**
 *
 * Tests for Home
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Home from './index';

describe('<Home />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <Router>
        <Home />
      </Router>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Router>
        <Home />
      </Router>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('Should hide info box when user clicks on close info box button', () => {
    render(
      <Router>
        <Home />
      </Router>,
    );

    screen.queryByTestId('info-box');
    const infoBoxCloseButton = screen.getByTestId('info-box-close-button');
    fireEvent.click(infoBoxCloseButton);
    expect(screen.queryByTestId('info-box')).toBeNull();
  });
});
