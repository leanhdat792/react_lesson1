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
				authors: 'asc',
				price: 'asc',
				publishedYM: 'asc',
			}
		};
		this.sortBy = this.sortBy.bind(this)
	}
	sortBy(key) {
		const directData = {
			[key]: this.state.direction[key] === 'asc' ? 'desc' : 'asc'
		};
		const sortedData = this.state.data.sort((a, b) => {
			if(key === 'price'){
				const numberA = parseFloat(a[key]);
				const numberB = parseFloat(b[key]);
				return this.state.direction[key] === 'asc' ? numberA - numberB : numberB - numberA;
			} else if(key  === 'title') {
				const nameA = a.title.toUpperCase();
				const nameB = b.title.toUpperCase();
				if(nameA < nameB){
					return this.state.direction[key] === 'asc' ? -1 : 1;
				}
				if(nameA > nameB){
					return this.state.direction[key] === 'asc' ? 1 : -1;
				}
				return 0;
			} else if(key === 'authors'){
				const nameA = a.authors.toUpperCase();
				const nameB = b.authors.toUpperCase();
				if(nameA < nameB){
					return this.state.direction[key] === 'asc' ? -1 : 1;
				}
				if(nameA > nameB){
					return this.state.direction[key] === 'asc' ? 1 : -1;
				}
				return 0;
			} else  if(key === 'publishedYM'){
				const dateA = new Date(a.publishedYM.split('-'));
				const dateB = new Date(b.publishedYM.split('-'));
				return this.state.direction[key] === 'asc' ? dateA - dateB : dateB - dateA;
			}
		});
		
		this.setState({
			data: sortedData,
			direction: directData
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