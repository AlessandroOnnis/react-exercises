import React from "react";

export class GeneralButton extends React.Component {
    render() {
        return <button onClick={this.props.evento} type={this.props.type} disabled={this.props.disabled}>{this.props.name}</button>
    }
}


//ho deciso di volere un componente riutilizzabile ovunque, la traccia voleva bottoni normali, ma devo sperimentare:)