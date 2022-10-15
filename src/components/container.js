import React from "react";
import { LanguageSelect } from "./languageContext";

export class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="container-title">{this.props.title}</div>
                <hr/>
                <LanguageSelect/>
                <div>{this.props.children}</div>
            </div>
        )
    }
}