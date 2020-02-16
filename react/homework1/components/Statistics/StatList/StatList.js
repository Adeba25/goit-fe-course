import React from 'react';

import PropTypes from 'prop-types';

import styles from './StatList.module.css';

import randomColor from './randomColor';

const StatList = ({ statisticalData }) => (
  <ul className={styles.statList}>
    {statisticalData.map(stat => (
      <li
        key={stat.id}
        className={styles.statItem}
        style={{
          width: 300 / statisticalData.length,
          backgroundColor: randomColor(),
        }}
      >
        <span className={styles.label}>{stat.label}</span>
        <span className={styles.percentage}>{stat.percentage}%</span>
      </li>
    ))}
  </ul>
);

StatList.defaultProps = {
  statisticalData: [],
};

StatList.propTypes = {
  statisticalData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default StatList;
