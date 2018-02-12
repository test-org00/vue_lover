import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/pages/Register'
import Guide from '@/pages/Guide'
import Detail from '@/pages/Detail'
import CreateCert from '@/pages/CreateCert'
import Settings from '@/pages/Settings'
import Certificate from '@/pages/Certificate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'guide',
      component: Guide,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },

    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path:'/createCert',
      name:'createCert',
      component: CreateCert
    },
    {
      path:'/settings',
      name:'settings',
      component: Settings
    },
    {
      path:'/certificate',
      name:'certificate',
      component: Certificate
    }
    
  ],
  // linkActiveClass:'active'
})
