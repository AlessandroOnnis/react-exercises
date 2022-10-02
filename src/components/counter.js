import React from "react";

export class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {seconds: this.props.start}
        
        setInterval(()=>{
            this.setState({seconds: this.state.seconds + this.props.add}) 
        }, this.props.timing);
    }

    render() {
        return <h1>{this.state.seconds}</h1>
    }
}