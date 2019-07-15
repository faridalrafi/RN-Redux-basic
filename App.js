import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Routing from './src/routing'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import IndexReducer from './src/redux/reducers/index'
const store = createStore(IndexReducer)
export default class App extends Component {
  render() {
    return (
      <Provider store= {store}>
      <Routing />
      </Provider>
    )
  }
}
