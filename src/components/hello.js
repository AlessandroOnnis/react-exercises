import React from "react";

export class Hello extends React.Component {
    render() {
        return <>
                <h1>Hello, world!</h1>
                <Message />
               </>
    }
}

function Message(){
    return <p>What a beautiful day!</p>
}