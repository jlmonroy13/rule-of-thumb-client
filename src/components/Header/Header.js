import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from 'components/Icon'

import { PAST_TRIALS, HOW_IT_WORKS, LOGIN } from 'constants/pathNames';

const Header = () => (
  <header className="header">
    <div className="header__mask" />
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="header__title">Rule of Thumb.</h1>
        <nav className="header__nav">
          <NavLink to={PAST_TRIALS} className="header__nav-item">Past Trials</NavLink>
          <NavLink to={HOW_IT_WORKS} className="header__nav-item">How It Works</NavLink>
          <NavLink to={LOGIN} className="header__nav-item">Log In/Sign Up</NavLink>
          <Icon name="search" className="header__icon" />
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
