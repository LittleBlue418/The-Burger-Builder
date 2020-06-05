import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
  // for animation classes
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.LogoDiv}>
        <Logo />
      </div>
      <nav>
        <NavItems />
      </nav>
    </div>
  );
};

export default SideDrawer;