import React from "react"

//===Esecuzione esercizio===setting default value
export class Welcome extends React.Component{
    render(){
        const ageRange = this.props.age > 18 && this.props.age <65;
        if(this.props.age && ageRange){
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
function Age(props) {
    return <p>Your age is, {props.age}</p>
}