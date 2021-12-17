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
          <h2 class="hidden md:w-full md:block md:font-medium md:text-cream_1 md:text-xl md:font-serif ">Projets</h2>
        </div>
      </div>
    </div>

    <main class="container mx-auto px-5 mt-56 mb-5 max-w-5xl custom-margin">
      <h1 class="w-full justify-center text-center font-extrabold text-brown_2 md:text-2xl text-xl mb-5">Notre histoire</h1>
      <!-- Card -->
      <div class="relative flex flex-col md:flex-row md:space-x-5 shadow-lg p-0 max-w-xs md:max-w-4xl mx-auto bg-green_2 mb-5">
        <!-- Content -->
        <div class="w-full md:w-2/3 flex flex-col p-5">
          <h1 class="font-black text-white md:text-2xl text-xl">Cette année</h1>
          <span class="font-normal text-cream_2 text-base">Date</span>
          <p class="md:text-lg text-cream_1 text-base mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda atque blanditiis consequatur ducimus enim facere fugiat harum magnam nisi quidem quod, reiciendis repellendus voluptates!}</p>
          <div class="flex ju justify-end content-end items-end ">
            <button class="md:w-1/4 p-2 py-2 bg-orange text-cream_1 rounded-md text-base font-extrabold hover:bg-brown_1">Nos projets</button>
          </div>
        </div>
        <!-- Image -->
        <div class="flex-col-reverse h-40 w-full md:w-1/3 md:h-auto grid place-items-center bg-cover bg-center bg-no-repeat"
             :style='{ backgroundImage: `url(http://localhost/wp_solaso/wp-content/uploads/2021/11/sunrise.jpeg)`}'>
        </div>
      </div>

      <div class="wrapper">
        <div class="center-line">
          <a href="#" class="scroll-icon"><ion-icon name="chevron-up-outline" class="text-brown_2"></ion-icon>
          </a>
        </div>
        <div class="row row-1" id="row-1-1">
          <section class="shadow-lg">
            <a href="#row-1-1"><i class="icon"></i></a>
            <div class="details">
              <span class="title text-brown_2 font-sans font-semibold">Title of Section 1</span>
              <span class="text-brown_1 font-semibold text-xl">2021</span>
            </div>
            <p class="text-brown_2">Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
          </section>
        </div>
        <div class="row row-2" id="row-2-1">
          <section class="shadow-lg">
            <a href="#row-2-1"><i class="icon"></i></a>
            <div class="details">
              <span class="title text-brown_2 font-sans font-semibold">Title of Section 1</span>
              <span class="text-brown_1 font-semibold text-xl">2021</span>
            </div>
            <p class="text-brown_2">Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
          </section>
        </div>
        <div class="row row-1" id="row-1-2">
          <section class="shadow-lg">
            <a href="#row-1-2"><i class="icon"></i></a>
            <div class="details">
              <span class="title text-brown_2 font-sans font-semibold">Title of Section 1</span>
              <span class="text-brown_1 font-semibold text-xl">2021</span>
            </div>
            <p class="text-brown_2">Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
          </section>
        </div>
        <div class="row row-2" id="row-2-2">
          <section class="shadow-lg">
            <a href="#row-2-2"><i class="icon"></i></a>
            <div class="details">
              <span class="title text-brown_2 font-sans font-semibold">Title of Section 1</span>
              <span class="text-brown_1 font-semibold text-xl">2021</span>
            </div>
            <p class="text-brown_2">Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
          </section>
        </div>
        <div class="row row-1" id="row-1-3">
          <section class="shadow-lg">
            <a href="#row-1-3"><i class="icon"></i></a>
            <div class="details">
              <span class="title text-brown_2 font-sans font-semibold">Title of Section 1</span>
              <span class="text-brown_1 font-semibold text-xl">2021</span>
            </div>
            <p class="text-brown_2">Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
          </section>
        </div>
        <div class="row row-2" id="row-2-3">
          <section class="shadow-lg">
            <a href="#row-2-3"><i class="icon"></i></a>
            <div class="details">
              <span class="title text-brown_2 font-sans font-semibold">Title of Section 1</span>
              <span class="text-brown_1 font-semibold text-xl">2021</span>
            </div>
            <p class="text-brown_2">Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
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
