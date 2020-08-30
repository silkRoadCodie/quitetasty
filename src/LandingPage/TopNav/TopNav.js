import React from 'react';
import styles from './TopNav.module.css';

export function TopNav() {
  return (
    <div className={styles['top-nav']}>
      <div className={styles.left}>
        <span>Write A Review</span>
        <span>My Passport</span>
      </div>
      <div className={styles.right}>
        <span>Login</span>
        <button className='button'>sign up</button>
      </div>
    </div>
  );
}