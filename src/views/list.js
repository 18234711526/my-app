import React, { Component } from 'react';
import Item from "../components/item"
import watcher from "../watcher"
class list extends Component {
    state ={
        list: [{
            src: "./images/1.gif",
            title: "宫保鸡丁",
            price: "￥25.00",
            content: "宫保鸡丁来一份，两碗米饭，蛋花汤"
        }, {
                src: "./images/2.gif",
            title: "鱼香肉丝",
            price: "￥25.00",
            content: "鱼香肉丝来一份，两碗米饭，蛋花汤"
        }, {
                src: "./images/3.gif",
            title: "干煸肉丝",
            price: "￥25.00",
            content: "干煸肉丝来一份，两碗米饭，蛋花汤"
        }, {
                src: "./images/4.gif",
            title: "剁椒鱼头",
            price: "￥25.00",
            content: "剁椒鱼头来一份，两碗米饭，蛋花汤"
        }, {
                src: "./images/1.gif",
            title: "老北京烤鸭",
            price: "￥25.00",
            content: "老北京烤鸭来一份，两碗米饭，蛋花汤"
        }, {
                src: "./images/2.gif",
            title: "土豆烧牛肉 ",
            price: "￥25.00",
            content: "土豆烧牛肉 来一份，两碗米饭，蛋花汤"
        }],
        count:0
         
    }
    count =0
    add(obj) {
        
       this.count++

    //    console.log(this.count)
        watcher.publish("footer", { obj, count:this.count})
    }
    render() {
        return (
            <div className="mainBox">
                 {
                     this.state.list.map((item,index)=>{
                        return <Item key={index} {...item} oncount={this.add.bind(this)}></Item>
                     })
                 }
            </div>
        );
    }
}

export default list;