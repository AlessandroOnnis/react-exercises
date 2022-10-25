// import { useState} from "react"
import useSWR from "swr"

const fetchUser = (url) => fetch(url).then((response) => response.json())

export function useGithubUser(username){
    const {data, error} = useSWR( username !== null && `https://api.github.com/users/${username}`, fetchUser)

    return{
        data,
        loading: !data && !error,
        error,
    }
}
//facevo già il controllo dell'username su githubUserList che ha più senso visto che il nome non entra proprio in circolo