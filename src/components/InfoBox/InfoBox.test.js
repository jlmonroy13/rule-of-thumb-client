/**
 *
 * Tests for InfoBox
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import InfoBox from './index';

const props = {
  title: 'Be counted',
  subtitle: 'Speak out. Be heard.',
  message:
    'Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It&lsquo;s easy: You share your opinion, we analyze and put the data in a public report.',
  onClose: jest.fn(),
};

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

  it('Should call onClose function when user clicks close button', () => {
    render(<InfoBox {...props} />);

    const closeButton = screen.getByTestId('info-box-close-button');
    fireEvent.click(closeButton);

    expect(props.onClose).toHaveBeenCalled();
  });
});
