import React, { createContext } from "react";
import { DisplayLanguage } from "./displayLanguage";

export const LanguageContext = createContext('en')

export class LanguageSelect extends React.Component {
    state = {
        language: 'en'
    }

    changeLanguage = (e) => {
        this.setState({
            language: e.target.value
        })
    }
    render() {
        return (
            <div>
                <LanguageContext.Provider value={this.state.language}>
                    <select value={this.state.language} onChange={this.changeLanguage}>
                        <option value={'en'}>Inglese</option>
                        <option value={'it'}>Italiano</option>
                    </select>
                    <DisplayLanguage />
                </LanguageContext.Provider>
            </div>
        )
    }
}