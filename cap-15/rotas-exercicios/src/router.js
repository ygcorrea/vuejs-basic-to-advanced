import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
// import User from './components/user/User'
// import UserList from './components/user/UserList'
// import UserDetail from './components/user/UserDetail'
// import UserEdit from './components/user/UserEdit'
import Menu from "./components/template/Menu.vue";


Vue.use(Router)

const User = () => import(/* webpackChunkName:"user" */'./components/user/User') // lazy loading de components, carregados de forma tardia
const UserList = () => import(/* webpackChunkName:"user" */'./components/user/UserList') // lazy loading de components, carregados de forma tardia
const UserDetail = () => import(/* webpackChunkName:"user" */'./components/user/UserDetail') // lazy loading de components, carregados de forma tardia
const UserEdit = () => import(/* webpackChunkName:"user" */'./components/user/UserEdit') // lazy loading de components, carregados de forma tardia

const router = new Router({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            name: 'Home',
            path: '/',
            // component: Home
            components: {
                default: Home,
                menu: Menu
            }
        },
        {
            path: '/user',
            component: User,
            props: true,
            children: [
                { path: "", component: UserList },
                {
                    path: ":id", component: UserDetail, props: true,
                    beforeEnter: (to, from, next) => {
                        console.log('antes de entrar no componente -> dentro da rota children');
                        next()
                    }
                },
                { name: 'Edit', path: ":id/edit", component: UserEdit, props: true }
            ]
        },
        {
            path: 'redirect',
            redirect: '/user'
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log('antes de entrar no componente ->definido global');

    // to and from are both route objects. must call `next`.
    next()
})
export default router