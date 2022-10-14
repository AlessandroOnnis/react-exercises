import React, { createRef } from "react";
import { GeneralButton } from "./generalButton";

export class TodoList extends React.Component{
    _todoRef = createRef()

    constructor(props){
        super(props)
        this.state = {items:['myTask1', 'myTask2', 'myTask3', 'myTask4']}
    }
    userInput = () =>{
        this.setState({
            newItem: this._todoRef.current.value,
        })
    }

    addList = (() => {
        const userInput = this._todoRef.current.value
        if(userInput === '')return
        this.setState({newItem: userInput})
        this.state.items.push(this.state.newItem)
        this._todoRef.current.value = null
    })

    clearList = () => {
        this.setState({items:[]})
    }

    removeItem = (index) => {
        this.state.items.splice(index, 1)
        this.setState({items : this.state.items})
	}

    render(){

        return(
            <>
            <div>
                <h3>Your todo list</h3>
                <GeneralButton evento={this.addList} name={'Add something'}/>
                <GeneralButton evento={this.clearList} name={'Clear List'}/>
            </div>
            <input ref={this._todoRef} type={'text'} onChange={this.userInput} placeholder="Yout next Task"></input>
            <>{this.props.render(this.state.items, this.removeItem)}</>
            </>
        )
    }
}

//funziona ma devo rivederlo, non l'ho capito completamente e mi crea un po' di confusione