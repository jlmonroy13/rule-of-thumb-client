import React from 'react';

import Header from 'components/Header';
import RulingBox from 'components/RulingBox';
import ProgressBar from 'components/ProgressBar';

const Home = () => (
  <div className="position-relative">
    <Header />
    <section className="home__main">
      <div className="container">
        <RulingBox
          title="Pope Francis?"
          description="He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)"
          wikiUrl="https://en.wikipedia.org/wiki/Catholic_Church_sexual_abuse_cases"
        />
      </div>
      <div className="home__main-footer">
        <ProgressBar label="closing in" value={22} valueLabel="days" />
      </div>
    </section>
  </div>
);

export default Home;
