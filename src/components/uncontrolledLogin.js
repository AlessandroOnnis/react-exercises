import React, { createRef } from 'react';
import { GeneralButton } from "./generalButton";

export class UncontrolledLogin extends React.Component{
    _formRef = createRef();

    infoUpdate = (e) => {
        e.name ==='checkbox' && e.preventDefault()

        const username = e.currentTarget.elements.username.value
        const password = e.currentTarget.elements.password.value

        this._formRef.current.elements.login.disabled = !username || !password
        this._formRef.current.elements.Reset.disabled = !username || !password
    }

    formSubmit = (e)=>{
        e.preventDefault()

        const userInfo = {
            username: e.target.elements.username.value,
            password: e.target.elements.password.value,
            checkbox: e.target.elements.checkbox.checked,
        }
        this.props.onLogin(userInfo)
    }

    render(){
        return(
            <form ref={this._formRef} onChange={this.infoUpdate} onSubmit={this.formSubmit}>
                <input name="username" autoFocus></input>
                <input name="password" type='password'></input>
                <input name="checkbox" type='checkbox'></input>

                <GeneralButton name="login" type="submit" disabled={ true } />
                <GeneralButton name="Reset" type="reset" disabled={ true } />
            </form>
        )
    }
}