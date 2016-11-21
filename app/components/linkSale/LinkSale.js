import React, { Component } from 'react';
import './index.css'

import loadingIMG from './img/pic_yyw_01.png'

export default class ClassfyMenu extends Component {
  componentWillReceiveProps(newProps){
  }
   render() {
   	const {num} = this.props;
    return <a href="#" className={"link-sale-a zone"+ num}>
            <span className="text">
                <i className="p1">进口专区</i>
                <i className="p2">全场促销8.9折购</i>
                <i className="p3">在南宁吃遍全球！</i>
            </span>
            <img className="lazy" src={loadingIMG} />
          </a>
  }
}