import React, { useState, createRef } from "react";
import { GeneralButton } from "./generalButton";

const _todoRef = createRef()

export function TodoList(props){
    const [task, setTask] = useState({
        items:['myTask1', 'myTask2', 'myTask3', 'myTask4']
    })

    function userInput(e){
        setTask({...task, newItem: e.current})
    }

    function addList(){
        // const newItem = 
        if(_todoRef.current.value === '')return
        setTask({...task, newItem: _todoRef.current.value})
        task.items.push(_todoRef.current.value)
        _todoRef.current.value = null  //perché se qui piazzo newItem = null si rompe?
    }

    function clearList(){
        setTask((task) => {return{...task, items:[]}})
    }

    function removeItem(index){
        task.items.splice(index, 1)
        setTask({...task,items: task.items})
	}

    return(
        <>
            <div>
                <h3>Your todo list</h3>
                <GeneralButton evento={addList} name={'Add something'} />
                <GeneralButton evento={clearList} name={'Clear List'}/>
            </div>
            <input ref={_todoRef} type={'text'} onChange={userInput} placeholder="Yout next Task"></input>
            <>{props.children(task.items, removeItem)}</>
        </>
    )
}