import React from "react";

export class CounterButton extends React.Component {
    render() {
        return <button onClick={this.props.evento}>{this.props.name}</button>
    }
}

//visto che mi serviva un button ho modificato quello precedente vorrei cambiare anche nome, è un problema?