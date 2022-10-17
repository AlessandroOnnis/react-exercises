import { LanguageSelect } from "./languageContext";

export function Container(props) {
    return (
        <div className="container">
            <div className="container-title">{props.title}</div>
            <hr/>
            <LanguageSelect/>
            <div>{props.children}</div>
        </div>
    )
}