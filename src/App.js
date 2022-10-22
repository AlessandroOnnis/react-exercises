import {Routes, Route} from 'react-router-dom'
import { Welcome } from './components/welcome'
import { ClickCounter } from './components/clickCounter'

export function App(){

    return(
    <Routes>
        <Route path="/" element={<Welcome name={'Alfio'} />} />
        <Route path="counter" element={<ClickCounter/>} />
    </Routes>
    )
}