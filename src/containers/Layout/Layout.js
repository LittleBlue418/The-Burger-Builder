import React, { Component } from 'react';

import classes from './Layouts.module.css';

import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDraw from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDraw: false
  }

  sideDrawClosedHandler = () => {
    this.setState({showSideDraw: false})
  }

  sideDrawToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDraw: !prevState.showSideDraw}
    })
    console.log('true')
  }

  render() {
    return (
      <Auxiliary>
        <Toolbar
          clicked={this.sideDrawToggleHandler}
        />
        <SideDraw
          closed={this.sideDrawClosedHandler}
          open={this.state.showSideDraw}
          clicked={this.sideDrawToggleHandler}
        />

        <main className={classes.content}>
          {this.props.children}
        </main>
      </Auxiliary>
    )
  }
}


export default Layout;