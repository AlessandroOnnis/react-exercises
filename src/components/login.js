import React, { useState } from "react";
import { GeneralButton } from "./generalButton";

export function Login(){
    const[userData, setUserData] = useState({
        username: '',
        password: '',
        checkbox: false,
        disabled: true
    })
    function info(e){
        const {name, value, type, checked} = e.target
        setUserData(userData=>{
            return {
                ...userData,
                [name]: type === 'checkbox'?checked: value
            }
        })
    }
    function onLogin(){
        setUserData((userData) => {return {...userData}})
        console.log(userData)
    }
    function onReset(){
        setUserData((userData) => {
            return {
                ...userData,
                username: '',
                password: '',
                checkbox: false,
                disabled: true
            }
        })
    }
    const buttonLogin = {backgroundColor: userData.password.length < 8? 'red':'green'}
    return (
                
        <div>
            <input name='username' onChange={info} type='username' value={userData.username} placeholder="username"/>
            <input name='password' onChange={info} type='password' value={userData.password} placeholder="password"/>
            <input name='checkbox' onChange={info} type='checkbox' checked={userData.checkbox}/>
            <GeneralButton name="login" type="button" evento={onLogin} disabled={!userData.username || !userData.password} style={buttonLogin}/>
            <GeneralButton name="Reset" type="button" evento={onReset} disabled={!userData.username || !userData.password}/>
        </div>
    )
}