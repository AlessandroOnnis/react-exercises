import React from "react";
import { GeneralButton } from "./generalButton";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        checkbox: false,
        disabled: true
    }
    info = (e) => {
        let userValue = e.target.value;
        let userName = e.target.name
        let userType = e.target.type
        let userChecked = e.target.checked
        this.setState({
            [userName]: userType === 'checkbox' ? userChecked : userValue
        })
        this.setState((state)=>{
            return {disabled: !state.username || !state.password}
        })
    }
    onLogin= ()=>{ this.props.onLogin(this.state) }
    onReset = ()=>{
        this.setState({
            username:'',
            password:'',
            checkbox:false,
            disabled:true
        })
    }

    render() {
        const buttonLogin = {
            backgroundColor: this.state.password.length < 8? 'red':'green'
        }
        return (
            <div>
                <input name='username' placeholder="username" value={this.state.username} onChange={this.info} />
                <input name='password' placeholder="password" type='password' value={this.state.password} onChange={this.info} />
                <input name='checkbox' type='checkbox' checked={this.state.checkbox} onChange={this.info} />
                <GeneralButton name="login" type="button" evento={this.onLogin} disabled={this.state.disabled} style={buttonLogin}/>
                <GeneralButton name="Reset" type="button" evento={this.onReset} disabled={this.state.disabled}/>
            </div>
        )
    }
}