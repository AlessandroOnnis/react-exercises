import React from "react";
import { CounterButton } from "./counterButton";

export class ClickTracker extends React.Component{
    constructor(props){
        super(props)
        this.state = {contenuto: ''}
    }
    track = ((event) => {
        this.setState({contenuto: event.target.innerHTML})
    })
    render(){
        const buttons = [
            {nome:'Click'},
            {nome:'Clack'},
            {nome:'Clock'}
        ]
        return(
            <>
            {
                buttons.map((item) => (
                    <CounterButton key={item.nome} name={item.nome} evento={this.track}/>
                ))
            }
                <h1>{this.state.contenuto}</h1>
            </>
        )
    }
}