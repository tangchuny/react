import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

export default class Counter extends Component {
	
	render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
	
  propTypes: {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }
}

/*
Counter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}*/