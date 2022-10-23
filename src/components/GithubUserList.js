import { useState, createRef, useEffect } from "react"
import { GeneralButton } from "./generalButton"
import { GithubUser } from "./gitHubUser"
import { Link, Outlet } from "react-router-dom"

const _userRef = createRef()

export function GithubUserList(props) {
    const [userList, setList] = useState({
        user: []
    })

    useEffect(() => {
        if (userList) { return (m) => console.log('mounted') }
    }, [])

    function searchUser(e) {
        setList({ ...userList, newUser: e.current })
    }
    function addUser() {
        if (userList.user.includes(_userRef.current.value)) return
        if (_userRef.current.value === '') return
        setList({ ...userList, newUser: _userRef.current.value })
        userList.user.push(_userRef.current.value)
        _userRef.current.value = null
    }

    function clearList() {
        setList((user) => { return { ...user, user: [] } })
    }

    function removeItem(index) {
        userList.user.splice(index, 1)
        setList({ ...userList, user: userList.user })
    }

    return (
        <div>
            <div className="github">
                <h1>Github Users</h1>
                <input ref={_userRef} type={'text'} onChange={searchUser} placeholder="Search User"></input>
                <div>
                    <GeneralButton className="button" evento={addUser} name={'Add result'} />
                    <GeneralButton className="button" evento={clearList} name={'Clear List'} />
                </div>
            </div>
            <div style={{display:'flex', justifyContent: 'space-between', width:1200, gap:25}}>
                <ul className="githubList">{userList.user.map((item, index) =>
                    <li key={index} className='githubItems'>
                        <GeneralButton className="buttonX" evento={() => removeItem(index)} name={'x'} key={index} />
                        <Link style={{marginLeft: 10, color:'blue', fontSize: '2rem'}} to={item}>
                            <p>Click to see the full profile <span style={{color: 'red'}}>{item}</span></p>
                        </Link>
                    </li>
                )}
                </ul>
                <Outlet />
            </div>
        </div>
    )
}