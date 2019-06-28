import React, { Component } from 'react'
import './BookingBox.css'

export default class BookingBox extends Component {
    state = {
        firstname: "",
        surname: "",
        reason: "",
        notes: ""
    }
    input(){
        this.setState({firstname:document.getElementById('firstName').input},
                      {surname:document.getElementById('surname').input},
                      {reason:document.getElementById('reasonInput').input},
                      {notes:document.getElementById('text').input})
    }
    render() {
        return (
            <div className="bookingBox" id = "bookingBox">
                <div className="booking-area">
                    <h1 className='text'>Book a Slot</h1>
                    <p className="name">Patient Name</p>
                    <input className="inputs" id="firstName" type="text" placeholder="First Name" required="yes"></input>
                    <input className="inputs" id="surname" type="text" placeholder="Second Name" required="yes"></input>
                    <p className="reasonText text">Reason</p>
                    <textarea className="inputs" id="reasonInput" type="text" required="yes"></textarea>
                    <p className="notesText text" >Notes</p>
                    <textarea type="inputs" rows="3" id="text" ></textarea>
                </div>
                <div className="buttons">
                    <button className="buts" id="cancelButton">Cancel</button>
                    <button className="buts" id="submitButton">Submit</button>
                </div>
            </div>
        )
    }
}


// Textbox field for patient name - this must be split into firstname and surname.
// Field label for patient name is : "Patient Name"
// Textbox field for booking reason
// Field label for booking reason is : "Reason"
// Both name and reason need to have text
// No text decoration
// Ok and cancel button present
// font standard 12pt times new roman
// Dialogue label/title : "Book a slot"
// Grey background
// Cross button on dialog