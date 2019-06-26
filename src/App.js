import React from 'react';
import './App.css';
import Grid from './Grid';
import Title from './common/Title';
import GridHeader from './common/GridHeader';

function App() {
  return (
    <div className="App">
      <Title/>
      <GridHeader/>
      <Grid/>
      
    </div>
  );
}

export default App;
