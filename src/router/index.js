import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/Index/Index.vue'
import projects from '@/components/Project/Projects.vue'
import project from '@/components/Project/ProjectDetail.vue'
import mobileapp from '@/components/MobileApp/MobileApp.vue'

Vue.use(Router)

const router = new Router({
  linkActiveClass:'active',
  routes:[
      {
        path: '/',
        redirect: '/home'
      },
      {
        path:'/home',
        component:index,
        meta:{
          title:''
        }
      },
      {
        path:'/projects',
        component:projects,
        meta:{
          title:'Projects'
        }
      },
      {
        path:'/mobileapp',
        component:mobileapp,
        meta:{
          title:'MobileApp'
        }
      },
      {
        path:'/projects/:id',
        component:project,
        meta:{
          title:'Project Detail'
        }
      }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title?to.meta.title:'AngelEase'
  next()
})

export default router
