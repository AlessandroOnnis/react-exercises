import React from "react";
import { Welcome } from "./welcome";


export class InteractiveWelcome extends React.Component{
    state = {
        username:''
    }
    printName = (e) =>{
        let userValue = e.target.value;
        this.setState({
            username: userValue
        })
    }

    render(){
        return(
            <>
                <input name='username' value={this.state.username}
                onChange={this.printName} placeholder={'Type your name'}/>
                <Welcome name={this.state.username} age={20}/>
            </>
        )
    }
}