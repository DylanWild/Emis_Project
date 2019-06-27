import React from 'react';
import './App.css';
import Title from './common/Title';
import GridObj from '../src/components/Time';
import GridHeader from './common/GridHeader';
import BookingBox from "./components/BookingBox"
import Clicky from './components/OnClickBox'
import GridRow from './components/GridRow'


function App() {
  return (
    <div className="App">
      <Title/>
      <GridHeader/>
      <GridObj/>
      <BookingBox/>
      <GridRow />
      <Clicky />

    </div>
  );
}

export default App;
