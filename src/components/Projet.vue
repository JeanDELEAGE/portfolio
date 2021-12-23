<template>
  <div class="myscrollbar bg-my_white overflow-x-hidden bg-cream_1">
<!--     Bandeau Image -->
    <div class="absolute top-0 left-0 right-0 h-full md:m-0 md:h-96">
      <div class="z-0 h-full w-full relative">
        <div :style='{ backgroundImage: `url(${Projet.acf.Image_couverture.url})`}'
             class="filter brightness-50 bg-no-repeat bg-cover top-0 z-0 bg-top h-full w-full z-0">
        </div>
        <div class="top-1/3 absolute z-20 w-full text-center">
          <h1 class="font-extrabold text-cream_1 text-4xl pb-5">{{Projet.acf.titre_projet}}</h1>
        </div>
      </div>
    </div>

    <main class="container flex flex-col mt-64 mb-5 max-w-5xl custom-margin">
      <h1 class="w-full justify-center text-center font-extrabold text-brown_2 md:text-2xl text-xl mb-5">{{Projet.acf.sous_titre_projet}}</h1>
      <!-- Slider -->
      <div class="container flex flex-nowrap flex-col justify-start">
        <div class="min-w-full flex md:flex-col md:flex-wrap" onclick="this.classList.toggle('translate-x-full')">
          <p v-html="Projet.acf.introduction" class="md:text-lg text-brown_2 text-base mb-3">{{}}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import param from '@/param/param'

export default {
    name: 'Projet',
    data () {
        return {
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
