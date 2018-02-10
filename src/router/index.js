import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/pages/Register'
import Guide from '@/pages/Guide'
import Detail from '@/pages/Detail'
// import Head from '@/components/Head'

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
    }
  ],
  // linkActiveClass:'active'
})
