import React from "react";
import { CounterDisplay } from "./counterDisplay";

export class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {seconds: this.props.start}
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({seconds: this.state.seconds + this.props.add}) 
            }, this.props.timing);
        }

    render() {
        return <CounterDisplay state={this.state.seconds}/>
    }
}