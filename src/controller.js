import React, { Component } from 'react';
import Viz from './Viz.js';

export default class Controller extends Component {
    constructor(){
        super();
        this.state = {
            color: "",
            width: "",
            toDraw: []
        }
    }

    // onSubmit creates a new Shape object, that is appended into our 
    // toDraw array. This array is passed down our D3 components as props

    onSubmit(event){
        event.preventDefault();
        const newShape = {
            color: this.state.color,
            width: this.state.width
        }
        this.setState({toDraw: [...this.state.toDraw, newShape]})
    }

    onChange = (event) => {
        this.setState({[event.target.name] : event.target.valuje})
    }

    render(){
        return (
            <div ClassName="controller">
                <form onSubmit={this.onSubmit}>
                <label>pick a color:</label>
                <select name="color" onChange={this.onChange} >
                    <option disabled selected='selected' value="">choose</option>
                    <option value="red">red</option>
                    <option value="orange">orange</option>
                    <option value="yellow">yellow</option>
                </select>
                <label>how big:</label>
                <input name="width" onChange={this.onChange} />
                <button type="submit"> draw!</button>
                </form>
                {/* conditionally render Viz component */}
                {this.state.toDraw.length ? <Viz shapes={this.state.toDraw} /> : null}
            </div>
        )
    }
}