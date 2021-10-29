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
    path: '/atividadesdesaladeaula',
    name: 'AtividadesDeSalaDeAula',
    component: () => import(/* webpackChunkName: "atividadesdesaladeaula" */ './views/AtividadesDeSalaDeAula.vue')
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
