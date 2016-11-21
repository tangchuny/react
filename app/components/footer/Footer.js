import React, { Component } from 'react';
import './index.css'
export default class Footer extends Component {
  render() {
    return <footer className="footer">
      <ul className="menus">
        <li className="menu active">
          <a href="home.html"><span className="menu-icon menu-icon1"></span><div>首页</div></a>
        </li>
        <li className="menu">
          <a href="nearbyShop.html"><span className="menu-icon menu-icon2"></span><div>附近小店</div></a>
        </li>     
        <li className="menu gwc">
          <a href="caret.html">
            <span className="menu-icon menu-icon3"></span>
            <div>购物车</div><span className="count">1</span>
          </a>
        </li>
        <li className="menu">
          <a href="myCenter.html"><span className="menu-icon menu-icon4"></span><div>我的</div></a>
        </li>
      </ul>
    </footer>
  }
}