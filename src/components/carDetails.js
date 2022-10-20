import { useState, useRef, useEffect } from "react"

export function CarDetails(){
    const [carData, setCarData] = useState({model:'panda', year:'1980', color:'arancio'})
    const inputRef = useRef()
    
    useEffect(()=>{
        setCarData(carData)
        console.log('started')
    },[])
    // Perché se scritta così mi dice di impostare tutto come defaultValue?ora è diventato un placeholder
    //i valori entrano correttamente per cui 
    
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

	// function typing() {
	// 	const newCar = {
	// 		model: inputRef.current.elements.model.value,
	// 		year: inputRef.current.elements.year.value,
	// 		color: inputRef.current.elements.color.value
	// 	};
	// 	setCarData(newCar);
	// }
    
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