import React, { Component } from 'react'


class ExamList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        fetch("http://192.168.1.167:8083/exam")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((datos) => {
                for(let dato of datos){
                console.log(dato.title);
                }
                this.setState({ list: datos });
            })

    }

    render() {

       let list;

        for(let datos of this.state.list){
            console.log("-"+datos.title);
        list+=<li>{datos.title}</li>;
        }

        return (
            <div>
                
                <ul>  {list}</ul>
        
            </div>
        );
    }



}

export default ExamList;