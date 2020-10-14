import React, { Component } from 'react'

const styleDialog = {
    "position": "absolute",
    "left": "10px",
    "top":"50px",
    "z-index": "10",
    "background-color":"lightgray",
    "padding":"25px"

};

class Dialog extends Component {

    render() {
        return (
            <div style={styleDialog}>
                <section >
                    <h2>Hola</h2>
                </section>
            </div>

        );
    }



}

export default Dialog;