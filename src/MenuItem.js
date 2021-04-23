import React, { Component } from 'react'


class MenuItem extends Component {


    render() {

        let active=<a className={"activa"} href={this.props.link} onClick={this.props.onClick}>{this.props.text}</a>;
        let notActive=<a href={this.props.link} onClick={this.props.onClick}>{this.props.text}</a>;
        if (this.props.order === this.props.active)
            return (
                <>
                {active}
                </>
            );
        else {
            return (
                <>
                {notActive}
                </>
            );
        }
    }
}

export default MenuItem;