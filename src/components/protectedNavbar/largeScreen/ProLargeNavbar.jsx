import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './proLargeNavbar.module.css';

export const ProLargeNavbar = () => {
  return (
    <div className={styles.proLContainer}>

        <div>
            <NavLink to='/time'>Time</NavLink>
            <NavLink to='/expenses'>Expenses</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/team'>Team</NavLink>
            <NavLink to='/reports'>Reports</NavLink>
            <NavLink to='/invoices'>Invoices</NavLink>
            <NavLink to='/extimates'>Estimates</NavLink>
            <NavLink to='/manage'>Manage</NavLink>
        </div>

        <div className={styles.proLDiv2}>
            <button>Setting</button>
            <button>
              <img src='https://tinyurl.com/52n2b37y' alt='userImage'/>
              <p>roushan</p>
            </button>            
        </div>      
    </div>
  )
};

