import { Component } from 'react';
import logo from '../logo.svg';
import persons from '../assets/persons';
import PersonList from './lists/PersonList';
import NewPerson from "./representational/NewPerson.js";
import { Route, NavLink } from 'react-router-dom'
class MainComponent extends Component {
    state = {
        personsInfo: persons,
        hideAndSeek: true
    };

    deletePerson = (index) => {
        let person = [...this.state.personsInfo];
        person.splice(index, 1);
        this.setState({
            personsInfo: person
        })
    };
    changeNames = (e, index) => {
        let person = {
            ...this.state.personsInfo[index]
        };
        person.name = e.target.value;
        let persons = [...this.state.personsInfo];
        persons[index] = person;
        this.setState({
            personsInfo: persons
        })
    };
    showOrHide = () => {
        this.setState({ hideAndSeek: !this.state.hideAndSeek });

    }
    render() {
        let person = null;
        if (this.state.hideAndSeek) {
            person = <PersonList changeNames={this.changeNames} deletePerson={this.deletePerson} persons={this.state.personsInfo} />
        }
        return (
            <div className="App">
                <nav className="Nav-bar">
                    <ul>
                        <li><NavLink to="/" exact>Home Page</NavLink></li>
                        <li><NavLink to="/new-person-entry">New Person Entry</NavLink></li>
                    </ul>
                </nav>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Route path="/" exact render={() => <button className="btn" onClick={this.showOrHide}>Toggle The Persons List</button>} />
                    <Route path="/" exact render={() => person} />
                    <Route path="/new-person-entry" exact component={NewPerson} />


                </header>
            </div>
        );
    }
}
export default MainComponent;