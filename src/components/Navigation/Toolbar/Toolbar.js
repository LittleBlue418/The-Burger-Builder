import React from 'react';
import classes from './Toolbar.module.css'

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>

    <div
      className={classes.LogoDiv}
      onClick={props.clicked}>
      <Logo />
    </div>

    <div className={classes.DesktopOnly}>
      <NavItems />
    </div>

  </header>
);

export default Toolbar