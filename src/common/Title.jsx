import React, { Component } from 'react'
import './Title.css';
import '../components/TimeBox'



export class Title extends Component {

    openTimeBox(){
        document.getElementById('timeDropBoxContainer').style.visibility = "visible"
    
    }

    render() {
        return (
            <div className="title-container">
                <p>Placeholder</p>  
                <button id = "timeButton" onClick = {this.openTimeBox}> Adjust Slot Times  </button>     
            </div>
        )
    }
}

export default Title
