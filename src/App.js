import React from 'react';

import classes from './App.module.css';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>

    </div>
  );
}

export default App;
