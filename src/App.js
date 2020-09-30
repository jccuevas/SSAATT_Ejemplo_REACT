import React, { Component } from 'react';
import './App.css';
import Title from './Title.js';
import Navigator from './Navigator.js'
import Section from './Section';

class App extends Component {

  render() {
    return (
      <div className="App">
    
        <header className="App-header">
          <Title title="Práctica 4" name/>


        </header>
        <Navigator/>
        <main>
          <Section title="Inicio"/>
        </main>
      </div>);
  }
}

export default App;
