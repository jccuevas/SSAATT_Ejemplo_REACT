import React, { Component } from 'react'
import './Navigator.css'

const menu = [{ "name": "Inicio", "link": "#" }, { "name": "Ayuda", "link": "#" }];



class Navigator extends Component {
    render() {
        let list = "";


/*
        for (let opcion of menu) {
            console.log("Menu :"+opcion.name);
            list += (<li><a href={opcion["link"]}>{opcion.name}</a></li>)
        }
*/

        return (
            
            <nav>
                <ul>
                    
                    <li><a href={menu[0].link}>{menu[0].name}</a></li>
                    <li><a href={menu[1].link}>{menu[1].name}</a></li>
                </ul>
                <div className="clearfix"></div>
            </nav>
            

        );



    }


}

export default Navigator;