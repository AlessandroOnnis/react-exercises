import React from "react";

export class GeneralButton extends React.Component {
    render() {
        return <button name={this.props.name} onClick={this.props.evento} type={this.props.type} disabled={this.props.disabled}>{this.props.name}</button>
    }
}