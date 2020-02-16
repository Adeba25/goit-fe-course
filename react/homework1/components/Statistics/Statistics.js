import React from 'react';

import Title from './Title/Title';
import StatList from './StatList/StatList';

import statisticalData from './statistical-data.json';

import styles from './Statistics.module.css';

const Statistics = () => (
  <section className={styles.container}>
    <Title title="Upload Stats" />
    <StatList statisticalData={statisticalData} />
  </section>
);

export default Statistics;
