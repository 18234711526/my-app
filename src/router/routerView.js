import React, { Component } from 'react';
import { Switch, Route, Redirect} from "react-router-dom"

class routerView extends Component {

    render() {
        let {routers} = this.props;

        // 取出重定向
        let redirect =  routers.filter((item)=>{
            return item.redirect
        })
        // 设置重定向
        let itemRedirect = redirect.map((item,index)=>{
            return <Redirect key={index} path={item.path} to={item.redirect}/>
        })

        routers = routers.filter(item=>!item.redirect)


        return (
            <Switch>
                {
                    routers.map((item, index) => {
                        // component = { item.component }
                        return <Route key={index} path={item.path} render={(props)=>{
                            return <>
                                    {
                                    item.children &&<item.component children={item.children} />
                                    }
                                    {
                                    !item.children && <item.component/>
                                    }
                            </>
                        }} />
                    })
                }
                {itemRedirect.length !== 0 && itemRedirect}
                {/* <Redirect from="/" to="/list" /> */}
            </Switch>
        );
    }
}

export default routerView;