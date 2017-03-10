import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/Index/Index.vue'
import overview from '@/components/Overview/Overview.vue'
import projects from '@/components/Project/Projects.vue'
import project from '@/components/Project/ProjectDetail.vue'

import mobileapp from '@/components/MobileApp/MobileApp.vue'

Vue.use(Router)

const router = new Router({
  linkActiveClass:'active',
  routes:[
      {
        path: '/',
        redirect: '/home',
      },
      {
        path:'/home',
        component:index,
        meta:{
          title:'index'
        }
      },
      {
        path:'/overview',
        component:overview,
        meta:{
          title:'overview'
        }
      },
      {
        path:'/projects',
        component:projects,
        meta:{
          title:'project'
        }
      },
      {
        path:'/mobileapp',
        component:mobileapp,
        meta:{
          title:'mobileapp'
        }
      },
      {
        path:'/projects/:id',
        component:project,
        meta:{
          title:'project detail'
        }
      }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || ''
  next()
})

export default router
