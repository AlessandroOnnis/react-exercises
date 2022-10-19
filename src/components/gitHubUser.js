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
        <div className="layoutGit">
            <div>
                <img src={userData.avatar_url}/>
            </div>
            <div>
                <h3 className="info">The current user is {userData.name}</h3>
                <p className="info">Location: {userData.location}</p>
                <p className="info">Direct url: {userData.html_url}</p>
            </div>
        </div>
        :'there is nothing to see'
    )
}
