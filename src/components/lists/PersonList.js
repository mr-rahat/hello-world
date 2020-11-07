
import { Component } from 'react'
import { Person } from '../representational/Person'
class PersonList extends Component {
    constructor(props) {
        super(props);

        console.log('PersonList constructor')
    }

    static getDerivedStateFromProps(nextProps, preState) {
        console.log('PersonList getDerivedStateFromProps', nextProps, preState);
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log('PersonList getSnapshotBeforeUpdate');
        return true;
    }
    componentDidMount() {
        console.log('PersonList componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Update PersonList shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentDidUpdate() {
        console.log('Update PersonList componentDidUpdate');
    }
    render() {
        console.log('PersonList render');
        return (
            this.props.persons.map((item, index) => {
                return (
                    <Person name={item.name} age={item.age} delete={() => this.props.deletePerson(index)} key={item.id} changeName={(e) => this.props.changeNames(e, index)} />
                )
            })
        )
    }


}
export default PersonList 
