import React, { Component } from 'react'
import './Column.css'

export default class Column extends Component {
    render() {
        return (
            <div className="column">
                <p id='time'>Time</p>
                <p id='des'>Description/Patient Name</p>
                <p id='res'>Reason</p>
                <p id='note'>Slot Notes</p>
            </div>
        )
    }
}
