import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import List from '@/pages/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: Register,
    // },

    // {
    //   path: '/detail',
    //   name: 'detail',
    //   component: Detail
    // },
    // {
    //   path:'/createCert',
    //   name:'createCert',
    //   component: CreateCert
    // },
    // {
    //   path:'/settings',
    //   name:'settings',
    //   component: Settings
    // },
    // {
    //   path:'/certificate',
    //   name:'certificate',
    //   component: Certificate
    // }
    
  ],
  // linkActiveClass:'active'
})
