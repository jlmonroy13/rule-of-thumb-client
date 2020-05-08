/**
 *
 * Tests for RulingCard
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import kanyePhoto from 'assets/images/west.jpg';

import RulingCard from './index';

const props = {
  name: 'Kanye West',
  imageUrl: kanyePhoto,
  startDate: '2020/02/25',
  category: 'Entertaiment',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptates magnam excepturi libero ipsum ipsa eligendi voluptate praesentium.',
  upThumbs: 64,
  downThumbs: 36,
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
});
