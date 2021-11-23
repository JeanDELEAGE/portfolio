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

    <main class="container flex flex-nowrap overflow-x-scroll md:overflow-x-visible flex-row md:flex-wrap justify-start mb-5">
      <div class="min-w-full flex md:flex-col md:flex-wrap"
           v-for="projet in listeProjet" :key="projet.id"
           onclick="this.classList.toggle('translate-x-full')">
        <div
          class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 shadow-lg p-0 max-w-xs md:max-w-3xl mx-auto border border-white bg-white mb-5">
          <div class="h-40 w-full md:w-1/3 md:h-auto grid place-items-center bg-cover bg-center bg-no-repeat"
               :style='{ backgroundImage: `url(${projet.acf.Image_couverture.url})`}'>
          </div>
          <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <h1 class="font-black text-brown_2 md:text-2xl text-xl">{{ projet.acf.titre_projet }}</h1>
            <span class="font-normal text-brown_1 text-base">{{ projet.acf.date_projet }}</span>
            <p class="md:text-lg text-brown_2 text-base">{{ projet.acf.apercu }}</p>
            <div class="flex ju justify-end content-end items-end ">
              <button class="md:w-2/5 p-2 py-2 bg-orange text-cream_1 rounded-md text-base font-extrabold">Découvrir le
                projet
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <aside class="flex justify-center">
      <h2 class="font-black text-brown_2 md:text-2xl text-xl">Rapports téléchargeables</h2>
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
