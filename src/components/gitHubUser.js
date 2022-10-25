import { GeneralButton } from "./generalButton"
import { useGithubUser } from "./useGithubUser"

export function GithubUser ({username}){
    const {data, loading, error, refresh} = useGithubUser(username)
    
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
                        <GeneralButton style={{border: '1px solid black', background:'blue', color:'white', borderRadius: 3, padding:15}} name={'Refresh'} evento={refresh}/>
                    </div>
                    }
        </div>
    )
}
