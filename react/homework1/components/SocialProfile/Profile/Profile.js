import React from 'react';
import PropTypes from 'prop-types';

import styles from './Profile.module.css';

const Profile = ({ scrUrl, name, tag, location }) => (
  <div className={styles.description}>
    <img className={styles.userAvatar} src={scrUrl} alt="user avatar" />

    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
);

Profile.defaultProps = {
  scrUrl: 'User image',
  name: 'User name',
  tag: 'User tag',
  location: 'User location',
};

Profile.propTypes = {
  scrUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;
