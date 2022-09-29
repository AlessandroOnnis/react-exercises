import React from 'react';
import { Hello } from './components/hello';
import { Welcome } from './components/welcome';
const user = 'Giorgio'

class App extends React.Component {
  render() {
    return (
    <div>
      <Hello/>
      <Welcome name={user} age=""/>
    </div>
    )
  };
}
export default App;