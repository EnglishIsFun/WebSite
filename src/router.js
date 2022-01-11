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
  },

  {
    path: '/Jogos/CacaPalavras-PastParticiple',
    name: 'CaçaPalavras-PastParticiple',
    component: () => import(/* webpackChunkName: "jogos" */ './views/Jogos/CacaPalavras-PastParticiple/CacaPalavras-PastParticiple.vue')
  },

  {
    path: '/Jogos/Cruzadinha-PresentSimple',
    name: 'Cruzadinha-PresentSimple',
    component: () => import(/* webpackChunkName: "jogos" */ './views/Jogos/Cruzadinha-PresentSimple/Cruzadinha-PresentSimple.vue')
  },

  {
    path: '/Jogos/Cruzadinha-SegundaGuerraMundial',
    name: 'Cruzadinha-SegundaGuerraMundial',
    component: () => import(/* webpackChunkName: "jogos" */ './views/Jogos/Cruzadinha-SegundaGuerraMundial/Cruzadinha-SegundaGuerraMundial.vue')
  },

  {
    path: '/Jogos/DesembaralharPalavras-PresentPerfect',
    name: 'DesembaralharPalavras-PresentPerfect',
    component: () => import(/* webpackChunkName: "jogos" */ './views/Jogos/DesembaralharPalavras-PresentPerfect/DesembaralharPalavras-PresentPerfect.vue')
  },

  {
    path: '/Jogos/DesembaralharPalavras-PresentPerfect',
    name: 'DesembaralharPalavras-PresentPerfect',
    component: () => import(/* webpackChunkName: "jogos" */ './views/Jogos/DesembaralharPalavras-PresentPerfect/DesembaralharPalavras-PresentPerfect.vue')
  },

  {
    path: '/Jogos/DesembaralharPalavras-WilleGoingTo',
    name: 'DesembaralharPalavras-WilleGoingTo',
    component: () => import(/* webpackChunkName: "jogos" */ './views/Jogos/DesembaralharPalavras-WilleGoingTo/DesembaralharPalavras-WilleGoingTo.vue')
  },

  {
    path: '/Jogos/JogodaForca',
    name: 'JogodaForca',
    component: () => import(/* webpackChunkName: "jogos" */ './views/Jogos/JogodaForca/JogodaForca.vue')
  },

  {
    path: '/Jogos/JogodaMemoria-Antonimos',
    name: 'JogodaMemória-Antonimos',
    component: () => import(/* webpackChunkName: "jogos" */ './views/Jogos/JogodaMemoria-Antonimos/JogodaMemoria-Antonimos.vue')
  },

  {
    path: '/Jogos/JogodaMemoria-SimplePresent',
    name: 'JogodaMemória-SimplePresent',
    component: () => import(/* webpackChunkName: "jogos" */ './views/Jogos/JogodaMemoria-SimplePresent/JogodaMemoria-SimplePresent.vue')
  },

  {
    path: '/jogos/JogodeLinkdePalavrasVocabulario',
    name: 'JogodeLinkdePalavrasVocabulario',
    component: () => import(/* webpackChunkName: "jogos" */ './views/Jogos/JogodeLinkdePalavrasVocabulario/JogodeLinkdePalavrasVocabulario.vue')
  },

  
  {
    path: '/jogos/Roleta-AdverbsofFrequency',
    name: 'Roleta-AdverbsofFrequency',
    component: () => import(/* webpackChunkName: "jogos" */ './views/Jogos/Roleta-AdverbsofFrequency/Roleta-AdverbsofFrequency.vue')
  }
  


]

const router = new VueRouter({
  routes
})

export default router
