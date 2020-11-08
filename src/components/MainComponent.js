import { Component } from 'react';
import logo from '../logo.svg';
import persons from '../assets/persons';
import PersonList from './lists/PersonList';
import PersonDetail from './representational/PersonDetail.js'
import NewPerson from "./representational/NewPerson.js";
import { Route, NavLink } from 'react-router-dom';
class MainComponent extends Component {
    state = {
        personsInfo: persons,
        selectedPerson: null
    };
    selectedPersonDetail = (personID) => {
        let person = this.state.personsInfo.filter(person => person.id == personID)[0]
        this.setState({
            selectedPerson: person
        })
    }
    render() {
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
                    <Route path="/" exact render={() => <PersonList selectedPersonDetail={this.selectedPersonDetail} persons={this.state.personsInfo} />} />
                    <Route path="/new-person-entry" exact component={NewPerson} />
                    <PersonDetail selectedPersonDetail={this.state.selectedPerson} />
                </header>
            </div>
        );
    }
}
export default MainComponent;