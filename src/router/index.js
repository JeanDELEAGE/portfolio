import Vue from 'vue'
import Router from 'vue-router'

import Accueil from '@/components/Accueil'
import Liste_projet from '@/components/Liste_projet'
import Projet from '@/components/Projet'
import Histoire from '@/components/Histoire'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',                name: 'Accueil',              component: Accueil } ,
    { path: '/listeprojet',     name: 'Liste_projet',         component: Liste_projet },
    { path: '/projet/:id',          name: 'Projet',               component: Projet },
    { path: '/histoire',        name: 'Histoire',             component: Histoire },

  ]
})


