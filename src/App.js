import React from 'react';
import { Hello } from './components/hello';
import { Counter } from './components/counter';
import { ClickCounter } from './components/clickCounter';
import { ClickTracker } from './components/clickTracker';
import { InteractiveWelcome } from './components/interactiveWelcome';
import { Login } from './components/login';

class App extends React.Component {
  render() {
    return (
    <div>
      <Hello/>
      <Counter start={0} timing={1000} add={1}/>
      <ClickCounter />
      <ClickTracker />
      <InteractiveWelcome />
      <Login />
    </div>
    )
  };
}
export default App;