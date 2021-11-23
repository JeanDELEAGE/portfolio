<template>
  <div class="myscrollbar bg-my_white">
    <div v-for="mission in listeMission" :key="mission.id">
      <div :style='{ backgroundImage: `url(${mission.acf.image.url})`}'
           class="font-sans flex"
           style="background-position: top; background-repeat: no-repeat; background-size: cover; top: 0;height: 40vh;
           backdrop-filter: brightness(50%)">
      </div>
      <h1 class="col-12 text-center font-extrabold text-brown_2 md:text-2xl text-xl mt-5 mb-5">{{mission.acf.titre_mission}}</h1>
    </div>

    <main class="container flex flex-nowrap overflow-x-scroll md:overflow-x-hidden flex-row md:flex-wrap justify-start mb-5 max-w-4xl">
      <div class="min-w-full flex md:flex-col md:flex-wrap"
           v-for="projet in listeProjet" :key="projet.id"
           onclick="this.classList.toggle('translate-x-full')">
        <div
          class="relative flex flex-col md:flex-row md:space-x-5 shadow-lg p-0 max-w-xs md:max-w-3xl mx-auto border border-white bg-white mb-5">
          <div class="h-40 w-full md:w-1/3 md:h-auto grid place-items-center bg-cover bg-center bg-no-repeat"
               :style='{ backgroundImage: `url(${projet.acf.Image_couverture.url})`}'>
          </div>
          <div class="w-full md:w-2/3 bg-white flex flex-col p-3">
            <h1 class="font-black text-brown_2 md:text-2xl text-xl">{{ projet.acf.titre_projet }}</h1>
            <span class="font-normal text-brown_1 text-base">{{ projet.acf.date_projet }}</span>
            <p class="md:text-lg text-brown_2 text-base mb-3">{{ projet.acf.apercu }}</p>
            <div class="flex ju justify-end content-end items-end ">
              <button class="md:w-2/5 p-2 py-2 bg-orange text-cream_1 rounded-md text-base font-extrabold">Découvrir le
                projet
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <aside class="container flex flex-col items-center max-w-4xl">
      <h2 class="font-black text-brown_2 md:text-2xl text-xl mb-5">Rapports téléchargeables</h2>

      <div class="flex min-w-full md:w-2/3 md:min-h-0 bg-cream_1 flex-col md:flex-row mb-5" v-for="projet in listeProjet" :key="projet.id">
        <div class="md:w-3/4 md:mr-5 p-3">
          <h3 class="font-semibold text-brown_2 md:text-xl text-l">Alphabétisation des femmes à Bongboka Monéné.</h3>
          <span class="font-normal text-brown_1 text-base">{{ projet.acf.date_projet }}</span>
        </div>
        <button class="w-1/2 md:w-1/4 px-4 py-2 bg-brown_2 text-cream_1 md:m-0 text-base font-extrabold">
          Télécharger
        </button>
      </div>

      <p class="col-12 md:text-lg text-brown_2 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad dolores hic, id itaque minima?</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
