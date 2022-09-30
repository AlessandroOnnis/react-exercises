import React from "react"

//===Esecuzione esercizio===setting default value
export class Welcome extends React.Component{
    render(){
        return (
        <>
            <p>Welcome, {<strong>{this.props.name?this.props.name: 'nome di default'}</strong>}!</p>
            <Age age={this.props.age}/>
        </>
        )
    }
}
function Age(props) {
    return <p>Your age is, {props.age}</p>
}