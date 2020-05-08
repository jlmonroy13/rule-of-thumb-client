import React, { useState } from 'react';

import Header from 'components/Header';
import RulingBox from 'components/RulingBox';
import ProgressBar from 'components/ProgressBar';
import InfoBox from 'components/InfoBox';

const Home = () => {
  const [showInfoBox, setShowInfoBox] = useState(true);

  const onCloseInfoBox = () => setShowInfoBox(false);

  return (
    <div className="position-relative">
      <Header />
      <section className="home__main">
        <h1 className="d-none">Last Ruling</h1>
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
      <div className="container">
        <section className="home__rulings">
          {showInfoBox && (
            <InfoBox
              title="Be counted"
              subtitle="Speak out. Be heard."
              message="Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It&lsquo;s easy: You share your opinion, we analyze and put the data in a public report."
              onClose={onCloseInfoBox}
            />
          )}
          <h1 className="home__votes-title">Previous Rulings</h1>
        </section>
      </div>
    </div>
  );
};

export default Home;
