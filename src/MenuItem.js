import React, { Component } from 'react'


class MenuItem extends Component {


    render() {

        if (this.props.order === this.props.active)
            return (
                <a className={"activa"} href={this.props.link} onClick={this.props.onClick}>{this.props.text}</a>
            );
        else {
            return (
                <a href={this.props.link} onClick={this.props.onClick}>{this.props.text}</a>
            );
        }
    }
}

export default MenuItem;