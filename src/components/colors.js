import React from "react";

export class Colors extends React.Component {

    render() {
        return( 
            <ul>
                {this.props.colors.map((item) => (<li>{item}</li>))}
            </ul>
        )
    }
}