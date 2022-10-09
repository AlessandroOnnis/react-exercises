import React from "react";

export class Login extends React.Component{
    state = {
        username:'',
        password:'',
        checkbox:''
    }
    info = (e) =>{
        let userValue = e.target.value;
        let name = e.target.name
        let type = e.target.type
        let checked = e.target.checked
        this.setState({
            [name]: type === 'checkbox'?checked:userValue
        })
    }

    render(){
        return(
            <>
                <input name='username' value={this.state.username}onChange={this.info}/>
                <input name='password' type='password' value={this.state.password}onChange={this.info}/>
                <input name='checkbox' type='checkbox' checked={this.state.checkbox}onChange={this.info}/>
            </>
        )
    }
}