import {Routes, Route} from 'react-router-dom'
import { Welcome } from './components/welcome'

export function App(){

    return(
    <Routes>
        <Route path="/" element={<Welcome name={'Alfio'} />} />
    </Routes>
    )
}