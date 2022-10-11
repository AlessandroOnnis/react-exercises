import React from "react"
import { Age } from "./age"

//===Esecuzione esercizio===setting default value
export class Welcome extends React.Component {
    render() {
        return (
            <>
                <p>Welcome, <strong>{this.props.name ? this.props.name : 'nome di default'}</strong>!</p>
                {this.props.age <= 65 && this.props.name === 'John' && <Age age={this.props.age} />}
            </>
        )
    }
}