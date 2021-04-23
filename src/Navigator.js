import React, { Component } from "react";
import MenuItem from "./MenuItem";
import "./Navigator.css";

const menu = [
  { name: "Inicio", link: "#" },
  { name: "Ayuda", link: "#" },
  { name: "Nuevo", link: "#" },
  { name: "Listar", link: "#" },
];

class Navigator extends Component {
  constructor(props) {
    super(props);
    console.log("-Navigator-Active:"+props.active);
    this.state = {
      active: props.active,
      logged: false,
    };
  }

  handleClick(order) {
    this.setState({ active: order });
    this.props.update(order);
  }



  render() {
      console.log("Active: "+this.props.active+" Estado:"+this.state.active);
    let activeMenu;
    if (!this.props.logged) {
      activeMenu = (
        <ul>
          <li>
            <MenuItem
              link={menu[0].link}
              onClick={() => this.handleClick(0)}
              text={menu[0].name}
              order={0}
              active={this.props.active}
            />
          </li>
          <li>
            <MenuItem
              link={menu[1].link}
              onClick={() => this.handleClick(1)}
              text={menu[1].name}
              order={1}
              active={this.props.active}
            />
          </li>
        </ul>
      );
    } else {
      activeMenu = (
        <ul>
          <li>
            <MenuItem
              link={menu[2].link}
              onClick={() => this.handleClick(2)}
              text={menu[2].name}
              order={2}
              active={this.props.active}
            />
          </li>
          <li>
            <MenuItem
              link={menu[3].link}
              onClick={() => this.handleClick(3)}
              text={menu[3].name}
              order={3}
              active={this.props.active}
            />
          </li>
          <li>
            <MenuItem
              link={menu[1].link}
              onClick={() => this.handleClick(1)}
              text={menu[1].name}
              order={1}
              active={this.props.active}
            />
          </li>
        </ul>
      );
    }
    return (
      <nav>
        {activeMenu}
        {this.props.logged ? <button>Desconectar</button> : <div></div>}
        <div className="clearfix"></div>
      </nav>
    );
  }
}

export default Navigator;
