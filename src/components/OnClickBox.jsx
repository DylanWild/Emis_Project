import React, {Component} from 'react'
import GridRow from './GridRow'
import ReactDOM from 'react-dom'

export default class Clicky extends Component {

    constructor(props) {
      super(props);
      this._handleDoubleClickRow = this._handleDoubleClickRow.bind(this);
    }
    
    _handleDoubleClickRow(event) {

        }

    render() {
      return (
            
        <div onDoubleClick={this._handleDoubleClickRow}>
        </div>

      );
    }
  }
    