import React, { Component } from 'react';
// import watcher from "../watcher"

class shopCar extends Component {

    state={
        list:[]
    }
    arr=[]
    componentDidMount(){
       
    }
 
    render() {
        return (
            <div>
                {
                    this.props.location.query.name
                }
            </div>
        );
    }
}

export default shopCar;