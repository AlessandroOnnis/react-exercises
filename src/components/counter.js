import React from "react";
import { CounterDisplay } from "./counterDisplay";

export class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {seconds: this.props.start}
    }
    componentDidMount(){
        this._interval = setInterval(()=>{
            this.setState({seconds: this.state.seconds + this.props.add }) 
            }, this.props.timing);
        }
    componentWillUnmount(){
        if(this._interval){
            clearInterval(this._interval)
        }
    }

    render() {
        return <CounterDisplay state={this.state.seconds}/>
    }
}