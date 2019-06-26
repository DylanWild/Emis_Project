import React, { Component } from 'react';
import './GridRow.css';
// import Time from './Time';

// let n = ['9:00','9:15','9:30','9:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30',]
let i = 0
let currentHour = 9
// if (i = 60){
//     hour+1
// }
// let currentTime = Date(),
// let minutes = currentTime.getMinutes()
// // let hour = 60
// let workday = hour*8
// let division = 15
// let interval = workday/division

class GridRow extends Component {

   
    
    state = {
        time: `${currentHour}:${i}`,
        patient: "n/a",
        reason: "n/a",
        notes: "n/a",
    
    } 
    timeInc() {
        i += 15
        if (i = 60) {
            currentHour += 1
        }
    };
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