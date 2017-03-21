import Vue from 'vue'
import Router from 'vue-router'

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
        redirect: '/overview'
      },
      {
        path:'/overview',
        component:overview,
        meta:{
          title:'AngelEase'
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
        name:'project_detail',
        path:'/projects/:id',
        component:project
      }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title?to.meta.title:'AngelEase'
  next()
})

export default router
