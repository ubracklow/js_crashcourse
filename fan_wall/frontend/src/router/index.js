import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue')
  },
  {
    path: '/event/:id',
    name: 'event',
    component: () => import(/* webpackChunkName: "event" */ '../views/Event.vue')
  },
  {
    path: '/walls',
    name: 'walls',
    component: () => import(/* webpackChunkName: "walls" */ '../views/Walls.vue')
  },
  {
    path: '/wall/:id',
    name: 'wall',
    component: () => import(/* webpackChunkName: "wall" */ '../views/Wall.vue')
  },
  {
    path: '/fans',
    name: 'fans',
    component: () => import(/* webpackChunkName: "fans" */ '../views/Fans.vue')
  },
  {
    path: '/fan/:id',
    name: 'fan',
    component: () => import(/* webpackChunkName: "fans" */ '../views/Fan.vue'), 
    props: true
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
