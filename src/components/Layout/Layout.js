import React, { Component } from 'react';

import classes from './Layouts.module.css';

import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDraw from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDraw: true
  }

  sideDrawClosedHandler = () => {
    this.setState({showSideDraw: false})
  }

  render() {
    return (
      <Auxiliary>
        <Toolbar />
        <SideDraw
          closed={this.sideDrawClosedHandler}
          open={this.state.showSideDraw}/>
        <main className={classes.content}>
          {this.props.children}
        </main>
      </Auxiliary>
    )
  }
}


export default Layout;