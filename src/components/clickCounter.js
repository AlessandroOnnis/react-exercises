import React, { useState } from "react";
import { GeneralButton } from "./generalButton";

export function ClickCounter({startAmount = 0}){
    const [amount, setAmount] = useState(startAmount)

    function userInteraction(){
        setAmount(amount => amount +1 )
    }
    
    return(
        <div>
            <h2>Count : {amount}</h2>
            <GeneralButton name="plus" evento={userInteraction}/>
        </div>
    )
}