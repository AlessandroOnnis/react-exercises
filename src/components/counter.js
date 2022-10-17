import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./counterDisplay";

export function Counter(props) {
    const [seconds, setCounter] = useState(props.start)

    useEffect(()=>{
        setTimeout(()=> setCounter(seconds + props.add), props.timing)
        if(seconds > 10){setCounter(seconds * props.start)}
        return () => {}
    }, [seconds, props])

    const display ={
        color: seconds <= 5?'green':seconds <=8?'orange':'red',
        padding: 15,
        width: 30
    }
    return <CounterDisplay style={display} state={seconds}/>
}