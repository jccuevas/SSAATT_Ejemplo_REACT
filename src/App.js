import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Hello from './Hello.js';

class App extends Component {
  render(){
    return(
    <div className="App">
      <header className="App-header">
        <Hello/>
        
          
        
      </header>
    </div>);
  }
}

export default App;
