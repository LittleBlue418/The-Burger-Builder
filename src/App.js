import React from 'react';

import classes from './App.module.css';

import Layout from './components/Layout/Layout';
function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <p>This is working</p>
      </Layout>
    </div>
  );
}

export default App;
