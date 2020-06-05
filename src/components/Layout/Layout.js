import React from 'react';

import classes from './Layouts.module.css';

import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDraw from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => (
  <Auxiliary>
    <Toolbar />
    <SideDraw />
    <main className={classes.content}>
      {props.children}
    </main>
  </Auxiliary>
);

export default Layout;