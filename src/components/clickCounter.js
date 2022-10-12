import React from "react";
import { GeneralButton } from "./generalButton";

export class ClickCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {amount: 0}
    }
    userInteraction = (()=>{
        this.setState({amount: this.state.amount + 1})
    })

    render() {
        return (
            <div>
                <h2>Count : {this.state.amount}</h2>
                <GeneralButton name="plus" evento={this.userInteraction}/>
            </div>
        );
    }
}