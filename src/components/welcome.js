import React from "react"

//===Esecuzione esercizio===setting default value
export class Welcome extends React.Component{
    render(){
        const maggiorenne = this.props.age > 18;
        if(maggiorenne){
            return (
            <>
                <p>Welcome, {<strong>{this.props.name?this.props.name: 'nome di default'}</strong>}!</p>
                <Age age={this.props.age}/>
            </>
            )
        }else{
            return (
            <>
                <p>Welcome, {<strong>{this.props.name?this.props.name: 'nome di default'}</strong>}!</p>
            </>
            )
        }
    }
}
//per me sarebbe più corretto così, controllare sull'elemento se esiste, poi passare i controlli sull'altro
function Age(props) {
    if(props.age){
        return <p>Your age is, {props.age}</p>
    }
}