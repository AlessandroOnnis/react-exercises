import React from 'react';
import { Hello } from './components/hello';
import { Welcome } from './components/welcome';
const user = 'Jhon'

class App extends React.Component {
  render() {
    return (
    <div>
      <Hello/>
      <Welcome name={user} age="20"/>
    </div>
    )
  };
}
export default App;