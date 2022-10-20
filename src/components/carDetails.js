import { useState, useRef, useEffect } from "react"

export function CarDetails(){
    const [carData, setCarData] = useState({model:'panda', year:'1980', color:'arancio'})
    const inputRef = useRef()
    
    useEffect(()=>{
        setCarData(carData)
        console.log('started')
    },[])
    
	function typing() { 
		setCarData((carData)=>{
            return{
                ...carData,
                model: inputRef.current.elements.model.value,
                year: inputRef.current.elements.year.value,
                color: inputRef.current.elements.color.value
            }
        })
	}

    return(
        <div className="anotherForm">
        <form className="carForm" ref={inputRef} onChange={typing}>
            <h2>Describe your car</h2>
            <div className="carField">
                <label>Model </label>
                <input name="model" placeholder={carData.model}></input>
            </div>
            <div className="carField">
                <label>Year </label>
                <input name="year" placeholder={carData.year}></input>
            </div>
            <div className="carField">
                <label>Color </label>
                <input name="color" placeholder={carData.color}></input>
            </div>
        </form>
        </div>
    )
}