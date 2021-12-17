<template>
  <div class="bg-my_white overflow-x-hidden">
    <!-- Bandeau Image -->
    <div class="absolute top-0 left-0 right-0 h-full md:m-0" v-for="mission in listeMission" :key="mission.id">
      <div class="z-0 h-full w-full relative">
        <div :style='{ backgroundImage: `url(${mission.acf.image.url})`}'
             class="filter brightness-50 bg-no-repeat bg-cover top-0 z-0 bg-top h-full w-full z-0">
        </div>
        <div class="top-1/3 absolute z-20 md:w-2/3 container text-left pl-5 xl:pl-12">
          <h1 class="font-extrabold text-cream_1 text-4xl pr-5 pb-5">
            Agir ensemble à petite échelle, à long terme
          </h1>
          <p class="font-medium text-cream_1 absolute z-20 xl:text-xl w-2/3 pr-5">
            Depuis 2011, SOLASO77 intervient en République Démocratique du Congo, dans la province du Sud-Ubangui, dans un petit village perdu dans la brousse: Bongboka-Monéné.
            Notre objectif est de soutenir des projets autour du développement durable, de la santé et de l’éducation.
          </p>
        </div>
        <div class="top-3/4 absolute z-20 w-full text-center">
          <h2 class="hidden md:w-full md:block md:font-medium md:text-cream_1 md:text-xl md:font-serif ">Projets</h2>
        </div>
      </div>
    </div>

    <main class="container flex flex-col mt-64 mb-5 max-w-5xl custom-margin custom-margin-accueil h-80">
      <div class="bg-green_2 h-80 -m-8">
        <h2 class="w-full block font-medium text-cream_1 text-xl font-serif text-center p-5">Qui sommes nous ?</h2>
        <img src="http://localhost/wp_solaso/wp-content/uploads/2021/11/rdc_agissons.png" class="p-5" alt="rdc_agissons">
      </div>
    </main>

    <aside class="md:m-auto container flex flex-col items-center max-w-4xl">

    </aside>
  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: 'Projet',
  data () {
    return {
      listeProjet:[],
      listeMission:[],
    }
  },
  filters: {

  },
  computed:{
  },

  created(){
    // Liste des vidéos
    axios.get(param.host+"projet")
      .then(response=>{
        // Récupération de la liste des projets
        this.listeProjet = response.data;
        console.log("Liste", this.listeProjet);
      })
    axios.get(param.host+"mission")
      .then(response=>{
        // Récupération de la liste des missions
        this.listeMission = response.data;
        console.log("Liste", this.listeMission);
      })
      .catch(error => console.log(error))
  },
}
</script>

<style scoped>
  .custom-margin-accueil{
    margin-top: 100vh;
  }
</style>


