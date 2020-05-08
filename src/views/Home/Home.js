import React, { useState } from 'react';

import Header from 'components/Header';
import RulingBox from 'components/RulingBox';
import ProgressBar from 'components/ProgressBar';
import InfoBox from 'components/InfoBox';
import RulingCard from 'components/RulingCard';

import kanyePhoto from 'assets/images/west.jpg';

const rulings = [
  {
    id: '1',
    name: 'Kanye West',
    imageUrl: kanyePhoto,
    startDate: '2020/02/25',
    category: 'Entertaiment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptates magnam excepturi libero ipsum ipsa eligendi voluptate praesentium.',
    upThumbs: 64,
    downThumbs: 36,
  },
  {
    id: '2',
    name: 'Kanye West',
    imageUrl: kanyePhoto,
    startDate: '2020/02/25',
    category: 'Entertaiment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptates magnam excepturi libero ipsum ipsa eligendi voluptate praesentium.',
    upThumbs: 64,
    downThumbs: 36,
  },
  {
    id: '3',
    name: 'Kanye West',
    imageUrl: kanyePhoto,
    startDate: '2020/02/25',
    category: 'Entertaiment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptates magnam excepturi libero ipsum ipsa eligendi voluptate praesentium.',
    upThumbs: 64,
    downThumbs: 36,
  },
  {
    id: '4',
    name: 'Kanye West',
    imageUrl: kanyePhoto,
    startDate: '2020/02/25',
    category: 'Entertaiment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptates magnam excepturi libero ipsum ipsa eligendi voluptate praesentium.',
    upThumbs: 64,
    downThumbs: 36,
  },
];

const Home = () => {
  const [showInfoBox, setShowInfoBox] = useState(true);

  const onCloseInfoBox = () => setShowInfoBox(false);

  // eslint-disable-next-line react/prop-types
  const onRenderRulings = ({ id, ...props }) => (
    <div key={id} className="col-lg-6">
      <RulingCard {...props} />
    </div>
  );

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
          <h1 className="home__rulings-title mb-7">Previous Rulings</h1>
          <div className="row">{rulings.map(onRenderRulings)}</div>
          <div className="home__advise">
            <div className="home__advise-mask" />
            <p className="home__advise-text">
              Is there anyone else you would want us to add?
            </p>
            <button className="home__advise-btn">Submit a Name</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
