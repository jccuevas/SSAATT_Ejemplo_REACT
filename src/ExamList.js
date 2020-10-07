import React, { Component } from 'react'
import URL_REMOTE from './network';


class ExamList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        fetch(URL_REMOTE+"/exam")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((datos) => {
                for (let dato of datos) {
                    console.log(dato.title);
                }
                this.setState({ list: datos });
            })
    }

    render() {
        let list = [];

        for (let datos of this.state.list) {
            console.log("-" + datos.title);
            list.push(<li key={datos._id}><strong>{datos.title}</strong> {datos.repository}</li>);
        }

        return (
            <div>
                <ul>{list}</ul>
            </div>
        );
    }



}

export default ExamList;