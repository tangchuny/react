import React, { Component } from 'react';
import './index.css'
export default class Search extends Component {
  render() {
    return <form className="search">
			      <input type="text" className="search-input" placeholder="搜索商品" />
			      <a className="cancel"></a>
			      <a className="clear"></a>
			    </form>
  }
}

