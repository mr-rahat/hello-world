import { Person } from '../representational/Person';
import { withRouter } from 'react-router-dom';

let PersonList = (props) => {
    return (
        props.persons.map((item, index) => {
            return (
                <Person name={item.name} age={item.age} key={item.id} selectedPersonDetail={() => props.selectedPersonDetail(item.id)} />
            )
        })
    )
}
export default withRouter(PersonList) 
