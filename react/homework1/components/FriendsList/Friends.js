import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import styles from './Friends.module.css';

const Friends = ({ friends }) => (
  <Fragment>
    {friends.map(friend => (
      <li key={friend.id} className={styles.item}>
        <span
          className={friend.isOnline ? styles.isOnline : styles.isOffline}
        ></span>
        <img className="avatar" alt="User avatar" src={friend.avatar} />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </Fragment>
);

Friends.defaultProps = {
  friends: [],
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Friends;
