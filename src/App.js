import React from 'react';
import { Hello } from './components/hello';
import { Counter } from './components/counter';
import { ClickCounter } from './components/clickCounter';
import { ClickTracker } from './components/clickTracker';
import { InteractiveWelcome } from './components/interactiveWelcome';
import { Login } from './components/login';
import { UncontrolledLogin } from './components/uncontrolledLogin';
import { Colors } from './components/colors';
import { TodoList } from './components/toDoList';
import { Container } from './components/container';
import { GeneralButton } from './components/generalButton';
import { Sum } from './components/sum';

class App extends React.Component {
    render() {
        return (
            <Container title="Random title in a random App">
                <Hello />
                <Counter start={0} timing={1000} add={1} />
                <ClickCounter />
                <ClickTracker />
                <InteractiveWelcome />
                <Login onLogin={(x) => { console.log(x) }} />
                <UncontrolledLogin onLogin={(x) => { console.log(x) }} />
                <Colors colors={['red', 'yellow', 'green']} />
                <TodoList>{(i, remove) => {
                    const task = i.map((item, index) =>
                        <li key={index}>
                            <GeneralButton evento={() => { remove(index) }} name={'remove'} key={index} />
                            {item}
                        </li>)
                    return <ul>{task}</ul>}}
                </TodoList>
                <Sum />
            </Container>
        )
    };
}
export default App;