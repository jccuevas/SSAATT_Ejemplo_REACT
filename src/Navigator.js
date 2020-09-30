import React, { Component } from 'react'
import MenuItem from './MenuItem'
import './Navigator.css'

const menu = [{ "name": "Inicio", "link": "#" }, { "name": "Ayuda", "link": "#" }];



class Navigator extends Component {

    constructor(props) {
        super(props);
        this.state = { active: 0 }
    }

    handleClick(order) {

        this.setState({ active: order });
    }

    render() {
        return (

            <nav>
                <ul>
                    <li>
                        <MenuItem link={menu[0].link} onClick={()=>this.handleClick(0)} text={menu[0].name} order={0} active={this.state.active} />
                    </li>
                    <li>
                        <MenuItem link={menu[1].link} onClick={()=>this.handleClick(1)} text={menu[1].name} order={1} active={this.state.active} />
                    </li>
                </ul>
                <div className="clearfix"></div>
            </nav>


        );
    }
}

export default Navigator;