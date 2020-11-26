import React, { Component } from "react";
import Tabs from './Tabs.js';

class Task03 extends Component {
	constructor(props){
		super(props);
		this.state = {active: 'tab1'};
	}
	render(){
		const content = {
			tab1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ratione provident fugit consequuntur tempora esse repellendus, pariatur labore quos qui.',
			tab2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex suscipit, cupiditate voluptatum facere, quis quibusdam, velit impedit nisi veritatis explicabo cumque at. Facere blanditiis quisquam dolorum, itaque consequuntur, sequi distinctio assumenda! Nisi laboriosam fugit, aliquid esse amet itaque consequuntur ratione?',
			tab3: 'Lorem ipsum dolor',
		}
	  	return (
	    	<div className="c-main">
	    	    <Tabs active={this.state.active} onChange={active => this.setState({active})}>
		      		<span key="tab1">Tab 1</span>
		      		<span key="tab2">Tab 2</span>
		      		<span key="tab3">Tab 3</span>
	      		</Tabs>
	      		<div className="c-tabs__content">{content[this.state.active]}</div>
	    	</div>
	  	);
	}
}

export default Task03;