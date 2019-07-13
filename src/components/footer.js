import React, { Component } from 'react';
import { NavLink} from "react-router-dom"
import watcher from "../watcher"
// import "../../public/fonts/iconfont.css"




class footer extends Component {

    state={
        count:0,
        arr:[]
    }

    componentDidMount() {
        watcher.subscribe("footer",(msg)=>{
            let arr = this.state.arr;
            arr.push(msg.obj);
            this.setState({
                count: msg.count,
                arr: arr
            });

            console.log(this.state.arr);
        })
    }




    render() {
        return (
            <div className="footer">
                {/* <span className="iconfont icon-wode"></span> */}
                <NavLink className="active" to="/list">菜单</NavLink>
                <NavLink className="active" to="/shopCar">购物车{this.state.count}</NavLink>
                <NavLink className="active" to="/order">订单</NavLink>
                <NavLink className="active" to="/my">我的</NavLink>
                <NavLink className="active" to="/xinde">新的</NavLink>
              
            </div>
        );
    }
}

export default footer;