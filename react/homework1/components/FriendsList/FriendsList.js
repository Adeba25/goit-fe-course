import React from 'react';

import Friends from './Friends';

import friendsData from './friends.json';

const FriendsList = () => (
  <ul>
    <Friends friends={friendsData} />
  </ul>
);

export default FriendsList;
