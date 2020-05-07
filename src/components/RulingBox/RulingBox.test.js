/**
 *
 * Tests for RulingBox
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import RulingBox from './index';

const props = {
  title: 'Pope Francis?',
  description: 'He is talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)',
  wikiUrl: 'https://en.wikipedia.org/wiki/Catholic_Church_sexual_abuse_cases'
};

describe('<RulingBox />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<RulingBox {...props} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(true);
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<RulingBox {...props} />);
    expect(firstChild).toMatchSnapshot();
  });
});
