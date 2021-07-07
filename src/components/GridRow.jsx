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
        booking: false
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
        this.setState({
            patient: this.state.patient + patientData.surname + ", " + patientData.firstname,
            reason: this.state.reason + patientData.reason,
            notes: this.state.notes + patientData.notes,
         })
         this.handleBookingBox()
      }

    handleBookingBox = () => {
        let show = this.state.booking
        this.setState({ booking: !show })
    }
    
    render() {
        return (
            <div className="grid-row" onDoubleClick={this.handleBookingBox}>
                <div className="time grid-row-style">{this.state.time}</div>
                <div className="patient grid-row-style">{this.state.patient}</div>
                <div className="reason grid-row-style">{this.state.reason}</div>
                <div className="notes grid-row-style">{this.state.notes}</div>
                {
                    this.state.booking && <BookingBox dialogBox={this.dialogBox}/>
                }
            </div>
        )
    }
}


export default GridRow