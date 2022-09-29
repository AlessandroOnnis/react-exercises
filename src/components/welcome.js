import React from "react"

//===Esecuzione esercizio===setting default value
export class Welcome extends React.Component{
    render(){
        return <p>Welcome, {this.props.name?this.props.name: 'nome di default'}!</p>
    }
}
//RISPOSTE
//se l'attributo non viene assegnato non viene stampato il valore di this.props.name perché non esiste.
//se manca il valore dell'attributo si può impostare il suo valore di default, 
//Nel caso non esista l'attributo su App.js, possiamo assegnarlo di default(riga 28).

//===Nota Personale===setting default attribute(non deve essere assegnato dentro app.js)
//Devo ricordarmi potrebbe essermi utile in futuro con alcuni componenti
// export class Welcome extends React.Component {
//     render() {
//         return (
//             <>{
//                 this.props.name ?
//                     <p>Welcome, {this.props.name}!</p>
//                     : <p>Welcome, {Welcome.defaultProps.name}!</p>
//             }
//             </>
//         )
//     }
// }

// Welcome.defaultProps = {
//     name: "chiunque tu sia",
// }

//===Nota Personale===setting default string if attribute it's missing
// export class Welcome extends React.Component{
//     render(){
//         return(
//         <>
//          {this.props.name?
//          <p>Welcome, {this.props.name}!</p>
//          :<p>Welcome, chiunque tu sia!</p>}
//         </>
//         )
//     }
// }