import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/pages/Register'
import Guide from '@/pages/Guide'
import Detail from '@/pages/Detail'
import CreateCert from '@/pages/CreateCert'
import Settings from '@/pages/Settings'
import Certificate from '@/pages/Certificate'
import Index from '@/pages/Index'
import Official from '@/pages/Official'
import Game from '@/pages/Game'
import List from '@/pages/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'official',
      component: Official,
      redirect:'/index',
      children:[
        {
          path: '/index',
          name: 'index',
          component: Index,
        },
        {
          path: '/list',
          name: 'list',
          component: List,
        }
      ]
    },

    {
      path: '/game',
      name: 'guide',
      component: Game,
      redirect:'/game/guide',
      children:[
        {
          path: '/game/guide',
          name: 'guide',
          component: Guide,
        },

        {
          path: '/game/register',
          name: 'register',
          component: Register,
        },

        {
          path: '/game/detail',
          name: 'detail',
          component: Detail
        },
        {
          path:'/game/createCert',
          name:'createCert',
          component: CreateCert
        },
        {
          path:'/game/settings',
          name:'settings',
          component: Settings
        },
        {
          path:'/game/certificate',
          name:'certificate',
          component: Certificate
        }
      ]
    },
    
  ],
  // linkActiveClass:'active'
})
