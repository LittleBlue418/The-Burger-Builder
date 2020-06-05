import React from 'react';
import classes from './Toolbar.module.css'

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <Logo />
    <NavItems />
  </header>
);

export default Toolbar