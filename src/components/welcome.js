import React from "react"

//===Esecuzione esercizio===setting default value
export class Welcome extends React.Component{
    render(){
        const ageRange = (this.props.age > 18 && this.props.age <65) ||  this.props.age < 65;
        const person = this.props.name === 'Jhon';
        let age;
        if(this.props.age && ageRange && person){
            age = <Age age={this.props.age}/>
        }
        return (
        <>
            <p>Welcome, {<strong>{this.props.name?this.props.name: 'user, type your name'}</strong>}!</p>
            {age}
        </>
        )
    }
}
function Age(props) {
    let ok = props.age >= 18;
        if(ok){
            let message = "Your age is,"
            return <>{message} {props.age}</>
        }if(!ok){
            let message = "You're to young"
            return <>{message}</>
        }
}