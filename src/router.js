import Vue from 'vue'
import Router from 'vue-router'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ForgotPassword from './Pages/ForgotPassword'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/forgotPassword',
            name: 'ForgotPassword',
            component: ForgotPassword
        }
    ]
})