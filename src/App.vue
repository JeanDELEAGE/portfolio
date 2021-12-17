<template>
  <div>
        <!-- navbar -->
        <nav :class="[isActive ? 'flex justify-end text-white w-screen z-20' : 'flex justify-between text-white w-screen z-20']">
          <div :class="[isActive ? 'pl-5 pr-0 xl:px-12 py-6 flex w-full items-center content-center z-20' : 'flex items-center content-center py-6 z-20']">
            <a :class="[isActive ? 'text-3xl font-bold font-heading z-40' : 'text-3xl font-bold font-heading z-40 pl-5']" href="#">
              <img :src="[isActive ? 'http://localhost/wp_solaso/wp-content/uploads/2021/11/logo_white_green.png' : 'http://localhost/wp_solaso/wp-content/uploads/2021/11/logo_white_green.png']"
                   alt="Solaso77" class="w-20 md:w-24" style="min-width: 5em">
            </a>

            <!-- Nav Links -->
            <ul class="" id="menu"
                :class=" [isActive ? 'hidden md:flex md:px-4 md:px-8 md:ml-auto md:font-semibold md:font-heading md:space-x-4 lg:space-x-12' : 'flex flex-col m-auto h-screen w-full absolute top-0 left-0 z-30 bg-orange font-semibold p-5 justify-center']"
                style="align-items: center !important;" @click.prevent="toggle">
              <router-link to="/"             :class="[isActive ? 'font-sans hover:text-cream_2':'font-sans text-xl pb-5 font-bold']">Accueil</router-link>
              <router-link to="/listeprojet"  :class="[isActive ? 'font-sans hover:text-cream_2':'font-sans text-xl pb-5 font-bold']">Nos projets</router-link>
              <router-link to="/histoire"     :class="[isActive ? 'font-sans hover:text-cream_2':'font-sans text-xl pb-5 font-bold']">Notre histoire</router-link>
              <router-link to="/"             :class="[isActive ? 'font-sans hover:text-cream_2':'font-sans text-xl pb-5 font-bold']">Nous contacter</router-link>
              <router-link to="/"             :class="[isActive ? 'min-w-max nav-item nav-link hover:text-cream_2' :'min-w-max nav-item nav-link text-brown_2 text-xl pb-5']">
                <button :class="[isActive ? 'bg-orange text-cream_1 rounded-md text-base font-extrabold hover:bg-brown_1 px-3 py-1' : 'bg-cream_1 text-orange rounded-md text-xl font-sans p-4 py-2 font-bold']">Faire un don</button>
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
    toggle(isActive) {
      console.log("valeur isActive :", this.isActive);
      this.isActive = !this.isActive;
      if (this.isActive) {
        document.body.classList.remove('overflow-hidden');
        // console.log(this.isActive);
      } else {
        document.body.classList.add('overflow-hidden');
        // console.log(this.isActive);
      }
    },
  }

}
</script>

<style scoped>

</style>
