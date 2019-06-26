import React, { Component } from 'react';
import './GridRow.css';
import Time from './Time';

export class GridRow extends Component {
    state = {
        time: 1500,
        patient: "James, Robert",
        reason: "Chest Pains",
        notes: "Prescribed anti-biotics",
    }
    render() {
        return (
            <div className="grid-row">
                <div className="time grid-row-style">{this.state.time}</div>
                <div className="patient grid-row-style">{this.state.patient}</div>
                <div className="reason grid-row-style">{this.state.reason}</div>
                <div className="notes grid-row-style">{this.state.notes}</div>
            </div>
        )
    }
}

export default GridRow
