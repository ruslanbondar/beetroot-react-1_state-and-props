import React from 'react';

import styles from './Title.module.scss';

export const Title = ({ myTitle }) => {
  return <h1 className={styles.title}>{myTitle}</h1>;
};
