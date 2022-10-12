import React from "react";
import { GeneralButton } from "./generalButton";

export class UncontrolledLogin extends React.Component{

    formSubmit = (e)=>{
        e.preventDefault()

        const username = e.target.elements.username.value
        const password = e.target.elements.password.value
        const checkbox = e.target.elements.checkbox.checked

        console.log({
            username,
            password,
            checkbox
        })
    }

    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <input name="username"></input>
                <input name="password" type='password'></input>
                <input name="checkbox" type='checkbox'></input>

                <GeneralButton name="login" type="submit"/>
                <GeneralButton name="reset" type="reset"/>
            </form>
        )
    }
}