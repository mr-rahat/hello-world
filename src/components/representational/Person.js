
export let Person = (props) => {
    let stylist = {
        border: "1px solid black",
        borderRadius: "10px",
        marginBottom: "1em",
        padding: "1em"
    };

    return (
        <div style={stylist}>
            <p className="btn" onClick={props.delete}>I am {props.name} & Age {props.age} years old </p>
            <input type="text" style={{ marginTop: 5 + "px", borderRadius: 5 + 'px', padding: 10 + 'px' }} onChange={props.changeName} value={props.name} />
        </div>

    )
}
