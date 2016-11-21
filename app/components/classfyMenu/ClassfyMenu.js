import React, { Component } from 'react';
import './index.css'

export default class ClassfyMenu extends Component {
  componentWillReceiveProps(newProps){
  }
   render() {
   	const {title,num} = this.props;
    return <a href="#" className={"cate lazy cate"+num}>{title}</a>
  }
}