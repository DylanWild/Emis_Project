import React from 'react';
import './App.css';
// import Grid from './Grid';
import Title from './common/Title';
import GridObj from '../src/components/Time';

import GridHeader from './common/GridHeader';
import BookingBox from "./components/BookingBox"
import Clicky from './components/OnClickBox'
import GridRow from './components/GridRow';

import GridHeader from './common/GridHeader';

import BookingBox from "./components/BookingBox"


function App() {
  return (
    <div className="App">
      <Title/>
      {/* <Grid/> */}

      <GridHeader/>
      <GridObj/>
      {/* <Clickable /> */}
      {/* <GridObj/> */}
      <BookingBox/>
      {/* <GridRow /> */}
      <Clicky />


      <GridHeader/>
      <GridObj/>

      {/* <GridObj/> */}
      <BookingBox/>

    </div>
  );
}

export default App;
