import React from 'react';
import { Hello } from './components/hello';
import { Welcome } from './components/welcome';

class App extends React.Component {
  render() {
    return (
    <div>
      <Hello/>
      <Welcome name={'John'} age={18}/>
    </div>
    )
  };
}
export default App;