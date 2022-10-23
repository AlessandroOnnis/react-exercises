import { useParams, Link } from "react-router-dom";
import { GithubUser } from "./gitHubUser";

export function ShowGithubUser() {
    const { username } = useParams()

    return (
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
            <GithubUser username={username} />
            <Link style={{border: '1px solid black', background:'red', color:'white', borderRadius: 3, padding:5}} to={'/users'} >Close Profile</Link>
        </div>)
}