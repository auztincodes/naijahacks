import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/landingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage
    }
  ]
})
