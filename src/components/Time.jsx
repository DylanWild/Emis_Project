import React from 'react'
import GridRow from './GridRow';
  
const Time = (props) => {
let I= 0
 let gridObj =[]
    while(I<480){
      let row = <GridRow/>
       gridObj.push(row)
            I+=15;
        } 
        return gridObj

}

export default Time
