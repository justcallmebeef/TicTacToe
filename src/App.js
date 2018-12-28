import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Grid from './components/Grid'
import Reset from './components/Reset'

class App extends Component {
  constructor() {
    super()
    this.state = {
      boxOne: "",
      boxTwo: "",
      boxThree: "",
      boxFour: "",
      boxFive: "",
      boxSix: "",
      boxSeven: "",
      boxEight: "",
      boxNine: "",
    }
  }

  handleTurnOneBoxOne = () => {
    if (this.state.boxOne === "" && this.state.boxTwo === "" && this.state.boxFour === "" && this.state.boxFive === "") {
      this.setState({
        boxOne: "X",
        boxFive: "O"
      }) 
    } else if (this.state.boxOne === "" && this.state.boxTwo === "X") {
      this.setState({
        boxOne: "X", 
        boxThree: "O"
      })
    } else if (this.state.boxOne === "" && this.state.boxFour === "X") {
      this.setState({
        boxOne: "X", 
        boxSeven: "O"
      })
    } else if (this.state.boxFive === "X") {
      this.setState({
        boxOne: "X", 
        boxNine: "O"
      })
    }
  }

  handleTurnOneBoxTwo = () => {
    if (this.state.boxTwo === "" && this.state.boxOne === "" && this.state.boxFive === "") {
      this.setState({
        boxTwo: "X",
        boxFive: "O"
      })
    } else if (this.state.boxTwo === "" && this.state.boxOne === "X" && this.state.boxNine === "") {
      this.setState({
        boxTwo: "X", 
        boxThree: "O"
      })
    } else if (this.state.boxTwo === "" && this.state.boxThree === "X" && this.state.boxOne === "") {
      this.setState({
        boxTwo: "X", 
        boxOne: "O"
      })
    } else if (this.state.boxTwo === "" && this.state.boxOne === "O" && this.state.boxFour === "X") {
      this.setState({
        boxTwo: "X", 
        boxNine: "O"
      })
    } else if (this.state.boxOne === "X" && this.state.boxFive === "X" && this.state.boxEight === "") {
      this.setState({
        boxTwo: "X", 
        boxEight: "O"
      }) 
    }
  }

  handleTurnOneBoxThree = () => {
    if (this.state.boxThree === "" && this.state.boxSeven === "" && this.state.boxFour === "") {
      this.setState({
        boxThree: "X",
        boxFive: "O"
      })
    } else if (this.state.boxThree === "" && this.state.boxSeven === "O" && this.state.boxNine === "O" && this.state.boxOne === "X") {
      this.setState ({
        boxThree: "X", 
        boxEight: "O"
      })
    } else if (this.state.boxThree === "" && this.state.boxFour === "X") {
      this.setState ({
        boxThree: "X", 
        boxOne: "O"
      })
    }
  }

  handleTurnOneBoxFour = () => {
    if (this.state.boxFour === "" && this.state.boxFive === "") {
      this.setState({
        boxFour: "X",
        boxFive: "O"
      }) 
    } 
  }

  handleTurnOneBoxFive = () => {
    if (this.state.boxFive === "" && this.state.boxSeven === "") {
      this.setState({
        boxFive: "X",
        boxSeven: "O"
      }) 
    } 
  }

  handleTurnOneBoxSix = () => {
    if (this.state.boxSix === "" && this.state.boxFive === "") {
      this.setState({
        boxSix: "X",
        boxFive: "O"
      }) 
    } 
  }

  handleTurnOneBoxSeven = () => {
    if (this.state.boxSeven === "" && this.state.boxFive === "") {
      this.setState({
        boxSeven: "X",
        boxFive: "O"
      }) 
    } 
  }

  handleTurnOneBoxEight = () => {
    if (this.state.boxEight === "" && this.state.boxFive === "") {
      this.setState({
        boxEight: "X",
        boxFive: "O"
      }) 
    } 
  }

  handleTurnOneBoxNine = () => {
    if (this.state.boxNine === "" && this.state.boxFive === "") {
      this.setState({
        boxNine: "X",
        boxFive: "O"
      }) 
    } 
  }

  componentDidUpdate = () => {
    if (this.state.boxThree === "O" && this.state.boxFive === "O" && this.state.boxSeven === "O") {
      setTimeout(function(){ alert("Computer Wins!"); }, 200);
    } else if (this.state.boxOne === "O" && this.state.boxFive === "O" && this.state.boxNine === "O") {
      setTimeout(function(){ alert("Computer Wins!"); }, 200);
    } else if (this.state.boxSeven === "O" && this.state.boxEight === "O" && this.state.boxNine === "O") {
      setTimeout(function(){ alert("Computer Wins!"); }, 200);
    } 
  }

  resetGame = () => {
    this.setState({
      boxOne: "",
      boxTwo: "",
      boxThree: "",
      boxFour: "",
      boxFive: "",
      boxSix: "",
      boxSeven: "",
      boxEight: "",
      boxNine: "",
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid handleTurnOneBoxNine={this.handleTurnOneBoxNine} handleTurnOneBoxEight={this.handleTurnOneBoxEight} handleTurnOneBoxSeven={this.handleTurnOneBoxSeven} handleTurnOneBoxSix={this.handleTurnOneBoxSix} handleTurnOneBoxFive={this.handleTurnOneBoxFive} handleWin={this.handleWin} handleTurnOneBoxFour={this.handleTurnOneBoxFour} handleTurnOneBoxThree={this.handleTurnOneBoxThree} handleTurnOneBoxTwo={this.handleTurnOneBoxTwo} handleTurnOneBoxOne={this.handleTurnOneBoxOne} boxNine={this.state.boxNine} boxEight={this.state.boxEight} boxSeven={this.state.boxSeven} boxSix={this.state.boxSix} boxFive={this.state.boxFive} boxFour={this.state.boxFour} boxThree={this.state.boxThree} boxTwo={this.state.boxTwo} boxOne={this.state.boxOne}/>
        <Reset resetGame={this.resetGame} />
      </div>
    )
  }
}

export default App;
