import { useEffect, useState } from "react"

export function GithubUser ({username}){
    const [userData, setUser] = useState(null)

    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {return response.json()})
            .then(json => setUser(json)
            )
        }, [username])
    return (
        userData?
        <div>
            {<h3>The current user is {userData.name}</h3>}
            {<p>Location: {userData.location}</p>}
            {<p>Direct url: {userData.html_url}</p>}
        </div>
        :'there is nothing to see'
    )
}
