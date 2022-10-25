// import { useState} from "react"
import useSWR from "swr"

const fetchUser = (url) => fetch(url).then((response) => response.json())

export function useGithubUser(username){
    const {data, error} = useSWR(`https://api.github.com/users/${username}`, fetchUser)

    return{
        data,
        loading: !data && !error,
        error,
    }
}

//ho perso due ore a capire perché non funzionasse, ho controllato tutti i componenti che interagivano con lo username,
//ho provato a destrutturare, a correggere parentesi a destra e manca, controllare in console che dati arrivassero,
//e nulla, dopo due ore ho imparato che data è una parola obbligatoria nell'swr, avevo userData dal precedente esercizio e non printava