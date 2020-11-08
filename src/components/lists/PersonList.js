import { Person } from '../representational/Person';
import { withRouter } from 'react-router-dom';

let PersonList = (props) => {
    console.log(props)
    return (
        props.persons.map((item, index) => {
            return (
                <Person name={item.name} age={item.age} delete={() => props.deletePerson(index)} key={item.id} changeName={(e) => props.changeNames(e, index)} />
            )
        })
    )
}
export default withRouter(PersonList) 
