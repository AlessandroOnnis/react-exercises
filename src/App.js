import {Routes, Route} from 'react-router-dom'
import { Welcome } from './components/welcome'
import { ClickCounter } from './components/clickCounter'
import { ShowGithubUser } from './components/ShowGithubUser'

export function App(){

    return(
    <Routes>
        <Route path="/" element={<Welcome name={'Alfio'} />} />
        <Route path="counter" element={<ClickCounter/>} />
        <Route path="users/:username" element={<ShowGithubUser/>} />
    </Routes>
    )
}