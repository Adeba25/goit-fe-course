import React, { Fragment } from 'react';

import SocialProfile from './SocialProfile/SocialProfile';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => (
  <Fragment>
    <SocialProfile />
    <Statistics />
    <FriendsList />
    <TransactionHistory />
  </Fragment>
);

export default App;
