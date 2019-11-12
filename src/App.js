import React, { Component } from 'react'
import * as d3 from 'd3'

const temperatureData = [ 8, 5, 13, 9, 12 ];

// d3.select(this.refs.temperatures)
//         .selectAll("h2")
//         .data(temperatureData)
//         .enter()
//             .append("h2")
//             .text("New Temperature")

d3.select(this.refs.myDiv).style('background-color', 'blue')
class App extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }
    
 
    render(){
      return (<div refs={this.myRef}></div>)
    }
}
export default App