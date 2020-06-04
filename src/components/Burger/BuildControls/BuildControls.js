import React from 'react';

import classes from './BuildControl.module.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Test</p>
    <BuildControl />
    <BuildControl />
    <BuildControl />
  </div>
);

export default BuildControls;