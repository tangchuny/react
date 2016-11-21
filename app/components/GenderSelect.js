import React, { Component } from 'react';
export default class GenderSelect extends Component {
	
	render(){ 
		return <select onChange={this.props.handleSelect}> 
		<option value="0">男</option> 
		<option value="1">女</option> 
		</select>
	}
}