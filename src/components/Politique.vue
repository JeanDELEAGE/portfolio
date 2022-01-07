<template>
  <div class="myscrollbar bg-my_white overflow-x-hidden">
<!--     Bandeau Image -->
    <div class="absolute top-0 left-0 right-0 h-1/2 md:m-0 md:h-96">
      <div class="z-0 h-full w-full relative">
        <div style='background-image: url("https://solaso77.fr/wp-content/uploads/2021/12/DU-VERT-scaled.jpeg")'
             class="filter brightness-50 bg-no-repeat bg-cover top-0 z-0 bg-top h-full w-full z-0">
        </div>
        <div class="top-1/3 absolute z-20 w-full text-center">
          <h1 v-for="politique in Politique" class="font-extrabold text-cream_1 text-4xl pb-5">{{ politique.acf.titre }}</h1>
        </div>
      </div>
    </div>

    <main class="container pl-8 pr-8 flex flex-col mt-80 mb-5 max-w-5xl" v-for="politique in Politique">
      <router-link to="/" class="hover:text-cream_2 mt-5 mb-5">
        <button @click="scrollToTop"
                class="bg-gray-300 text-brown_2 rounded-md text-base font-extrabold hover:bg-gray-400 px-3 py-1 block">Retour à l'accueil
        </button>
      </router-link>
      <p v-html="politique.acf.contenu" class="md:text-lg text-brown_2 text-base mb-2">{{}}</p>
    </main>
  </div>
</template>

<script>
import param from '@/param/param'

export default {
    name: 'Politique',
    data () {
        return {
            Politique:[],
            politique:{
              contenu:null,
            },
        }
    },
    filters: {

    },
    computed:{
    },

    created(){
      axios.get(param.host+"politique")
        .then(response=>{
          // Récupération de la liste des comptes-rendus
          this.Politique = response.data;
        })
    },
    methods: { scrollToTop() {
        window.scrollTo(0,0);
      },
    }
}
</script>
<style scoped>
</style>
