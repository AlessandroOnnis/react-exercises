// import { useState} from "react"
import useSWR from "swr"

export function useGithubUser(username){
    const {data, error, mutate} = useSWR( username !== null && `https://api.github.com/users/${username}`)

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