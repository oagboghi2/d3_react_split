import React, { Component } from 'react'
import * as d3 from 'd3'

const svgCanvas = d3.select(this.refs.canvas)
    .append('svg')
    .attr('width', 600)
    .attr('height', 400)
    .style('border', '1px solid black')


class BarChart extends Component {
    componentDidMount() {
        const data = [ 2, 4, 2, 6, 8 ]
        this.drawBarChart(data)
    }
    drawBarChart(data)  {}
    render() { return <div ref="canvas"></div> }
}
export default BarChart