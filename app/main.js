//https://github.com/jackielii/simplest-redux-example/blob/master/index.js
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import App from './containers/App'
import configureStore from './stores/configureStore'
import MainComponents from './containers/MainComponents'

//import MainComponents from './components/demo/Father'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <MainComponents />
  </Provider>,
  document.getElementById('root')
)