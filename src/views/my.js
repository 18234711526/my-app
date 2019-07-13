import React, { Component } from 'react';
import {NavLink
    // Route,Switch
} from "react-router-dom"
// import Child1 from "../child/child1";
// import Child2 from "../child/child2";
// import Child3 from "../child/child3";
// import { routers } from "../router/router"
import RouterView from "../router/routerView"
class my extends Component {
    render() {

        return (
            <div>
                <NavLink to="/my/child1"> child1</NavLink>
                <NavLink to="/my/child2"> child2</NavLink>
                <NavLink to="/my/child3"> child3</NavLink>
                {/* <Switch>
                    <Route path="/my/child1" component={Child1}/>
                    <Route path="/my/child2" component={Child2} />
                    <Route path="/my/child3" component={Child3} />
                </Switch> */}
                <RouterView routers={this.props.children} />
            </div>
        );
    }
}

export default my;