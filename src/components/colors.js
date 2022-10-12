import React from "react";

export class Colors extends React.Component {

    render() {
        return( 
            <ul>
                {this.props.colors.map((item) => (<li key={item[0]}>{item}</li>))}
            </ul>
        )
    }
}


//dato che lists-01 e 02 sono esterni agli esercizi da consegnare ho fatto un po' di testa mai,
//avevo fatto sul clickTracker l'object per passare id e key qui ho semplificato giusto per completare la task