import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        checkbox: false,
        disabled: true
    }
    info = (e) => {
        let userValue = e.target.value;
        let name = e.target.name
        let type = e.target.type
        let checked = e.target.checked
        this.setState({
            [name]: type === 'checkbox' ? checked : userValue
        })
        this.setState((state)=>{
            return {disabled: !this.state.username || !this.state.password}
        })
    }
    onLog = (state)=>{
        onLogin(this.state)
    }

    render() {
        return (
            <>
                <input name='username' value={this.state.username} onChange={this.info} />
                <input name='password' type='password' value={this.state.password} onChange={this.info} />
                <input name='checkbox' type='checkbox' checked={this.state.checkbox} onChange={this.info} />
                <button name="login" type="button" onClick={this.onLog} disabled={this.state.disabled}>login</button>
            </>
        )
    }
}

function onLogin(props) {
    let stato = {
        name: props.username,
        password: props.password,
        checkbox: props.checkbox
    }
    
    console.log(stato)
}