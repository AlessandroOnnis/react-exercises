import React from "react"

//===Esecuzione esercizio===setting default value
export class Welcome extends React.Component{
    render(){
        return (
        <>
            <p>Welcome, {<strong>{this.props.name?this.props.name: 'nome di default'}</strong>}!</p>
            <p>Your age is, {this.props.age?this.props.age: 'undefined atm'}</p>
        </>
        )
    }
}