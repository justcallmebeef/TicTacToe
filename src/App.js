import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Grid from './components/Grid'

class App extends Component {
  constructor() {
    super()
    this.state = {
      playerOne: "X", 
      playerTwo: "O" 
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid playerOne={this.state.playerOne} playerTwo={this.state.playerTwo}/>
      </div>
    )
  }
}

export default App;
