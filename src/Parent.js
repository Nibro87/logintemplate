import React, { useState, Component} from 'react';
import ChildComponent from "./Child"

class Parent extends Component {

constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

modifyMessage= (data) => {
      this.setState({message: data[0]})
}

 render() {
        return (
            <div>
                 <ChildComponent parentCallback = {this.modifyMessage}/>
                 <h1> {this.state.message} </h1>
            </div>
        );
    }
}
export default Parent;