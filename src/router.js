import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Jobs from './views/Jobs.vue'
import JobDetail from './views/JobDetail'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: Jobs
    },
    {
      path: '/JobDetail',
      name: 'JobDetail',
      component: JobDetail
    },

  ]
})
