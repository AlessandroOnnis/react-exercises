import { GeneralButton } from "./generalButton";
import { useCounter } from "./useCounter";

export function ClickCounter({startAmount = 0}){
    const {amount, increment, decrement, reset} = useCounter(startAmount)
    return(
        <div className="clickCounter">
            <div className="clicksCounter">
                <GeneralButton className="buttonO" name="-" evento={decrement}/>
                <h2>Count : {amount}</h2>
                <GeneralButton className="buttonO" name="+" evento={increment}/>
            </div>
            <div>
                <GeneralButton className="buttonR" name="Reset Count" evento={reset}/>
            </div>
        </div>
    )
}