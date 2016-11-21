import React, { Component, PropTypes } from 'react'
import App from '../containers/App'
import configureStore from '../stores/configureStore'

import Hearder 		from '../components/hearder/Hearder';
import Search 		from '../components/search/Search';
import Footer 		from '../components/footer/Footer';
import ClassfyMenu  from '../components/classfyMenu/ClassfyMenu';
import LinkSale  from '../components/linkSale/LinkSale';
import '../css/common.css'
export default class MainComponents extends Component {
	constructor(props) {
  	 super(props)
  	 this.menuState={
          title:[
          "零食小吃",
          "新鲜水果",
          "酒水饮料",
          "生鲜肉类"
          ],
          num:[
          "1",
          "2",
          "3",
          "4"
          ]
        }
   
  }
	_handleChange(event){
        this.setState({[event.target.name]:event.target.value})
      }
	
	render() {
	const {title,num} = this.menuState
    return (
      <div className="main flex">
      	<Hearder></Hearder>
       	<Search></Search>
       	<div className="body">
	       	<section className="link-cate">
	   			<ClassfyMenu num={num[0]} title={title[0]}></ClassfyMenu>
	   			<ClassfyMenu num={num[1]} title={title[1]}></ClassfyMenu>
	   			<ClassfyMenu num={num[2]} title={title[2]}></ClassfyMenu>
	   			<ClassfyMenu num={num[3]} title={title[3]}></ClassfyMenu>
	   		</section>
	   		<section className="link-sale">
	   			<LinkSale num={num[0]}></LinkSale>
	   			<LinkSale num={num[1]}></LinkSale>
	   			<LinkSale num={num[2]}></LinkSale>
	   			<LinkSale num={num[3]}></LinkSale>
	   		</section>
   	    </div>
   	  
       	<Footer></Footer>
      </div>
    )
    
    
  }
}
