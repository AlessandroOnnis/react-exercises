import React from 'react';
import { Hello } from './components/hello';
import { Welcome } from './components/welcome';
import { Counter } from './components/counter';

class App extends React.Component {
  render() {
    return (
    <div>
      <Hello/>
      <Welcome name={'John'} age={18}/>
      <Counter />
    </div>
    )
  };
}
export default App;