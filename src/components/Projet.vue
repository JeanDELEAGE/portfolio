<template>
  <div class="myscrollbar bg-my_white overflow-x-hidden myscrollbar">
<!--     Bandeau Image -->
    <div class="absolute top-0 left-0 right-0 h-1/2 md:m-0 md:h-96">
      <div class="z-0 h-full w-full relative">
        <div :style='{ backgroundImage: `url(${Projet.acf.Image_couverture.url})`}'
             class="filter brightness-50 bg-no-repeat bg-cover top-0 z-0 bg-top h-full w-full z-0">
        </div>
        <div class="top-1/3 absolute z-20 w-full text-center">
          <h1 class="font-extrabold text-cream_1 text-4xl pb-5">{{Projet.acf.titre_projet}}</h1>
        </div>
      </div>
    </div>

    <main class="container pl-8 pr-8 flex flex-col mt-80 mb-5 max-w-5xl">
      <h1 class="w-full justify-center text-center font-extrabold text-brown_2 md:text-2xl text-xl mb-3 mt-6">{{Projet.acf.sous_titre_projet}}</h1>
      <p v-html="Projet.acf.introduction" class="md:text-lg text-brown_2 text-base mb-2">{{}}</p>

      <h2 class="w-full justify-left text-left font-bold text-brown_2 md:text-xl text-lg mb-3 mt-5">Pourquoi ce projet</h2>
      <p v-html="Projet.acf.pourquoi_ce_projet" class="md:text-lg text-brown_2 text-base mb-3">{{}}</p>

      <h2 class="w-full justify-left text-left font-bold text-brown_2 md:text-xl text-lg mb-3 mt-5">L'implication de Solaso77</h2>
      <p v-html="Projet.acf.implication" class="md:text-lg text-brown_2 text-base mb-3">{{}}</p>

      <h2 class="w-full justify-left text-left font-bold text-brown_2 md:text-xl text-lg mb-3 mt-5">À quoi servent les dons ?</h2>
      <p v-html="Projet.acf.les_dons" class="md:text-lg text-brown_2 text-base mb-3">{{}}</p>
    </main>
    <aside class="w-full h-40 mt-5 mb-8 bg-green_2 flex flex-row space-x-12">
      <div class="justify-center items-center text-center w-1/3">
        <p class="font-extrabold text-cream_1 text-2xl pb-5">1</p>
        <p class="md:text-lg text-cream_2 text-base mb-3">{{Projet.acf.objectif_1}}</p>
      </div>
      <div class="justify-center items-center text-center w-1/3">
        <p class="font-extrabold text-cream_1 text-2xl pb-5">2</p>
        <p class="md:text-lg text-cream_2 text-base mb-3">{{Projet.acf.objectif_2}}</p>
      </div>
      <div class="justify-center items-center text-center w-1/3">
        <p class="font-extrabold text-cream_1 text-2xl pb-5">3</p>
        <p class="md:text-lg text-cream_2 text-base mb-3">{{Projet.acf.objectif_3}}</p>
      </div>
    </aside>
    <div class="w-full md:pl-5 md:pr-5 flex flex-row flex-nowrap flex-wrap overflow-x-scroll md:overflow-hidden md:flex-wrap mt-5 mb-5 md:max-w-7xl md:justify-center" style="margin: 0 auto">
      <div :style='{ backgroundImage: `url(${galerie.full_image_url})`}' v-for="galerie in Projet.acf.galerie" :key="galerie.id"
           class="bg-no-repeat bg-cover bg-center h-36 md:h-60 w-40 md:w-80 m-3 flex items-end cursor-pointer" @click="legend=!legend">
        <p :class="[legend? 'hidden' : 'inline-block text-center items-center px-5 py-1 text-brown_1 text-lg font-bold bg-my_white']" style="margin: 0 auto">{{galerie.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import param from '@/param/param'

export default {
    name: 'Projet',
    data () {
        return {
          legend:true,
            Projet:{
              id:0,
              acf:{
                Image_couverture:{
                url:null,
                },
                introduction:null,
                type_projet:{
                  post_title:null,
                },
                galerie:{
                  full_image_url:null,
                  thumbnail_image_url:null,
                  large_srcset:null,
                  medium_srcset:null,
                },
              }
            },
            listeMission:[],
            listeCR:[],
        }
    },
    filters: {

    },
    computed:{
    },

    created(){
      this.Projet.id = this.$route.params.id;
      console.log("id projet", this.Projet.id);
        // Projet
       axios.get(param.host+"projet/"+this.Projet.id)
       .then(response=>{
           // Récupération de la liste des projets
           this.Projet = response.data;
         console.log("Projet:", this.Projet);
       })
      axios.get(param.host+"mission")
        .then(response=>{
          // Récupération de la liste des missions
          this.listeMission = response.data;
        })
    },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 230px) {
  .custom-margin{
    margin-top: 95vh;
  }

}

@media (min-width: 768px) {
  .custom-margin{
    margin-top: 48vh;
  }
}

</style>
