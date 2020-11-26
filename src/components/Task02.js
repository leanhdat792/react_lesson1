import React, { Component } from "react";
import Table from './Table.js'

import data from '../data/book.json'

class Task02 extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: data,
			direction: {
				title: 'asc',
				price: 'asc',
			}
		};
		this.sortBy = this.sortBy.bind(this)
	}
	sortBy(key) {
		this.setState({
			data: data.sort((a, b) => (
				this.state.direction[key] === 'asc'
				? parseFloat(a[key]) - parseFloat(b[key])
				: parseFloat(b[key] - parseFloat(a[key]))
			)),
			direction: {
				[key]: this.state.direction[key] === 'asc'
				? 'desc'
				: 'asc'
			}
		})
	}
	render(){
		return (
	    	<div className="c-main">
	      		<Table
	      			data={this.state.data}
	      			sortBy={this.sortBy}
	      		/>
	    	</div>
	  	);
	}
}

export default Task02;