import React from 'react';

import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

import transactions from './transactions.json';

import styles from './TransactionHistory.module.css';

const TransactionHistory = () => (
  <table className={styles.transactionTable}>
    <TableHead row1="Type" row2="Amount" row3="Currency" />
    <TableBody transactions={transactions} />
  </table>
);

export default TransactionHistory;
