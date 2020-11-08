let PersonDetail = (props) => {
    console.log(props.selectedPersonDetail);
    if (props.PersonDetail == null) { return null }
    return (
        <div>
            <h1>{props.selectedPersonDetail.name}</h1>
            <h3>{props.selectedPersonDetail.age}</h3>
        </div>
    )
}
export default PersonDetail;