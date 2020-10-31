import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Person } from './components/Person.js'

class App extends Component {
  state = {
    personsInfo: [
      { name: 'Rahat', age: parseInt(Math.random() * 30 + 1) },
      { name: 'Karim', age: parseInt(Math.random() * 30 + 1) }
    ]
  };
  changePersons = (changeName, changeAge) => {
    this.setState({
      personsInfo: [
        { name: changeName, age: changeAge },
        { name: 'Rahim', age: parseInt(Math.random() * 30 + 1) }
      ]
    })
  };
  changeAge = (e) => {
    this.setState({
      personsInfo: [
        { name: 'Maruf', age: parseInt(Math.random() * 30 + 1) },
        { name: e.target.value, age: parseInt(Math.random() * 30 + 1) }
      ]
    })
  };

  render() {
    let sty_list = {
      border: "1px solid black",
      borderRadius: "10px",
      marginBottom: "1em",
      padding: "1em"
    }
    return (
      <div className="App">
        <header className="App-header">

          <div style={sty_list} >
            <button className="btn" onClick={this.changePersons.bind(this, 'Maruf', 15)}>click to change persons </button>
            <input type="text" className="btn" style={{ marginTop: 1 + "px", borderRadius: 5 + 'px' }} onChange={this.changeAge} />
          </div>

          <img src={logo} className="App-logo" alt="logo" />
          <Person name={this.state.personsInfo[0].name} age={this.state.personsInfo[0].age} showName={this.changeAge}>Eating Milk,Playing Cricket,To be Developer</Person>
          <Person name={this.state.personsInfo[1].name} age={this.state.personsInfo[1].age} changeItems={() => this.changePersons('Maruf Rahman', 25)}>Eating ice-Cream,Playing Vollyball,To be Engineer</Person>
        </header>
      </div>
    );
  }

  //That's the alternative code of above JSX code :
  /*   return React.createElement('div', { className: 'App' }, React.createElement('header', { className: 'App-header' }, React.createElement('h1', null, 'Hello World'), <img src={logo} className="App-logo" alt="logo" />, <Person />)) */
}

export default App;
