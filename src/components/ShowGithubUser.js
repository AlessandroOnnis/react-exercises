import { useParams } from "react-router-dom";
import { GithubUser } from "./gitHubUser";

export function ShowGithubUser(){
    const {username} = useParams()

    return <GithubUser username={username}/>
}