import Vue from 'vue'
import Router from 'vue-router'
// import Register from '@/pages/Register'
// import Guide from '@/pages/Guide'
// import Detail from '@/pages/Detail'
// import CreateCert from '@/pages/CreateCert'
// import Settings from '@/pages/Settings'
// import Certificate from '@/pages/Certificate'
import Index from '@/pages/Index'

// import Official from '@/pages/Official'
// import List from '@/pages/List'
// import Unsupport from '@/pages/Unsupport'
// import GetMetaMask from '@/pages/GetMetaMask'
// import InstalledMetaMask from '@/pages/InstalledMetaMask'
// import Locked from '@/pages/Locked'
// import store from '../../store'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'official',
      component:  resolve => require(['@/pages/Official.vue'], resolve),
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
          component:  resolve => require(['@/pages/List.vue'], resolve),
        },
        {
          path: '/unsupport',
          name: 'unsupport',
          component:  resolve => require(['@/pages/Unsupport.vue'], resolve),
        },
        {
          path: '/getMetaMask',
          name: 'getMetaMask',
          component:  resolve => require(['@/pages/GetMetaMask.vue'], resolve),
        },
        {
          path: '/installedMetaMask',
          name: 'installedMetaMask',
          component:  resolve => require(['@/pages/InstalledMetaMask.vue'], resolve),
        },
        {
          path: '/locked',
          name: 'locked',
          component:  resolve => require(['@/pages/Locked.vue'], resolve),
        },
 
        // {
        //   path: '/game/guide' ,
        //   name: 'guide',
        //   component:  resolve => require(['@/pages/Guide.vue'], resolve),
        // },

        {
          path: '/game/register',
          name: 'register',
          component:  resolve => require(['@/pages/Register.vue'], resolve),
        },

        {
          path: '/game/detail',
          name: 'detail',
          component:  resolve => require(['@/pages/Detail.vue'], resolve)
        },
        {
          path:'/game/createCert',
          name:'createCert',
          component:  resolve => require(['@/pages/CreateCert.vue'], resolve)
        },
        {
          path:'/game/settings',
          name:'settings',
          component:  resolve => require(['@/pages/Settings.vue'], resolve)
        },
        {
          path:'/game/certificate',
          name:'certificate',
          component:  resolve => require(['@/pages/Certificate.vue'], resolve),
        }
      ]
    },
    
  ],
  // linkActiveClass:'active'
})

// router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
  // router.app.$store.dispatch('setCreatePop',true);
  // console.log('router',router.app.$options.store().dispatch('setCreatePop',true));
  // console.log('router',store);
  // console.log('router2',this.$router);
        
  // next(vm => {
  //   console.log('router',vm)
  // })
// })

export default router
