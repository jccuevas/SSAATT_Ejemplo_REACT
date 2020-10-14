import React, { Component } from 'react'


class Login extends Component {

    render() {
        return (
            <div>
                <form action="#" name="login">
                    <label htmlFor="input_user">Usuario:</label><input
                        id="input_user"
                        type="text"
                        name="user"
                    /><br/>
                    <label htmlFor="input_pass">Clave:</label><input
                        id="input_pass"
                        type="password"
                        name="password"
                    />
                </form>
                <button onClick={() => this.props.login(document.forms.login.user.value,document.forms.login.password.value)}>Entrar</button>
            </div>
        );
    }
}

export default Login;