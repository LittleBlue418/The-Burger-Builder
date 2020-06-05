import React from 'react';

import classes from './Layouts.module.css';

import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
  <Auxiliary>
    <Toolbar />
    <main className={classes.content}>
      {props.children}
    </main>
  </Auxiliary>
);

export default Layout;