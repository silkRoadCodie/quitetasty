import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../Assets/logo.png';
import styles from './LandingPage.module.css';

export function LandingPage() {
  return (
    <div>
       <TopNav/>
       <img src={logo} className={styles.logo} alt='logo'/>
    </div>
  );
}