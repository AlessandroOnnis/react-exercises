import { useGithubUser } from "./useGithubUser"

export function GithubUser ({username}){
    const {data, loading, error} = useGithubUser(username)
    
    return (
        <div>
        {loading && <p>Loading data...</p>}
        {error && <p>There is an error</p>}
        {data && <div className="layoutGit">
                        <div>
                            <img src={data.avatar_url}/>
                        </div>
                        <div>
                            <h3 className="info">The current user is {data.name}</h3>
                            <p className="info">Location: {data.location}</p>
                            <p className="info">Direct url: {data.html_url}</p>
                        </div>
                    </div>
                    }
        </div>
    )
}
