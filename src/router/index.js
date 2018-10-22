import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/landingPage'
import Dashboard from '../components/dashboard/Dashboard.vue'
import aHeader from '../components/dashboard/layouts/headbar.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage
    },
    {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
            
            },
               ]
})
