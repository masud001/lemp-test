import React, { Component } from 'react';



class CircleName extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color: ["#2e3192", "#4436f8", "#3ebafa", "#777da7", "#f4555b", "#f69679", "#7e7b47", "#448ccb", "#39b54a", "#ed9731",
            "#027837", "#f26522", "#464646", "#1cbbb4", "#3cb878", "#92278f", "#00a651", "#a864a8", "#92278f"],
         }
    }
// to avoide random color we have to add in DB while register the user 
    randomCircle() {
        let min = 0; 
        let max = this.state.color.length;
        let random = Math.random() * (+max - +min) + +min; // Good Code!~
        random = Math.floor(random);
        return this.state.color[random];
    }

    renderName() {
        return this.props.username.substring(0, 1).toUpperCase();
    }

    render() { 
        return ( 
            <span className="circlename" style = {{background: this.randomCircle()}}>{this.renderName()}</span>
         );
    }
}
 
export default CircleName;