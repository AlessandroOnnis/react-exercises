import { Routes, Route, Link } from 'react-router-dom'
import { Welcome } from './components/welcome'
import { ClickCounter } from './components/clickCounter'
import { ShowGithubUser } from './components/ShowGithubUser'
import React from 'react'

export function App() {

    const navigation={
        color: 'white',
        border: '1px solid black',
        padding: 5,
        background: '#ff8214',
        borderRadius: 5,
    }
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', padding: 10, margin: 5, gap: 10}}>
                <Link style={navigation} to={'/'}>Welcome</Link>
                <Link style={navigation} to={'counter'}>ClickCounter</Link>
                <Link style={navigation} to={'users/ddd'}>GithubUser</Link>
            </div>
            <Routes>
                <Route path="/" element={<Welcome name={'Alfio'} />} />
                <Route path="counter" element={<ClickCounter />} />
                <Route path="users/:username" element={<ShowGithubUser />} />
            </Routes>
        </>
    )
}