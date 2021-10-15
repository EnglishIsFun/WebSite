import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },

  {
    path: '/forum',
    name: 'Forum',
    component: () => import(/* webpackChunkName: "forum" */ './views/Forum.vue')
  },

  {
    path: '/linksuteis',
    name: 'LinksUteis',
    component: () => import(/* webpackChunkName: "linksuteis" */ './views/LinksUteis.vue')
  },

  {
    path: '/jogos',
    name: 'Jogos',
    component: () => import(/* webpackChunkName: "jogos" */ './views/Jogos.vue')
  }


]

const router = new VueRouter({
  routes
})

export default router
