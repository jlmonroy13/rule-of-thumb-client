/**
 *
 * Tests for RulingCard
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import kanyePhoto from 'assets/images/west.jpg';

import RulingCard from './index';

const props = {
  id: 'id',
  name: 'Kanye West',
  imageUrl: kanyePhoto,
  startDate: '2020/02/25',
  category: 'Entertaiment',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptates magnam excepturi libero ipsum ipsa eligendi voluptate praesentium.',
  thumbsUp: 64,
  thumbsDown: 36,
  onSetVote: jest.fn(),
};

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

  it('Should add active class to thumb button when it is clicked', () => {
    render(<RulingCard {...props} />);

    const thumbUpButton = screen.getByTestId('thumb-up-button');
    fireEvent.click(thumbUpButton);
    expect(thumbUpButton).toHaveClass('is-active');
  });

  it('Should update vote button text from "Vote now" to "Vote again" after voting', () => {
    render(<RulingCard {...props} />);

    expect(screen.getByTestId('vote-button')).toHaveTextContent('Vote now');
    const thumbUpButton = screen.getByTestId('thumb-up-button');
    fireEvent.click(thumbUpButton);
    const voteButton = screen.getByTestId('vote-button');
    fireEvent.click(voteButton);
    expect(screen.getByTestId('vote-button')).toHaveTextContent('Vote again');
  });

  it('Should hide thumb buttons after voting', () => {
    render(<RulingCard {...props} />);

    const thumbUpButton = screen.getByTestId('thumb-up-button');
    fireEvent.click(thumbUpButton);
    const voteButton = screen.getByTestId('vote-button');
    fireEvent.click(voteButton);
    expect(screen.queryByTestId('thumb-up-button')).toBeNull();
  });
});
