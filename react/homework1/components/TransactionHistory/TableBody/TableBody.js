import React from 'react';

import PropTypes from 'prop-types';

import styles from './TableBody.module.css';

const TableBody = ({ transactions }) => (
  <tbody>
    {transactions.map(tansaction => (
      <tr key={tansaction.id}>
        <td className={styles.text}>{tansaction.type}</td>
        <td className={styles.text}>{tansaction.amount}</td>
        <td className={styles.text}>{tansaction.currency}</td>
      </tr>
    ))}
  </tbody>
);

TableBody.defaultProps = {
  transactions: [],
};

TableBody.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TableBody;
