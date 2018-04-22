import React from 'react';

import { PybContextProvider } from './context/pyb-context';
import Header from './components/header';
import Users from './containers/users';

import './styles/app.css';

export default () => (
  <PybContextProvider>
    <Header />
    <Users />
  </PybContextProvider>
);
