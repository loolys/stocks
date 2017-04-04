import React, { Component } from 'react'
import axios from 'axios'

import config from './config'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  componentDidMount () {
    const bearer = 'Bearer ' + config.apikey
    var instance = axios.create({
      baseURL: 'https://sandbox.tradier.com/v1//markets/history?symbol=AAPL&interval=monthly',
      timeout: 1000,
      headers: {
        'Authorization': bearer,
        'Accept': 'application/json'
      }
    })

    console.log(config.apikey)

    instance.get()
      .then(res => console.log(res))
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
