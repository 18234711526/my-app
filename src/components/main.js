import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom" 

import Header from "./header"
import Footer from "./footer"
import Content from "./content"
class main extends Component {

    constructor(props) {
        super(props);
        this.state={
            list:[{
                src:"",
                title:"宫保鸡丁",
                price :"￥25.00",
                content:"宫保鸡丁来一份，两碗米饭，蛋花汤"
            }, {
                    src: "",
                    title: "鱼香肉丝",
                    price: "￥25.00",
                    content: "鱼香肉丝来一份，两碗米饭，蛋花汤"
                }, {
                    src: "",
                    title: "干煸肉丝",
                    price: "￥25.00",
                    content: "干煸肉丝来一份，两碗米饭，蛋花汤"
                }, {
                    src: "",
                    title: "剁椒鱼头",
                    price: "￥25.00",
                    content: "剁椒鱼头来一份，两碗米饭，蛋花汤"
                }, {
                    src: "",
                    title: "老北京烤鸭",
                    price: "￥25.00",
                    content: "老北京烤鸭来一份，两碗米饭，蛋花汤"
                }, {
                    src: "",
                    title: "土豆烧牛肉 ",
                    price: "￥25.00",
                    content: "土豆烧牛肉 来一份，两碗米饭，蛋花汤"
                }]
        }
    }
    

    render() {
        return (
            <Router>
                <div className="wrap">
                    <Header/>  
                    <Content/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default main;