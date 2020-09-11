import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import User from '@/components/User'
import phone from '@/components/helloComponents/phone'
import tablet from '@/components/helloComponents/tablet'
import computer from '@/components/helloComponents/computer'

Vue.use(Router)

const routes = [
  {
    path: '/Hello',
    name: 'HelloWorld',
    component: HelloWorld,
    children: [
      {
        path: 'phone',
        component: phone
      },
      {
        path: 'tablet',
        component: tablet
      },
      {
        path: 'computer',
        component: computer
      },
      {
        path: '',
        component: phone
      }
    ]
  },
  {
    path: '/List',
    name: 'List',
    component: List
  },
  {
    path: '/User/:id',
    name: 'User',
    component: User
  },
  {
    path: '/',
    redirect: '/Hello'
  }
]
const router = new Router({
  routes
})
export default router
