import React, { Component } from 'react';


class BlogTag extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color: ["#2e3192", "#4436f8", "#3ebafa", "#777da7", "#f4555b", "#f69679", "#7e7b47", "#448ccb", "#39b54a", "#ed9731",
            "#027837", "#f26522", "#464646", "#1cbbb4", "#3cb878", "#92278f", "#00a651", "#a864a8", "#92278f"],
         }
    }

    randomTag() {
        let min = 0; 
        let max = this.state.color.length;
        let random = Math.random() * (+max - +min) + +min; // Good Code!~
        random = Math.floor(random);
        return this.state.color[random];
    }

    renderTagName() {
        return this.props.tag.toLowerCase();
    }

    render() { 
        return ( 
        //    <div><Button variant="contained" color="primary" size="small" className="ad-button" style = {{background: this.randomTag()}}> {this.renderTagName()}</Button></div> 
         <div><li className="tt-badge" style = {{background: this.randomTag()}}> {this.renderTagName()} </li></div>
        );
    }
}
 
export default BlogTag;