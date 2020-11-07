import { Component } from 'react';
import logo from '../logo.svg';
import persons from '../assets/persons';
import PersonList from './lists/PersonList'
class MainComponent extends Component {
    constructor(props) {
        super(props);

        console.log('MainComponent constructor')
    }
    state = {
        personsInfo: persons,
        hideAndSeek: true
    };
    static getDerivedStateFromProps(nextProps, preState) {
        console.log('MainComponent getDerivedStateFromProps', nextProps, preState);
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log('MainComponent getSnapshotBeforeUpdate');
        return true;
    }
    componentDidMount() {
        console.log('MainComponent componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Update MainComponent shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentDidUpdate() {
        console.log('Update MainComponent componentDidUpdate');
    }



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
        console.log('MainComponent render');


        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <button className="btn" onClick={this.showOrHide}>Toggle The Persons List</button>
                    {person}
                </header>
            </div>
        );
    }

    //That's the alternative code of above JSX code :
    /*   return React.createElement('div', { className: 'App' }, React.createElement('header', { className: 'App-header' }, <img src={logo} className="App-logo" alt="logo" />, <Person />)) */
}
export default MainComponent;