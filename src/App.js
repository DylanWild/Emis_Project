import React, { Component } from 'react';
import './App.css';
import Title from './common/Title';
import GridObj from '../src/components/Time';
import GridHeader from './common/GridHeader';
import Clicky from './components/OnClickBox';
import GridRow from './components/GridRow';
import RightClickBox from './components/RightClickBox';


class App extends Component {


  render() {
  return (
    <div className="App">
      <Title/>
      <GridHeader/>
      <GridObj/>
      <GridRow />
      <Clicky />
      <RightClickBox />

    </div>
  );
}
}

export default App;
