import React from "react"
import { Age } from "./age"

//===Esecuzione esercizio===setting default value
export class Welcome extends React.Component{
    render(){
        return (
        <>
            <p>Welcome, {this.props.name?this.props.name: 'nome di default'}!</p>
            <Age age={this.props.age}/>
        </>
        )
    }
}