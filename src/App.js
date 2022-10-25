import { Routes, Route, Link } from 'react-router-dom'
import { Welcome } from './components/welcome'
import { ClickCounter } from './components/clickCounter'
import { ShowGithubUser } from './components/ShowGithubUser'
import { GithubUserList } from './components/GithubUserList'

export function App() {

    const navigation = {
        color: 'white',
        border: '1px solid black',
        padding: 5,
        background: '#ff8214',
        borderRadius: 5,
    }
    const navigation2 = {
        color: 'white',
        border: '1px solid black',
        padding: 5,
        background: 'red',
        borderRadius: 5,
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', padding: 10, margin: 5, gap: 10 }}>
                <Link style={navigation} to={'/'}>Welcome</Link>
                <Link style={navigation} to={'counter'}>ClickCounter</Link>
                <Link style={navigation} to={'users'}>GithubUser</Link>
            </div>
            <Routes>
                <Route path="/" element={<Welcome name={'Alfio'} />} />
                <Route path="/counter" element={<ClickCounter />} />
                <Route path="/users" element={<GithubUserList />}>
                    <Route index 
                    element={
                        <h2 style={{width: '100%', height: 120, padding:25, color: 'green', textAlign:'center', border:'1px solid green', borderRadius: '15px', alignSelf:'center'}}>
                            <div>Add a user</div>
                            <div>&</div>
                            <div>select it</div>
                        </h2>}/>
                    <Route path=":username" element={<ShowGithubUser/>}/>
                </Route>
                <Route path="*" element={
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>Page not found
                        <Link to={'/'}>
                            <div style={navigation2}>Go back to Welcome</div>
                        </Link>
                    </div>} />
            </Routes>
        </>
    )
}