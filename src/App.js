import React from 'react';
import './App.css';
import Title from './common/Title';
import GridObj from '../src/components/Time';
import GridHeader from './common/GridHeader';
import BookingBox from "./components/BookingBox"
import Clicky from './components/OnClickBox'
import GridRow from './components/GridRow'
import TimeBox from './components/TimeBox'
import OnClickBox from './components/OnClickBox'


function App() {
  return (
    <div className="App">
      <Title/>
      <GridHeader/>
      <GridObj/>
      <BookingBox/>
      {/* <GridRow /> */}
      <Clicky />
      <TimeBox/>
      <OnClickBox />

    </div>
  );
}

export default App;
