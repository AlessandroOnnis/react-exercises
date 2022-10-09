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
                <Welcome name={this.state.username} age={20}/>
                <input name='username' value={this.state.username}
                onChange={this.printName}/>
            </>
        )
    }
}