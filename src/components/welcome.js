import React from "react"
import { Age } from "./age"

export function Welcome(props){
    return(
        <>
            <p className ='welcome'>Welcome, <strong>{props.name ? props.name : 'nome di default'}</strong>!</p>
            {props.age <= 65 && props.name === 'John' && <Age age={props.age} />}
        </>
    )
}