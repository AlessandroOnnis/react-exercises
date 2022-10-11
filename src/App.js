import React from 'react';
import { Hello } from './components/hello';
import { Welcome } from './components/welcome';
import { Counter } from './components/counter';
import { ClickCounter } from './components/clickCounter';
import { ClickTracker } from './components/clickTracker';

class App extends React.Component {
  render() {
    return (
    <div>
      <Hello/>
      <Welcome name={'John'} age={18}/>
      <Counter start={0} timing={1000} add={1}/>
      <ClickCounter />
      <ClickTracker />
    </div>
    )
  };
}
export default App;