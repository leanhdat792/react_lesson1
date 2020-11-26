import React, { Component } from "react";

class Table extends Component{
	render(){
		return(
			<table>
      			<thead>
	      			<tr>
	      				<th><a href="#" onClick={() => this.props.sortBy('title')}>Title</a></th>
	      				<th>Author(s)</th>
	      				<th>Publish Date</th>
	      				<th><a href="#" onClick={() => this.props.sortBy('price')}>Price</a></th>
	      			</tr>
      			</thead>
      			<tbody>
	      			{
	      				this.props.data.map(row => (
	      					<tr key={row.title}>
			      				<td>{row.title}</td>
			      				<td>{row.authors}</td>
			      				<td>{row.published}</td>
			      				<td>{row.price}</td>
			      			</tr>
	      				))
	      			}
	      		</tbody>
      		</table>
		);
	}
}

export default Table;