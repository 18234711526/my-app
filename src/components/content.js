import React, { Component } from 'react';
// import { Route, Switch, Redirect } from "react-router-dom"
import { routers } from "../router/router"
import RouterView from "../router/routerView"
class content extends Component {
    


    render() {
        return (
            <div className="content">
                {/* <Switch>
                    {
                        routers.map((item, index) => {
                            return <Route key={index} path={item.path} component={item.component} />
                        })
                    }
                    <Redirect from="/" to="/list" />
                </Switch> */}
                <RouterView routers={routers}/>
            </div>
        );
    }
}

export default content;