import React from 'react';

import classes from './Layouts.module.css';

import Auxiliary from '../../hoc/Auxiliary';

const Layout = (props) => (
  <Auxiliary>
    <div>Toolbar, SideDraw, Backdrop</div>
    <main className={classes.content}>
      {props.children}
    </main>
  </Auxiliary>
);

export default Layout;