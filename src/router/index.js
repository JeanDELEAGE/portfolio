import Vue from 'vue'
import Router from 'vue-router'

import Accueil from '@/components/Accueil'
import Projet from '@/components/Projet'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',                name: 'Accueil',              component: Accueil } ,
    { path: '/projet',          name: 'Projet',                component: Projet },

  ]
})


