import React from "react"

//===Esecuzione esercizio===setting default value
export class Welcome extends React.Component{
    render(){
        return (
        <>
            <p>Welcome, {<strong>{this.props.name?this.props.name: 'nome di default'}</strong>}!</p>
            <Age age={this.props.age}/>
            <p>{AgeDue(this.props.age)} </p>
        </>
        )
    }
}
function Age(props) {
    return <p>Your age is, {props.age}</p>
}

//quale dei due conviene?
//===Esercizio Props-05====Metodo due 
function AgeDue(props){
    return <>Your age is, {props}</>
}

//========