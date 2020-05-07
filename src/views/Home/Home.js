import React from 'react';

import Header from 'components/Header';
import RulingBox from 'components/RulingBox';
import Icon from 'components/Icon';

const Home = () => (
  <div className="position-relative">
    <Header />
    <section className="home__main">
      <div className="container">
        <RulingBox>
          <span className="text-small">What's your opinion on</span>
          <h1 className="home__main-title">Pope Francis?</h1>
          <p className="home__main-description">He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
          <div className="mb-6">
            <Icon name="wikipedia" className="mr-1" />
            <a href="https://en.wikipedia.org/wiki/Catholic_Church_sexual_abuse_cases" target="_blank" rel="noopener noreferrer" className="home__main-link">More information</a>
          </div>
          <span className="font-weight-bold text-larger">What's Your Verdict?</span>
        </RulingBox>
      </div>
      <div className="home__main-footer">
        <div className="home__main-footer-left">
          <span className="text-white text-uppercase text-small">closing in</span>
        </div>
        <div className="home__main-footer-right">
          <b className="mr-2">22</b>
          <span>days</span>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
