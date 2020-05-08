import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({ children }) => (
  <div className="relative">
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
