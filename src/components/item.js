import React, { Component } from 'react';
// import watcher from "../watcher"
class item extends Component {
    constructor(props) {
        super(props);
        this.state={
            list:[]
        }
     
    }
    
    render() {
        return (
            <div className="item">
                <div className="left">
                    <img src={this.props.src} alt=""/>
                </div>
                <div className="right">
                    <button onClick={()=>{
                        this.props.oncount(this.props)
                    }}>来一份</button>
                    <p>{this.props.title}</p>
                    <p>{this.props.content}</p>
                    <p>{this.props.price}</p>
                </div>
            </div>
        );
    }
}

export default item;