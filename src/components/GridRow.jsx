import React, { Component } from 'react';
import './GridRow.css';
import BookingBox from './BookingBox';

let H = 8
let M = 0
let counter = 0


class GridRow extends Component {
    
    state = {
        time: this.timeCounter(),
        patient: "",
        reason: "",
        notes: "",
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

    dialogBox = (patientData) => {
        console.log(patientData)
        setState((state) => {
            return {
                patient: state.patient + patientData.surname + ", " + patientData.firstname,
                reason: state.reason + patientData.reason,
                notes: state.notes + patientData.notes,
            }
         })
        // const newItem = {
        //   id: 6,
        //   time: "time",
        //   patient: patientData.surname + patientData.forename,
        //   reason: patientData.reason,
        //   notes: patientData.notes,
        // }
      
        // GridInfo.setState({ schedule: [GridInfo.state.schedule[0], newItem]})
      }

    openBookingBox(){
        document.getElementById('bookingBox').style.display = "flex"

    }
    render() {
        return (
            <div className="grid-row" onDoubleClick={this.openBookingBox}>
                <div className="time grid-row-style">{this.state.time}</div>
                <div className="patient grid-row-style">{this.state.patient}</div>
                <div className="reason grid-row-style">{this.state.reason}</div>
                <div className="notes grid-row-style">{this.state.notes}</div>
                <BookingBox dialogBox={this.dialogBox}/>
            </div>
        )
    }
}


export default GridRow