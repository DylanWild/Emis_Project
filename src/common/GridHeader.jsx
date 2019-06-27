import React, { Component } from 'react'
import './GridHeader.css'

export default class GridHeader extends Component {
    render() {
        return (
            <div className = "titleContainer">

                <div className = "time title-style" >
                    Time
                </div>
                <div className = "patientName title-style">
                    Description/Patient Name
                </div>
                <div className = "reason title-style">
                    Reason
                </div>
                <div className = "notes title-style">
                    Notes
                </div>

            </div>
        )
    }
}
