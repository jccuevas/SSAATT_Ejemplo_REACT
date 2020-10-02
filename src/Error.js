import React, { Component } from 'react'


class Error extends Component {

    render() {
        return (
            <div>
                <span className="error">{this.props.message}</span>
            </div>
        );
    }
}

export default Error;