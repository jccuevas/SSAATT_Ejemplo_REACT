import React, {Component} from 'react'


class MenuItem extends Component{

    constructor(props){
        super(props);
        this.state={active:props.active}
    }

    render(){

        const active=(this.props.order===this.props.active)?(this.props.text+"*"):this.props.text;

        return(
        <a href={this.props.link} onClick={this.props.onClick}>{active}</a>
        );
    }
}

export default MenuItem;