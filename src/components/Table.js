import React, { Component } from "react";

class Table extends Component{
	render(){
		return(
			<div>
	  			<div id="sort-control">
	  				<a href="#" onClick={() => this.props.sortBy('title')}>Title</a>
	  				<a href="#" onClick={() => this.props.sortBy('authors')}>Author(s)</a>
	  				<a href="#" onClick={() => this.props.sortBy('publishedYM')}>Publish Date</a>
	  				<a href="#" onClick={() => this.props.sortBy('price')}>Price</a>
	  			</div>
	  			<table id="t-2" className="">
	  			    <tbody>
		      			{
		      				this.props.data.map(row => (
		      					<tr key={row.title}>
				      				<td>{row.title}</td>
				      				<td>{row.authors}</td>
				      				<td>{row.published}</td>
				      				<td>${row.price}</td>
				      			</tr>
		      				))
		      			}
	      			</tbody>
	      		</table>
      		</div>
		);
	}
}

export default Table;