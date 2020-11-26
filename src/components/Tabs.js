import React, { Component } from "react";

class Tabs extends Component{
	render() {
		return(
			<ul className="c-tabs" ref={el => this.root = el}>
				{React.Children.map(this.props.children, (child, i) => {
					let className = 'c-tabs__link';
					if(child.key === this.props.active){
						className = 'c-tabs__link c-tabs__active';
					}
					return(
						<li className={className} onClick={() => {this.props.onChange(child.key)}} >{child}</li>
					);
				})}
			</ul>
		);
	}
}

export default Tabs;