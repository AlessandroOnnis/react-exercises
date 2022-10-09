import React from 'react';
import { ClickCounter } from './components/clickCounter';
import { ClickTracker } from './components/clickTracker';
import { Counter } from './components/counter';
import { Hello } from './components/hello';
// import { Welcome } from './components/welcome';
import { InteractiveWelcome } from './components/interactiveWelcome';
// const user = 'Jhon'

class App extends React.Component {
  render() {
    return (
    <div>
      <Hello/>
      {/* <Welcome name={user} age={20}/> */}
      <Counter start={0} timing={1000} add={1}/>
      <ClickCounter />
      <ClickTracker />
      <InteractiveWelcome/>
    </div>
    )
  };
}
export default App;