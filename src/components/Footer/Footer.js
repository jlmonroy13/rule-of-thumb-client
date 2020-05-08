import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from 'components/Icon';

import {
  TERMS_AND_CONDITIONS,
  PRIVACY_POLICY,
  CONTACT_US,
} from 'constants/pathNames';

const Footer = () => (
  <div className="container">
    <div className="footer">
      <nav className="footer__nav">
        <NavLink to={TERMS_AND_CONDITIONS} className="footer__nav-item">
          Terms and Conditions
        </NavLink>
        <NavLink to={PRIVACY_POLICY} className="footer__nav-item">
          Privacy Policy
        </NavLink>
        <NavLink to={CONTACT_US} className="footer__nav-item">
          Contact us
        </NavLink>
      </nav>
      <div className="footer__social-networks">
        <span className="footer__text">Follow Us</span>
        <a
          rel="noopener noreferrer"
          href="https://www.facebook.com/pages/category/Community/FB-Rules-of-Thumb-318882558219309/"
          target="_blank"
        >
          <Icon
            name="facebook"
            className="footer__icon footer__icon--facebook"
          />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://twitter.com/ruleofthumbbiz"
          target="_blank"
        >
          <Icon name="twitter" className="footer__icon footer__icon--twitter" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
