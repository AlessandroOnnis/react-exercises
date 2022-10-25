// import { useState} from "react"
import useSWR, {mutate} from "swr"

const fetchUser = (url) => fetch(url).then((response) => response.json())

export function useGithubUser(username){
    const {data, error} = useSWR( username !== null && `https://api.github.com/users/${username}`, fetchUser)

    function refresh(){
        mutate()
    }

    return{
        data,
        loading: !data && !error,
        error,
        refresh
    }
}