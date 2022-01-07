<template>
  <div class="bg-my_white overflow-x-hidden myscrollbar">
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
          <h2 class="font-medium text-cream_1 absolute z-20 xl:text-xl w-2/3 pr-5">
            Depuis 2011, SOLASO77 intervient en République Démocratique du Congo, dans la province du Sud-Ubangui, dans un petit village perdu dans la brousse: Bongboka-Monéné.
            Notre objectif est de soutenir des projets autour du développement durable, de la santé et de l’éducation.
          </h2>
        </div>
        <div class="top-3/4 absolute z-20 w-full text-center">
          <img class="hidden md:w-44 md:block md:font-medium md:text-cream_1 md:text-xl md:font-serif"
               src="https://solaso77.fr/wp-content/uploads/2022/01/presentation.png" alt="Présentation"
               style="margin: 0 auto">
        </div>
      </div>
    </div>

    <!-- Bandeau Qui sommes-nous -->
    <div class="flex flex-col bg-green_2 w-full mb-5 z-20 h-auto pb-8 relative" style="margin-top: 88vh;">
        <h1 class="w-full block font-bold md:font-extrabold text-my_white text-2xl text-center m-3 p-5">Intervenir, développer, accompagner</h1>
        <div class="container flex flex-row align-top md:space-x-12 md:flex-nowrap flex-wrap ">
          <!-- Card -->
          <div class="md:w-1/2">
            <video autoplay loop poster="https://solaso77.fr/wp-content/uploads/2021/12/batiment-et-gens.jpeg" muted controls
                   src="https://solaso77.fr/wp-content/uploads/2022/01/Village-matin-compresse.mp4" type="video/mp4"
                   class="w-full h-full object-cover shadow-lg">
            </video>
          </div>
          <div class="w-full m-0 p-5 md:p-0 md:w-1/2 mt-1/4 z-20" >
            <p class="md:text-lg text-cream_1 text-em mb-4 xl:pr-12">
              SOLASO77 c’est une association qui appui à des initiatives de solidarité internationale se déroulant dans
              des pays émergents au bénéfice exclusif des populations concernées, soutenir prioritairement les projets de
              développement durable, les actions touchant à la santé, l'éducation et plus particulièrement celle des
              femmes ; soutenir l'essor d'initiatives locales notamment sous la forme de création de microentreprises.
            </p>
            <router-link to="/histoire"
                         class="md:w-1/4 p-2 py-2 bg-orange rounded-md hover:bg-brown_1 text-center">
              <button class="text-base font-extrabold text-cream_1 ">Notre histoire</button>
            </router-link>
          </div>
        </div>
          <img src="https://solaso77.fr/wp-content/uploads/2022/01/Groupe-84.png"
               class="hidden xl:block absolute z-10 bottom-0 right-0 border-0 p-5 md:w-1/3 lg:w-2/5" alt="rdc_agissons">
      </div>

    <h1 class="w-full block font-bold md:font-extrabold text-brown_2 text-2xl text-center mt-5 mb-8">Des acteurs engagés et solidaires</h1>
    <main :class="[display ? 'overflow-hidden' : 'overflow-x-scroll container flex flex-row mb-5 max-w-5xl']">
      <!-- Participants -->
      <div v-for="(participant, id) in listeParticipant" :key="participant.id"
           :class="[display ? 'hidden' : 'relative flex flex-col space-x-5 md:space-x-0 p-0 mx-auto mb-5 items-center cursor-pointer']"
           style="width: min-content"
           @click="showImage(id)">
        <!-- Image -->
        <div class="rounded-full h-28 w-28 block grid place-items-center bg-cover bg-center bg-no-repeat hover:filter hover:brightness-50"
             style="margin: 0 auto;"
             :style='{ backgroundImage: `url(${participant.acf.photo.url})`}'>
        </div>
        <!-- Content -->
        <div class="w-full flex flex-col p-3 text-center m-0">
          <h3 class="font-bold text-brown_2 text-lg mb-3">{{participant.acf.nom}}</h3>
          <p class="text-green_2 text-base">{{participant.acf.role}}</p>
        </div>
      </div>
      <!-- PopUp -->
      <div :class="[display ? 'block m-auto container w-5/6 bg-opacity-30' : 'hidden']">
        <div class="relative flex flex-col md:flex-row md:space-x-5 shadow-lg ml-5 mr-5 p-0 max-w-2xl lg:max-w-4xl mx-auto bg-white mb-8">
          <!-- Image -->
          <div class="rounded-full h-36 w-36 m-5 grid place-items-center bg-cover bg-center bg-no-repeat"
               :style='{ backgroundImage: `url(${listeParticipant[currentAvatarId].acf.photo.url})`}'>
          </div>
          <!-- Content -->
          <div class="w-full md:w-2/3 flex flex-col p-3 h-auto">
            <h3 class="font-bold text-brown_2 text-lg mb-3">{{ listeParticipant[currentAvatarId].acf.nom }}</h3>
            <p class="text-green_2 text-base">{{ listeParticipant[currentAvatarId].acf.role }} | {{ listeParticipant[currentAvatarId].acf.date_arrive }}</p>
            <br/>
            <h1 class="font-extrabold text-brown_2 text-xl pr-5 pb-5">L'implication</h1>
            <p class="font-medium text-brown_2 w-full pr-5">
              {{ listeParticipant[currentAvatarId].acf.implication }}</p>
            <h1 class="font-extrabold text-brown_2 text-xl pr-5 pb-5">Description</h1>
            <p class="font-medium text-brown_2 w-full pr-5">
              {{ listeParticipant[currentAvatarId].acf.description_participant }}</p>
            <div class="mt-5 flex justify-end content-end items-end">
              <button
                class="md:w-1/6 p-2 py-2 bg-orange text-cream_1 rounded-md text-base font-extrabold hover:bg-brown_1"
              @click="closePopup"
              >
                Quitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <aside class="w-full bg-brown_2 mt-5">
      <div class="md:m-auto container flex flex-col items-center max-w-5xl">
        <h2 class="w-full block font-bold md:font-extrabold text-cream_1 text-2xl text-center mt-5 mb-8">Nos actions</h2>

        <div class="flex flex-row flex-auto flex-wrap items-end justify-center w-full">
          <div class="w-full sm:w-60 flex items-center h-40 md:h-60 m-2" :style='{ backgroundImage: `url(${projet.acf.Image_couverture.url})`}'
               v-for="projet in listeProjet" :key="listeProjet.id">
            <h2 class="text-center font-bold flex-wrap md:font-extrabold text-3xl text-cream_1 top-1/3 left-1/3"
                style="margin: 0 auto">
              <router-link :to="{name:'Projet', params: {id: projet.id} }" class="hover:text-orange" @click="scrollToTop">
                {{ projet.acf.titre_projet }}
              </router-link>
            </h2>
          </div>
        </div>

        <router-link to="/listeprojet" class="hover:text-cream_2 m-5">
          <button
            class="bg-green_1 text-brown_2 rounded-md text-base font-extrabold hover:bg-green_2 px-3 py-1 block"
            style="margin: 0 auto">Tous nos projets
          </button>
        </router-link>

      </div>
    </aside>

    <div class="container mb-5">
      <h2 class="w-full block font-bold md:font-extrabold text-brown_2 text-2xl text-center mt-5 mb-0">Envie de nous soutenir ?</h2>
      <router-link to="/contact/#donation" class="hover:text-cream_2 m-5" style="width: min-content">
        <button
          class="bg-orange text-cream_1 rounded-md text-base font-extrabold hover:bg-brown_1 px-6 py-3 block"
          style="margin: 0 auto">Faire un don
        </button>
      </router-link>
      <p class="text-green_2 text-base text-center">Un problème ?<router-link to="contact" class="font-bold"> Contactez-nous !</router-link></p>
    </div>
  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: 'Accueil',
  data () {
    return {
      display: false,
      listeProjet:[],
      listeParticipant:[],
      listeMission:[],
      currentAvatarId: 0,
    }
  },
  methods:{
    showImage(id = 0){
      this.display= true;
      this.currentAvatarId = id;
    },
    closePopup() {
      this.display = false;
      this.currentAvatarId = 0;
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
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
      })
    axios.get(param.host+"participant")
      .then(response=>{
        // Récupération de la liste des missions
        this.listeParticipant = response.data;
        console.log("Liste", this.listeParticipant);
      })
      .catch(error => console.log(error))
  },
}
</script>

<style scoped>
  .custom-margin-accueil{
    margin-top: 92vh;
  }
</style>
