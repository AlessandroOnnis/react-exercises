import { useState } from "react";

export function useCounter(startAmount = 0){
    const [amount, setAmount] = useState(startAmount)

    function incremented(){
        setAmount(amount => amount +1)
    }
    function decremented(){
        setAmount(amount => amount -1)
    }
    function reset(){
        setAmount(amount => amount *0)
    }

    return{
        amount: amount,
        increment: incremented,
        decrement: decremented,
        reset: reset
    }
}