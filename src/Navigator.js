import React, { Component } from 'react'

const menu = [{ "name": "Inicio", "link": "#" }, { "name": "Ayuda", "link": "#" }]



class Navigator extends Component {
    render() {
        let list=null;
        for(let item of menu){
            list +=<li>{item.name}</li>
        }

        return(
            <nav>
                {list}
            </nav>



        );



    }


}

export default Navigator;