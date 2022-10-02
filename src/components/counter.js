import React from "react";

export class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {seconds: 0}
        
        setInterval(()=>{
            this.setState({seconds: this.state.seconds + 1}) 
        }, 1000);
    }

    render() {
        return <h1>{this.state.seconds}</h1>
    }
}