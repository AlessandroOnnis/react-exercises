import React from 'react';
import { Hello } from './components/hello';
import { Welcome } from './components/welcome';
const user = 'Giorgio'

class App extends React.Component {
  render() {
    return (
    <div>
      <Hello/>
      <Welcome name={user} age="18"/>
    </div>
    )
  };
}
export default App;