import { useState } from "react"

export function useFormTrack(){
    
    const[userData, setUserData] = useState({
        username: '',
        password: '',
    })
    function info(e){
        const {name, value} = e.target
        setUserData(userData=>{
            return {...userData, [name]: value}
        }, [userData])
    }

    return{
        ...userData,
        info
    }
}  
//ho fatto il track su formControlledTracked (a breve avrò più form che codice) :D