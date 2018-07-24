import React, { Component } from 'react'
import './App.css'
import Movies from './Movies'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MovieDB</h1>
        </header>
        <Movies />
      </div>
    )
  }
}

export default App
