import { useCallback, useState } from "react";

export function useCounter(startAmount = 0){
    const [amount, setAmount] = useState(startAmount)

    const incremented = useCallback(function incremented(){
        setAmount(amount => amount +1)
    }, [])
    const decremented = useCallback(function decremented(){
        setAmount(amount => amount -1)
    }, [])
    const reset = useCallback(function reset(){
        setAmount(amount => amount *0)
    }, [startAmount])

    return{
        amount: amount,
        increment: incremented,
        decrement: decremented,
        reset: reset
    }
}