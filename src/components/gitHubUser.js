import { useGithubUser } from "./useGithubUser"
import { useEffect } from "react"

export function GithubUser ({username}){
    const {userData, fetchUser} = useGithubUser(username)
    
    useEffect(()=>{
        fetchUser(username)
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
        :<div className="error">Retry, something is gone wrong</div>
    )
}
