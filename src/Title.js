import React, {Component} from 'react';

class Title extends Component{
    render(){
        if(this.props.name){
        return(
            //<h1>{this.props.children}</h1>
            <h1>{this.props.title}</h1>
        );
        }else{
            return(
                //<h1>{this.props.children}</h1>
                <h1>FALSE</h1>
            );
        }
    }
}

export default Title;