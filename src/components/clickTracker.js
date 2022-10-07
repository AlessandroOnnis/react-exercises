import React from "react";

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
                    <MyButton key={item.nome} name={item.nome} track={this.track}/>
                ))
            }
                <h1>{this.state.contenuto}</h1>
            </>
        )
    }
}

function MyButton(props){
    return <button onClick={props.track}>{props.name}</button>
}