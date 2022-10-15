import React from "react";
import { LanguageContext } from "./languageContext";

const Lingue ={
    en:{traduzione:'Welcome'},
    it:{traduzione:'Benvenuto'},
}

export class DisplayLanguage extends React.Component{

    render(){
        return(
        <LanguageContext.Consumer>
            {(language) => {return (<h1>{Lingue[language].traduzione}</h1>)}}
        </LanguageContext.Consumer>)
    }
}