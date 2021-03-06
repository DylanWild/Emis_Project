import React, { Component } from 'react';
import './GridRow.css';

let H = 8
let M = 0
let counter = 0


class GridRow extends Component {
    
    state = {
        time: this.timeCounter(),
        patient: "n/a",
        reason: "n/a",
        notes: "n/a",
    } 
    timeCounter() {
    if(counter%4===0){
        H++
        counter++
        M = '00'
        return H + ':' + M
    
    } else {
        counter++
        M = Number(M)
        M+=15
        return H + ':' + M

    }

    }


    openBookingBox(){
        document.getElementById('bookingBox').style.visibility = "visible"

    }
    render() {
        return (
            <div className="grid-row" onDoubleClick={this.openBookingBox}>
                <div className="time grid-row-style">{this.state.time}</div>
                <div className="patient grid-row-style">{this.state.patient}</div>
                <div className="reason grid-row-style">{this.state.reason}</div>
                <div className="notes grid-row-style">{this.state.notes}</div>
            </div>
        )
    }
}


export default GridRow