import React from 'react';

import PropTypes from 'prop-types';

import styles from './TableHead.module.css';

const TableHead = ({ row1, row2, row3 }) => (
  <thead>
    <tr>
      <th className={styles.text}>{row1}</th>
      <th className={styles.text}>{row2}</th>
      <th className={styles.text}>{row3}</th>
    </tr>
  </thead>
);

TableHead.defaultProps = {
  row1: '',
  row2: '',
  row3: '',
};

TableHead.propTypes = {
  row1: PropTypes.string,
  row2: PropTypes.string,
  row3: PropTypes.string,
};

export default TableHead;
