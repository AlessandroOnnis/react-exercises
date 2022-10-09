import React from 'react';
import { ClickCounter } from './components/clickCounter';
import { ClickTracker } from './components/clickTracker';
import { Counter } from './components/counter';
import { Hello } from './components/hello';
import { InteractiveWelcome } from './components/interactiveWelcome';
import { Login } from './components/login';
// const user = 'Jhon'

class App extends React.Component {
  render() {
    return (
    <div>
      <Hello/>
      <InteractiveWelcome/>
      <Counter start={0} timing={1000} add={1}/>
      <ClickCounter />
      <ClickTracker />
      <Login />
    </div>
    )
  };
}
export default App;