import React, { Component } from 'react';
import GenderSelect from './GenderSelect'; 
export default class MyFrom extends Component {
	constructor(props){
		 super(props);
			this.state = {name: '',password: '',gender: ''}; 
			this.handleSelect = this.handleSelect.bind(this) 
		}
	handleChange(name,event){ 
		var newState = {} 
		newState[name] = event.target.value 
		this.setState(newState) 
	}
	
	handleSelect(event){ 
		this.setState({gender: event.target.value}) 
	}
	
	render(){
		console.log(this.state)
		// handleChange.bind(this) 给函数加上默认参数，bind 可以接受多个参数， // 第一个参数是函数里的this值，可以替换为其他对象，那么函数里的this就是那个对象。
		return <from>
			<input type="text" placeholder="请输入用户名" onChange={this.handleChange.bind(this,'name')}/>
			<input type="text" placeholder="请输入密码" onChange={this.handleChange.bind(this,'password')}/> 
			<GenderSelect handleSelect={this.handleSelect} ></GenderSelect>
		</from>

	}
}
	
