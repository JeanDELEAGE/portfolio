<template>
  <div class="myscrollbar bg-my_white overflow-x-hidden">
    <!-- Bandeau Image -->
    <div class="absolute top-0 left-0 right-0 h-full md:m-0 md:h-96" v-for="mission in listeMission" :key="mission.id">
      <div class="z-0 h-full w-full relative">
        <div :style='{ backgroundImage: `url(${mission.acf.image.url})`}'
             class="filter brightness-50 bg-no-repeat bg-cover top-0 z-0 bg-top h-full w-full z-0">
        </div>
        <div class="top-1/3 absolute z-20 md:w-2/3 container text-left pl-5 xl:pl-12">
          <h1 class="font-extrabold text-cream_1 text-4xl pr-5 pb-5">
          Agir à travers des actions solidaires et humanitaires
          </h1>
          <p class="font-medium text-cream_1 absolute z-20 xl:text-xl w-2/3 pr-5">
            Sur cette page, vous découvrirez tous nos projets en cours ainsi que les futurs ! Des projets qui
            interviennent dans le domaine de la santé, de l’alimentation, de l’eau.
          </p>
        </div>
        <div class="top-3/4 absolute z-20 w-full text-center">
          <img class="hidden md:w-32 md:block md:font-medium md:text-cream_1 md:text-xl md:font-serif"
               src="https://solaso77.fr/wp-content/uploads/2022/01/Groupe-85.png" alt="Projets"
               style="margin: 0 auto">
        </div>
      </div>
    </div>

    <main class="container flex flex-col mt-64 mb-5 max-w-5xl custom-margin">
      <h1 v-for="mission in listeMission" :key="mission.id" class="w-full justify-center text-center font-extrabold text-brown_2 md:text-2xl text-xl mb-5">{{ mission.acf.titre_mission }}</h1>
      <!-- Slider -->
      <div class="container flex flex-nowrap overflow-x-scroll md:overflow-x-hidden flex-row md:flex-wrap justify-start">
        <div class="min-w-full flex md:flex-col md:flex-wrap"
             v-for="projet in listeProjet" :key="listeProjet.id"
             onclick="this.classList.toggle('translate-x-full')">

          <!-- Card -->
          <div class="relative flex flex-col md:flex-row md:space-x-5 shadow-lg p-0 max-w-xs md:max-w-4xl mx-auto bg-white mb-5">
            <!-- Image -->
            <div class="h-40 w-full md:w-1/3 md:h-auto grid place-items-center bg-cover bg-center bg-no-repeat"
                 :style='{ backgroundImage: `url(${projet.acf.Image_couverture.url})`}'>
            </div>
            <!-- Content -->
            <div class="w-full md:w-2/3 flex flex-col p-3">
              <h1 class="font-black text-brown_2 md:text-2xl text-xl">{{ projet.acf.titre_projet }}</h1>
              <span class="font-normal text-brown_1 text-base">{{ projet.acf.date_projet }}</span>
              <p class="md:text-lg text-brown_2 text-base mb-3">{{ projet.acf.apercu }}</p>
              <div class="flex ju justify-end content-end items-end ">
                <button class="md:w-2/5 p-2 py-2 bg-orange text-cream_1 rounded-md text-base font-extrabold hover:bg-brown_1">
                  <router-link :to="{name:'Projet', params: {id: projet.id} }" @click="scrollToTop">Découvrir le projet</router-link>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>

    <aside class="md:m-auto container flex flex-col items-center max-w-4xl">
      <h2 class="font-black text-brown_2 md:text-2xl text-xl mb-5">Rapports téléchargeables</h2>

      <div class="flex w-5/6 md:min-h-0 bg-cream_1 flex-col md:flex-row mb-5" v-for="compte_rendu in listeCR" :key="compte_rendu.id">
        <div class="md:w-3/4 md:mr-5 p-3">
          <h3 class="font-semibold text-brown_2 md:text-xl text-l">{{ compte_rendu.acf.fichier.title }}</h3>
          <span class="font-normal text-brown_1 text-base">{{ compte_rendu.acf.fichier.caption }}</span>
        </div>
        <button class="w-1/2 md:w-1/4 px-4 py-2 bg-brown_2 text-cream_1 m-3 md:m-0 text-base font-extrabold hover:bg-brown_1">
          <a :href="compte_rendu.acf.fichier.url" download="">Télécharger</a>
        </button>
      </div>
    </aside>
  </div>
</template>

<script>
import param from '@/param/param'

export default {
    name: 'Liste_projet',
    data () {
        return {
            listeProjet:[],
            listeMission:[],
            listeCR:[],
        }
    },
    filters: {

    },
    computed:{
    },

    created(){
        // Liste des projets
       axios.get(param.host+"projet")
       .then(response=>{
           // Récupération de la liste des projets
           this.listeProjet = response.data;
       })
      axios.get(param.host+"mission")
        .then(response=>{
          // Récupération de la liste des missions
          this.listeMission = response.data;
        })
      axios.get(param.host+"compte_rendu")
        .then(response=>{
          // Récupération de la liste des comptes-rendus
          this.listeCR = response.data;
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
    margin-top: 40vh;
  }
}

</style>
