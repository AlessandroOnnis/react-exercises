import React from "react";
import { CounterButton } from "./counterButton";

export class ClickCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {amount: 0}
    }
    userInteraction = ((ev)=>{
        this.setState({amount: this.state.amount + 1})
    })

    render() {
        return (
            <div>
                <h2>Count : {this.state.amount}</h2>
                <CounterButton add={this.userInteraction}/>
            </div>
        );
    }
}