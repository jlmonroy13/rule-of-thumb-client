import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  HOME,
  PAST_TRIALS,
  HOW_IT_WORKS,
  LOGIN,
  TERMS_AND_CONDITIONS,
  PRIVACY_POLICY,
  CONTACT_US,
} from 'constants/pathNames';

import Home from 'views/Home';
import PastTrials from 'views/PastTrials';
import HowItWorks from 'views/HowItWorks';
import Login from 'views/Login';
import TermsAndConditions from 'views/TermsAndConditions';
import PrivacyPolicy from 'views/PrivacyPolicy';
import ContactUs from 'views/ContactUs';
import NoMatch from 'views/NoMatch';

const publicRoutes = [
  { id: '1', path: HOME, component: Home },
  { id: '2', path: PAST_TRIALS, component: PastTrials },
  { id: '3', path: HOW_IT_WORKS, component: HowItWorks },
  { id: '4', path: LOGIN, component: Login },
  { id: '5', path: TERMS_AND_CONDITIONS, component: TermsAndConditions },
  { id: '6', path: PRIVACY_POLICY, component: PrivacyPolicy },
  { id: '7', path: CONTACT_US, component: ContactUs },
];

// eslint-disable-next-line react/prop-types
const renderRoutes = ({ id, ...props }) => <Route exact key={id} {...props} />;

const Routes = () => (
  <Switch>
    {publicRoutes.map(renderRoutes)}
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
