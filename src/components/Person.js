import React, { Component } from 'react';

export let Person = (props) => {
    let stylist = {
        border: "1px solid black",
        borderRadius: "10px",
        marginBottom: "1em",
        padding: "1em"
    }
    //console.log(new Component());
    if (props.name.trim() === 'Rahat') {
        if (props.age <= 10) {
            var hobbyun10 = props.children.trim().slice(0, 11)
        } else if (props.age >= 11 && props.age <= 20) {
            var hobbybet10and20 = props.children.trim().slice(12, 27)
        } else {
            var hobbybet20and30 = props.children.trim().slice(28, 44)
        }

    } else if (props.name.trim() === 'Karim') {
        if (props.age <= 10) {
            var hobbyun10 = props.children.trim().slice(0, 16)
        } else if (props.age >= 11 && props.age <= 20) {
            var hobbybet10and20 = props.children.trim().slice(17, 34)
        } else {
            var hobbybet20and30 = props.children.trim().slice(35, 49)
        }

    } else if (props.name.trim() === 'Maruf') {
        var info = 'i was born in BrahmanBaria'
    } else if (props.name.trim() === 'Rahim') {
        var info = 'i was born in Dhaka'
    } else if (props.name.trim() === 'Maruf Rahman') {
        var info = 'My hometown is in Barishal'
    }
    return (
        <div style={stylist}>
            <p className="btn" onClick={props.changeItems}>I am {props.name} & Age {props.age} years old ; <br />Personal info : {info}{hobbyun10}{hobbybet10and20}{hobbybet20and30}</p>
            <input type="text" onChange={props.showName} />
        </div>

    )
}
