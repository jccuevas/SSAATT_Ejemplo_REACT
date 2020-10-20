import React, { Component } from 'react'


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user:"",
            password:""
        }

        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log("<LOGIN> "+name+" "+value);
        this.setState({ [name]: value });

    }

    render() {
        return (
            <div>
                <form action="#" name="login">
                    <label htmlFor="input_user">Usuario:</label><input
                        id="input_user"
                        type="text"
                        name="user"
                        value={this.state.name}
                        onChange={this.handleChange}
                    /><br />
                    <label htmlFor="input_pass">Clave:</label><input
                        id="input_pass"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </form>
                <button onClick={() => this.props.login(document.forms.login.user.value, document.forms.login.password.value)}>Entrar</button>
            </div>
        );
    }
}

export default Login;