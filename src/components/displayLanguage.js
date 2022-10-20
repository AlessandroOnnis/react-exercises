import { useContext } from "react";
import { LanguageContext } from "./languageContext";

const Lingue ={
    en:{traduzione:'Welcome'},
    it:{traduzione:'Benvenuto'},
}

export function DisplayLanguage (){
    const language = useContext(LanguageContext)
    return <h1>{Lingue[language].traduzione}</h1>
}