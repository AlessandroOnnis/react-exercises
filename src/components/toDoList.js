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
            newItem: this._todoRef.current.value
        })

    }
    addList = (() => {
        const userInput = this._todoRef.current.value
        if(userInput !== ''){
            this.setState({newItem: userInput})
            this.state.items.push(this.state.newItem)
        }
    })

    render(){

        return(
            <>
            <ul>{this.state.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
            <input ref={this._todoRef} type={'text'}  onChange={this.userInput}></input>
            <GeneralButton evento={this.addList} name={'Add something'}/>
            </>
        )
    }
}