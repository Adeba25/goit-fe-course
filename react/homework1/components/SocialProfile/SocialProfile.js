import React from 'react';
import user from './user.json';

import Profile from './Profile/Profile';
import Stats from './Stats/Stats';

import styles from './SocialProfile.module.css';

const SocialProfile = () => (
  <div className={styles.container}>
    <Profile
      scrUrl={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
    />

    <Stats
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  </div>
);

export default SocialProfile;
