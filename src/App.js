import React from 'react';
import { Counter } from './components/counter';
import { Counter2 } from './components/counter';
import { Hello } from './components/hello';
import { Welcome } from './components/welcome';
const user = 'Jhon'

class App extends React.Component {
  render() {
    return (
    <div>
      <Hello/>
      <Welcome name={user} age={20}/>
      <Counter />
    </div>
    )
  };
}
export default App;