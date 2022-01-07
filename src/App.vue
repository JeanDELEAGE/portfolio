<template>
  <div>
        <!-- navbar -->
        <nav :class="[isActive ? 'flex justify-end text-white w-screen z-20' : 'flex justify-between text-white w-screen z-20']">
          <div :class="[isActive ? 'pl-5 pr-0 xl:px-12 py-6 flex w-full items-center content-center z-20' : 'flex items-center content-center py-6 z-20']">
            <router-link to="/" :class="[isActive ? 'text-3xl font-bold font-heading z-40' : 'text-3xl font-bold font-heading z-40 pl-5']">
              <img :src="[isActive ? 'https://solaso77.fr/wp-content/uploads/2021/11/logo_white_green.png' : 'https://solaso77.fr/wp-content/uploads/2021/11/logo_white_green.png']"
                   alt="Solaso77" class="w-20 md:w-24" style="min-width: 5em">
            </router-link>

            <!-- Nav Links -->
            <ul id="menu"
                class="hidden md:flex md:px-4 md:px-8 md:ml-auto md:font-semibold md:font-heading md:space-x-4 lg:space-x-12"
                style="align-items: center !important;">
              <router-link to="/"             class="font-sans hover:text-cream_2">Accueil</router-link>
              <router-link to="/listeprojet"  class="font-sans hover:text-cream_2">Nos projets</router-link>
              <router-link to="/histoire"     class="font-sans hover:text-cream_2">Notre histoire</router-link>
              <router-link to="/contact"      class="font-sans hover:text-cream_2">Nous contacter</router-link>
              <router-link to="/contact/#donation"             class="min-w-max nav-item nav-link hover:text-cream_2">
                <button class="bg-orange text-cream_1 rounded-md text-base font-extrabold hover:bg-brown_1 px-3 py-1">Faire un don</button>
              </router-link>
            </ul>

            <ul id="menu_mobile"
                class="hidden flex flex-col m-auto h-screen w-full absolute top-0 left-0 z-30 bg-orange font-semibold p-5 justify-center"
                style="align-items: center !important;" @click.prevent="toggle()">
              <router-link to="/"             class="font-sans text-xl pb-5 font-bold">Accueil</router-link>
              <router-link to="/listeprojet"  class="font-sans text-xl pb-5 font-bold">Nos projets</router-link>
              <router-link to="/histoire"     class="font-sans text-xl pb-5 font-bold">Notre histoire</router-link>
              <router-link to="/contact"      class="font-sans text-xl pb-5 font-bold">Nous contacter</router-link>
              <router-link to="/contact/#donation"             class="min-w-max nav-item nav-link text-brown_2 text-xl pb-5">
                <button class="bg-cream_1 text-orange rounded-md text-xl font-sans p-4 py-2 font-bold">Faire un don</button>
              </router-link>
            </ul>

          </div>

          <!-- Nav Toogle -->
          <a class="navbar-burger self-center mr-12 z-20 md:hidden" href="#" @click="toggle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover: hover:text-cream_2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>
        </nav>
   <router-view></router-view>

      <footer class="flex flex-wrap px-4 px-8 ml-auto md:space-x-4 lg:space-x-12 bg-green_2 justify-center custom-footer">
          <div class="flex flex-col mt-5 mb-5 pr-3 pl-3">
            <h1 class="text-cream_2 font-semibold text-lg">Nos partenaires</h1>
            <div class="text-my_white flex flex-col ">
              <a href="#">Électricité Sans Frontière (ESF)</a>
              <a href="#">Gaz De France (GDF)</a>
              <a href="#">Électricité De France (EDF) </a>
            </div>
          </div>

          <div class="mt-5 mb-5 pr-3 pl-3">
          <h1 class="text-cream_2 font-semibold text-lg">Plus d'informations</h1>
            <div class="flex flex-col text-my_white">
              <router-link to="/"             class="font-sans hover:text-cream_2">Accueil</router-link>
              <router-link to="/listeprojet"  class="font-sans hover:text-cream_2">Nos projets</router-link>
              <router-link to="/histoire"     class="font-sans hover:text-cream_2">Notre histoire</router-link>
              <router-link to="/contact"      class="font-sans hover:text-cream_2">Nous contacter</router-link>
              <router-link to="/"             class="font-sans hover:text-cream_2">Politique de confidentialité</router-link>
              <router-link to="/mention"      class="font-sans hover:text-cream_2">Mentions légales</router-link>
            </div>
          </div>

          <div class="mt-5 mb-5 pr-3 pl-3">
            <h1 class="text-cream_2 font-semibold text-lg">Prenons contact</h1>
            <div class="text-my_white">
            <router-link to="/"             class="font-sans hover:text-cream_2">Nous contacter</router-link>
            <p>Tél : 06 06 06 06 06</p>
            <p>solaso77@ikmail.com</p>
            </div>
          </div>

        <div class="mt-5 mb-5 pr-3 pl-3">
          <a :class="[isActive ? 'text-3xl font-bold font-heading z-40' : 'text-3xl font-bold font-heading z-40 pl-5']" href="#">
            <img :src="[isActive ? 'https://solaso77.fr/wp-content/uploads/2021/11/logo_white_green.png' : 'https://solaso77.fr/wp-content/uploads/2021/11/logo_white_green.png']"
                 alt="Solaso77" class="w-20 md:w-24" style="min-width: 5em">
          </a>
        </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      isActive: true,
    }
  },
  methods: {
    toggle() {
      console.log("valeur isActive :", this.isActive);
      this.isActive = !this.isActive;
      if (this.isActive) {
        document.body.classList.remove('overflow-hidden');
        document.querySelector('#menu_mobile').classList.add('hidden');
      } else {
        document.body.classList.add('overflow-hidden');
        document.querySelector('#menu_mobile').classList.remove('hidden');
      }
    },
  }

}
</script>

<style scoped>

</style>
