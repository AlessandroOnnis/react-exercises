import React from "react";
import { LanguageContext } from "./languageContext";

export class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="container-title">{this.props.title}</div>
                <LanguageContext/>
                <hr/>
                <div>{this.props.children}</div>
            </div>
        )
    }
}