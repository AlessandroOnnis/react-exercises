import React, { createContext } from "react";
import { DisplayLanguage } from "./displayLanguage";

export const LinguaContext = createContext()//creazione context

export class LanguageContext extends React.Component {//componente che ha la funzione e che mostra il select ed il futuro display
    state = {
        language: 'en'
    }

    changeLanguage = (e) => {// funzione base che andrà a lavorare con tutti i consumer
        this.setState({
            language: e.target.value
        })
    }
    //questa traccia è veramente scritta male, spero di averla interpretata bene,
    //non ho capito a cosa servisse il DisplayLanguage se resta vuoto, è fuorviante
    render() {
        return (
            <div>
                <LinguaContext.Provider value={this.state.language}>
                    <select value={this.state.language} onChange={this.changeLanguage}>
                        <option value={'en'}>Inglese</option>
                        <option value={'it'}>Italiano</option>
                    </select>
                    <DisplayLanguage />
                </LinguaContext.Provider>
            </div>
        )
    }
}