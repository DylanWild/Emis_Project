import React, { Component } from 'react'
import './BookingBox.css'

export default class BookingBox extends Component {
    state = {
        firstname: "",
        surname: "",
        reason: "",
        notes: "",
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.dialogBox(this.state);
        this.setState({ 
            surname: '',
            firstname: '',
            reason: '',
            notes: '',
        });
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { firstname, surname, reason, notes } = this.state
        return (
            <div className="bookingBox" id="bookingBox">
                <form className="booking-area" onSubmit={this.onSubmit}>
                    <h1 className='text'>Book a Slot</h1>
                    Patient Name
                    <input type="text" placeholder="First Name" required="yes" name="firstname"
                    onChange={this.onChange} value={firstname}></input>
                    <input type="text" placeholder="Second Name" required="yes" name="surname"
                    onChange={this.onChange} value={surname}></input>
                    Reason
                    <textarea type="text" required="yes" name="reason"
                    onChange={this.onChange} value={reason}></textarea>
                    Note
                    <textarea type="inputs" rows="3" id="text" name="notes"
                    onChange={this.onChange} value={notes}></textarea>
                    <input 
                    type="submit" value="Submit" />
                </form>
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