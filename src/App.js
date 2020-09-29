import React, {Component} from 'react';import './App.css';
import Hello from './Hello.js';
import Navigator from './Navigator.js'

class App extends Component {
  render(){
    return(
    <div className="App">
      <Navigator></Navigator>
      <header className="App-header">
        <Hello text="hola"/>
              
        
      </header>
    </div>);
  }
}

export default App;
