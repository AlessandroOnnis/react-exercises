import { useFormTrack } from "./useFormTrack";

export function FormControlledTracked(){
    const{userData, info} = useFormTrack()

    return (
        <div>
            <input name='username' onChange={info} type='username' value={userData} placeholder="username"/>
            <input name='password' onChange={info} type='password' value={userData} placeholder="password"/>
        </div>
    )
}