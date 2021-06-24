import Vue from 'vue'
import Router from 'vue-router'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes : [
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
            path: '/forgot',
            name: 'ForgotPassword',
            component: ForgotPassword
        },
        {
            path: '/reset',
            name: 'ResetPassword',
            component: ResetPassword
        }
    ]
})