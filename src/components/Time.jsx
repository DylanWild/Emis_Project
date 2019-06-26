import React from 'react'
import GridRow from './GridRow';
import Grid from '../Grid'




  
const Time = (props) => {
   let I= 900
 let gridObj =[]
    while(I<=1645){
      let row = <GridRow/>
    //   this.props.state.time = I
       gridObj.push(row)
            I+=15;
            // this.Grid.appendChild(GridRow)
        } 
        return gridObj

}
    


export default Time
// export default I