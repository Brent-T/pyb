import React, { Fragment } from 'react';

import Header from './components/header';
import Users from './containers/users';

import './styles/app.css';

export default () => (
  <Fragment>
    <Header />
    <Users />
  </Fragment>
);
