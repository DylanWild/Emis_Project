import React from 'react'
import './RightClickBox.css'

const cm = 

window.addEventListener('contextmenu', (e) => {
       e.preventDefault();
       ShowContextMenu();
       cm.style.top = e.y + cm.offsetHeight > window.innerHeight ? window.innerHeight - cm.offsetHeight : e.y;
       cm.style.left = e.x + cm.offsetWidth > window.innerWidth ? window.innerWidth - cm.offsetWidth : e.x;
})

window.addEventListener('click', () => {
    ShowContextMenu(false);
})

function ShowContextMenu(show = true) {
    // const cm = document.querySelector('.right-click-box');
    // cm.style.display = show ? 'block' : 'none';

    return (
        <div className="right-click-box">
            <div className="ctm-1">Cancel Appointment</div> 
        </div>
    )
}


export default ShowContextMenu
