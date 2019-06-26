import React, { Component } from 'react';
import './Grid.css';
import GridRow from './components/GridRow';

export class Grid extends Component {
    render() {
        return (
            <div className="grid-container">
                <GridRow/>
            </div>
        )
    }
}

export default Grid




