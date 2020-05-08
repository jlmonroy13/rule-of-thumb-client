import React, { useState } from 'react';
import { useStorageState } from 'react-storage-hooks';
import { equals } from 'ramda';

import RulingBox from 'components/RulingBox';
import ProgressBar from 'components/ProgressBar';
import InfoBox from 'components/InfoBox';
import RulingCard from 'components/RulingCard';
import Layout from 'components/Layout';

import data from 'constants/data.json';

const Home = () => {
  const [showInfoBox, setShowInfoBox] = useState(true);
  const [rulings, setRulings] = useStorageState(
    localStorage,
    'rulings',
    data.rulings,
  );

  const onCloseInfoBox = () => setShowInfoBox(false);

  const updateRulingsArray = ({ id, ...voteData }) => (ruling) => {
    if (equals(id, ruling.id)) {
      return {
        ...ruling,
        ...voteData,
      };
    }

    return ruling;
  };

  const onSetVote = (voteData) => {
    const updatedRulings = rulings.map(updateRulingsArray(voteData));
    setRulings(updatedRulings);
  };

  const onRenderRulings = (ruling) => (
    <div key={ruling.id} className="col-lg-6">
      <RulingCard {...ruling} onSetVote={onSetVote} />
    </div>
  );

  return (
    <Layout>
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
      <section className="home__rulings">
        <div className="container">
          {showInfoBox && (
            <InfoBox
              title="Be counted"
              subtitle="Speak out. Be heard."
              message="Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It&lsquo;s easy: You share your opinion, we analyze and put the data in a public report."
              onClose={onCloseInfoBox}
            />
          )}
          <h1 className="home__rulings-title mb-7">Previous Rulings</h1>
          <div className="row">{rulings.map(onRenderRulings)}</div>
          <div className="home__advise">
            <div className="home__advise-mask" />
            <p className="home__advise-text">
              Is there anyone else you would want us to add?
            </p>
            <button className="home__advise-btn">Submit a Name</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
