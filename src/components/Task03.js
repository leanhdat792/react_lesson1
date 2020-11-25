import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Task03 extends Component {
	render(){
	  	return (
	    	<div className="c-main">
	    	    <Tabs>
		      		<TabList className="c-tabs">
		      			<Tab>Tab 1</Tab>
		      			<Tab>Tab 2</Tab>
		      			<Tab>Tab 3</Tab>
		      		</TabList>
	      			<TabPanel>
	      				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ratione provident fugit consequuntur tempora esse repellendus, pariatur labore quos qui.
	      			</TabPanel>
	      			<TabPanel>
	      				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex suscipit, cupiditate voluptatum facere, quis quibusdam, velit impedit nisi veritatis explicabo cumque at. Facere blanditiis quisquam dolorum, itaque consequuntur, sequi distinctio assumenda! Nisi laboriosam fugit, aliquid esse amet itaque consequuntur ratione?
	      			</TabPanel>
	      			<TabPanel>
	      				Lorem ipsum dolor
	      			</TabPanel>
	      		</Tabs>
	    	</div>
	  	);
	}
}

export default Task03;