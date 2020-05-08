import React from 'react';
import { NavLink } from 'react-router-dom';

const NoMatch = () => (
  <div className="d-flex justify-content-center align-items-center w-100 vh-100">
    <div className="text-center">
      <h1>Page not found</h1>
      <p>The page you were looking for was moved or doesn’t exist.</p>
      <NavLink to="/">Go to Homepage</NavLink>
    </div>
  </div>
);

export default NoMatch;
