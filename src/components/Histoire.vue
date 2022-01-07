<template>
  <div class="myscrollbar bg-my_white overflow-x-hidden">
    <!-- Bandeau Image -->
    <div class="absolute top-0 left-0 right-0 h-full md:m-0 md:h-96" v-for="mission in listeMission" :key="mission.id">
      <div class="z-0 h-full w-full relative">
        <div style='background-image: url("https://solaso77.fr/wp-content/uploads/2021/12/batiment-detruit-paysage-scaled.jpeg")'
             class="filter brightness-50 bg-no-repeat bg-cover top-0 z-0 bg-top h-full w-full z-0">
        </div>
        <div class="top-1/3 absolute z-20 md:w-2/3 container text-left pl-5 xl:pl-12">
          <h1 class="font-extrabold text-cream_1 text-4xl pr-5 pb-5">
            L'histoire et le futur de notre association
          </h1>
          <p class="font-medium text-cream_1 absolute z-20 xl:text-xl w-2/3 pr-5">
            Cette section va vous faire découvrir l’histoire de l’association SOLASO77, de sa création jusqu’ à aujourd’hui.
          </p>
        </div>
        <div class="top-3/4 absolute z-20 w-full text-center">
          <img class="hidden md:w-24 md:block md:font-medium md:text-cream_1 md:text-xl md:font-serif"
               src="https://solaso77.fr/wp-content/uploads/2022/01/histoire.png" alt="Histoire"
               style="margin: 0 auto">
        </div>
      </div>
    </div>

    <main class="container mx-auto px-5 mt-56 mb-5 max-w-5xl custom-margin">
      <h1 class="w-full justify-center text-center font-extrabold text-brown_2 md:text-2xl text-xl mb-5">Notre histoire</h1>

      <div class="wrapper max-w-xs md:max-w-7xl">
        <div class="center-line">
          <a href="#" class="scroll-icon"><ion-icon name="chevron-up-outline" class="text-brown_2"></ion-icon>
          </a>
        </div>
        <div v-for="(histoire,index) in dateFilter"
             :class="[index % 2===0? 'row row-1 mb-5' : 'row row-2 mb-5']">
          <section class="shadow-lg">
            <i class="icon"></i>
            <div class="details">
              <span class="title text-brown_2 font-sans font-semibold">{{histoire.acf.titre}}</span>
              <span class="text-brown_1 font-semibold text-xl">{{histoire.acf.annee}}</span>
            </div>
            <p class="text-brown_2">{{histoire.acf.description}}</p>
            <div v-if="index===0" class="flex justify-end content-end items-end ">
              <router-link to="/listeprojet" class="md:w-1/2 p-2 py-2 bg-orange rounded-md hover:bg-brown_1 text-center">
                <button class="text-base font-extrabold text-cream_1 ">Nos projets</button>
              </router-link>
            </div>
          </section>
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
            listeHistoire:[],
            listeMission:[],
        }
    },
    filters: {

    },
    computed:{
      dateFilter: function(){
        function compare(a, b) {
          if (a.acf.annee > b.acf.annee) return -1;
          if (a.acf.annee < b.acf.annee) return 1;
          return 0;
        }
        return this.listeHistoire.sort(compare);
      }
    },

    created(){
        // Liste des vidéos
       axios.get(param.host+"histoire")
       .then(response=>{
           // Récupération de la liste des projets
           this.listeHistoire = response.data;
           console.log(response)
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
    margin-top: 40vh;
  }
}

</style>
