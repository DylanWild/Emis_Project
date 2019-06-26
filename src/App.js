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
      <GridObj/>
      <GridHeader/>
    </div>
  );
}

export default App;
