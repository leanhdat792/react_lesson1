import React, { Component } from "react";
import Table from './Table.js'

import data from '../data/book.json'

class Task02 extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: data
		};
		this.sortBy = this.sortBy.bind(this)
	}

	capitalize(str){
		return str.charAt(0).toUpperCase() + str.substr(1);
	}

	reverseString(str){
		let lowerString = str.toLowerCase();
		let splitString = lowerString.split(' ');
		let string = '';
		if(splitString.length < 2){
			return this.capitalize(lowerString);
		} else if(splitString.length % 2 === 0){
			for(let i=0; i < splitString.length; i+=2 ){
				if(i !== 0){string += ', ';}
				string += this.capitalize(splitString[i+1]) + ' ' + this.capitalize(splitString[i]);
			}
		} else {
			for(let i=0; i < splitString.length - 1; i+=2){
				if(i !== 0){string += ', ';}
				if(i === splitString.length - 3){
					string += this.capitalize(splitString[i+1]) + ' ' + this.capitalize(splitString[i+2]) + ' ' + this.capitalize(splitString[i]);
				} else {
					string += this.capitalize(splitString[i+1]) + ' ' + this.capitalize(splitString[i]);
				}
			}
		}
		return string;
	}

	sortBy(e, key) {
		let className = e.target.className;
		let sortDirection = 1;
		if (className.includes("sorted-asc")) {
            sortDirection = -1;
      	}
		const sortedData = this.state.data.sort((a, b) => {
			let aKey = a[key];
			let bKey = b[key];
			if(typeof aKey === "string" && typeof bKey === "string"){
				aKey = aKey.toUpperCase();
				bKey = bKey.toUpperCase();
			}
			if(aKey > bKey) return sortDirection;
			if(aKey < bKey) return -sortDirection;
			else return 0;
		});
		e.target.className = sortDirection === 1 ? "sorted-asc" : "sorted-desc";
		this.setState({ data: sortedData });
	}
	render(){
		return (
	    	<div className="c-main">
	      		<Table
	      			data={this.state.data}
	      			sortBy={this.sortBy}
	      			reverseString={this.reverseString}
	      			capitalize={this.capitalize}
	      		/>
	    	</div>
	  	);
	}
}

export default Task02;