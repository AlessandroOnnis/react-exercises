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
    componentDidUpdate(prevProps, prevState){
        if(this.state.seconds > 10){
            this.setState({seconds: this.props.start})
        }
    }

    render() {
        return <CounterDisplay state={this.state.seconds}/>
    }
}