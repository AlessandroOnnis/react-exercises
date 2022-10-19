import { useState} from "react"

export function useGithubUser({username}){
    const [userData, setUser] = useState(null)

    async function fetchUser(username){
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            if(response.status !== 200){
                throw new Error('the fetch it\'s gone wrong!')
            }
            setUser(json)
        } catch (error) {
            return error
        }
        
    }
    return{
        userData,
        fetchUser
    }
}

//sto esercizio mi ha fatto sudare, destrutturavo userData qui e mi dava un 403