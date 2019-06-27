import React from 'react';
import './App.css';
// import Grid from './Grid';
import Title from './common/Title';
import GridObj from '../src/components/Time';
import GridHeader from './common/GridHeader';

function App() {
  return (
    <div className="App">
      <Title/>
      {/* <Grid/> */}
      <GridHeader/>
      <GridObj/>
      {/* <Clickable /> */}
    </div>
  );
}

export default App;
