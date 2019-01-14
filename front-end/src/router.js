import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import ElemiInf from './views/T_elemiinf.vue'
import InfAlap from './views/T_infalap.vue'
import Szakmt from './views/T_szakm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/elemiinf',
      name: 'elemiinf',
      component: ElemiInf
    }, {
      path: '/infalap',
      name: 'infalap',
      component:InfAlap
    }, {
      path: '/szakm',
      name: 'szakm',
      component: Szakmt
    }
  ]
})
