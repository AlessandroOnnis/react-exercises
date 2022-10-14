import React from "react";

export class Container extends React.Component{
    render(){
        return <div className="container">{this.props.children}</div>
    }
}

//come ho tempo vedrò senza dubbio tailwind e bootstrap, mi interessa più tailwind