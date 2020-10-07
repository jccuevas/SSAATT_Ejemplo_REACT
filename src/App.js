import React, { Component } from 'react';
import './App.css';
import Title from './Title.js';
import Navigator from './Navigator.js'
import Main from './Main';
import Error from './Error'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      logged: false,
      error: false,
      message: "Error"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(order) {
    this.setState({ active: order });
    console.log("Pasado el evento " + order);
  }

  login = (user, pass) => {
    let loginData = {
      "user": user,
      "password": pass
    };
    let datos = JSON.stringify(loginData);
    const init = {
      method: "POST",
      mode: "cors",
      body: datos,
      headers: {
        'Content-Type': 'application/json'
      }

    }
    fetch("http://192.168.1.167:8083/login", init)
      .then((response) => {
        if (response.ok) {
          //HTTP 200 Ok
          console.log("Autenticado");
          this.setState({
            active: 2,
            logged: true,
            error: false
          });
          return response.text();
        } else {
          //Petición errónea
          console.log("Error");
          this.setState({
            error: true,
            message: "Error de autenticación"
          });
        }
      }).catch((error) => {
        console.log("Error");
        this.setState({
          error: true,
          message: "Error de conexión"
        });
      });


  }


  removeError() {
    console.log("Lanzado");
    this.setState({ error: false });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Prev "+prevState.error+" Nuevo "+this.state.error);
    if (prevState.error !== this.state.error && this.state.error===true) {
      console.log("Temporizador");
      this.errorTimeout = setTimeout(() => this.removeError(), 5000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.errorTimeout);
  }

  render() {
    const component_error = <Error message={this.state.message} show={true} />;

    return (
      <div className="App">

        <header className="App-header">
          <Title title="Práctica 4" />
        </header>
        <Navigator update={this.handleClick} logged={this.state.logged} />
        {this.state.error ? component_error : ""}
        <Main active={this.state.active} login={this.login} />


      </div>);
  }
}

export default App;
