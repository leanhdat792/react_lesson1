import React, { Component } from "react";

class Table extends Component{
	render(){
		return(
			<div>
	  			<div id="sort-control">
	  				<li onClick={(e) => this.props.sortBy(e, 'title')}>Title</li>
	  				<li onClick={(e) => this.props.sortBy(e, 'authors')}>Author(s)</li>
	  				<li onClick={(e) => this.props.sortBy(e, 'publishedYM')}>Publish Date</li>
	  				<li onClick={(e) => this.props.sortBy(e, 'price')}>Price</li>
	  			</div>
	  			<table id="t-2">
	  			    <tbody>
		      			{
		      				this.props.data.map((row, index) => (
		      					<tr key={index}>
				      				<td>{row.title}</td>
				      				<td>{this.props.reverseString(row.authors)}</td>
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