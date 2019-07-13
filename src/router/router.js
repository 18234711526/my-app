import List from "../views/list"
import My from "../views/my"
import Order from "../views/order"
import ShopCar from "../views/shopCar"
import Xinde from "../components/xinde"
import Child1 from "../child/child1";
import Child2 from "../child/child2";
import Child3 from "../child/child3";
export const routers =[{
    path: "/list", component: List
}, {
    path: "/my", component: My,
        children:[{
            path: "/my/child1", component: Child1
        }, {
            path: "/my/child2", component: Child2
        }, {
            path: "/my/child3", component: Child3
        },{
            path: "/my", redirect:"/my/child3"
        }]
}, {
    path: "/order", component: Order
}, {
    path: "/shopCar", component: ShopCar,
        
}, {
    path: "/xinde", component: Xinde
    }, {
        path: "/", redirect: "/list"
    }, ]