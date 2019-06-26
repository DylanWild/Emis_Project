import React from 'react';
import './App.css';
// import Grid from './Grid';
import Title from './common/Title';
import GridObj from '../src/components/Time';

function App() {
  return (
    <div className="App">
      <Title/>
      {/* <Grid/> */}
      <GridObj/>
    </div>
  );
}

export default App;
