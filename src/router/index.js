import Vue from 'vue'
import Router from 'vue-router'
/*
Import pages
*/
import MapPage from '@/pages/MapPage'
import AdminPage from '@/pages/AdminPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: {
        name: 'map'
      }
    },
    {
      path: '/',
      name: 'map',
      component: MapPage
    },
    {
      path: '/manage',
      name: 'admin',
      component: AdminPage
    }
  ]
})
