import { useState} from "react"

export function useGithubUser({username}){
    const [userData, setUser] = useState(null)

    async function fetchUser(username){
        const response = await fetch(`https://api.github.com/users/${username}`)
        const json = await response.json()
        setUser(json)
    }
    return{
        userData,
        fetchUser
    }
}

//sto esercizio mi ha fatto sudare, destrutturavo userData qui e mi dava un 403