
export let Person = (props) => {
    let stylist = {
        border: "1px solid",
        borderRadius: "10px",
        marginBottom: "1em",
        padding: "1em",

    };

    return (
        <div className="person" style={stylist} onClick={props.selectedPersonDetail}>
            <p >I am {props.name} & Age {props.age} years old </p>
        </div>

    )
}
