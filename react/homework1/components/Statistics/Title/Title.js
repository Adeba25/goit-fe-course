import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import styles from './Title.module.css';

const Title = ({ title }) => (
  <Fragment>
    {title.length > 0 && <h2 className={styles.title}>{title}</h2>}
  </Fragment>
);

Title.defaultProps = {
  title: '',
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
