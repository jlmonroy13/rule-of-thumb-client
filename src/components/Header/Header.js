import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Icon from 'components/Icon';

import { PAST_TRIALS, HOW_IT_WORKS, LOGIN, HOME } from 'constants/pathNames';

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleSetShowMobileNav = () => setShowMobileNav(!showMobileNav);

  return (
    <header className="header">
      <div className="header__mask" />
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <NavLink to={HOME} className="header__title">
            <h1>Rule of Thumb.</h1>
          </NavLink>
          <nav className={`header__nav ${showMobileNav ? 'is-active' : ''}`}>
            <button
              className="d-block d-md-none mb-4"
              onClick={toggleSetShowMobileNav}
            >
              <Icon name="arrow-right" />
            </button>
            <NavLink to={PAST_TRIALS} className="header__nav-item">
              Past Trials
            </NavLink>
            <NavLink to={HOW_IT_WORKS} className="header__nav-item">
              How It Works
            </NavLink>
            <NavLink to={LOGIN} className="header__nav-item">
              Log In/Sign Up
            </NavLink>
            <button>
              <Icon name="search" className="header__icon" />
            </button>
          </nav>
          {!showMobileNav && (
            <button
              className="d-block d-md-none"
              onClick={toggleSetShowMobileNav}
            >
              <div className="header__hamburger">
                <span className="header__hamburger-line" />
                <span className="header__hamburger-line" />
                <span className="header__hamburger-line" />
              </div>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
