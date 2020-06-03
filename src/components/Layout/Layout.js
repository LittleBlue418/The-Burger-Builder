import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';

const Layout = (props) => (
  <Auxiliary>
    <div>Toolbar, SideDraw, Backdrop</div>
    <main>
      {props.children}
    </main>
  </Auxiliary>
);

export default Layout;