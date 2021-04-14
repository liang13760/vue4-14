import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/Home.vue'
import Users from '../components/User.vue'
import Role from '../components/Role.vue'
import Rights from '../components/Rights.vue'
import Categories from '../components/ccategories.vue'
import Params from '../components/Params.vue'
import Goodlist from '../components/List.vue'
import Add from '../components/Add.vue'
import Order from '../components/order.vue'
import reports from '../components/report.vue'
Vue.use(VueRouter)

 const routes=[
     {path:'/',redirect:'/login'},
        { path:'/login', component:Login },
        { path:'/home', component:Home,children:[
            { path:'/users', component:Users },
            {path:'/rights',component:Role},
            {path:'/roles',component:Rights},
            {path:'/categories',component:Categories},
            {path:'/params',component:Params},
            {path:'/goods',component:Goodlist},
            {path:'/add',component:Add},
            {path:'/orders',component:Order},
            {path:'/reports',component:reports}
        ] },
       
    ]
const router = new VueRouter({
    routes
})

router.beforeEach((to,from,next) => {
    if(to.path==='/login') return next();
    const tokenstr = window.sessionStorage.getItem('token');
    if(!tokenstr) return next('/login');
    next();
})

export default router