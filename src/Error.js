import React, { Component } from 'react'


class Error extends Component {

    componentDidMount() {
        console.log("Montado");

    }

    componentWillUnmount() {
        console.log("Desmontado");

    }



    render() {

            return (
                <div>
                    <span className="error">{this.props.message}</span>
                </div>
            );


    }
}

export default Error;