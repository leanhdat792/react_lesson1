import React, { Component } from "react";

class Task01 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "Want to play?"
		}
	}
	changeText = (text) => {
		this.setState({text : "I am working!"})
	}
	render(){
		const {text} = this.state
		return (
		    <div className="c-main">
		      <button onClick={this.changeText} className="c-btn1">{this.state.text}</button>
		    </div>
	  	);
	}
}

export default Task01;